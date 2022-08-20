import { table } from 'console'
import next from 'next'
import clientPromise from '../../../lib/mongodb'
import { getSession } from "next-auth/react"

const fs = require('fs')
const formidable = require('formidable')

export const config = {
    api: {
        bodyParser: false,
    }
}

export default async function TestAPI(req, res){
    const client = await clientPromise
    const testDb = await client.db("test-Db")
    const tblMahasiswa = await testDb.collection("tblMahasiswa")
    const userTbl = await testDb.collection("userTbl")

    const session = await getSession({req})
    
    if(session){
        if (req.method === "GET") {
            const request = await tblMahasiswa.find({}).toArray()

            res.json(request)
        }
        
        if (req.method === "POST") {
            const from = formidable()

            from.parse(req, (err, fields, files) => {
                if(err){
                    next(err);
                    return;
                }
                const oldPath = files.fileName.filepath
                const newPath = "public/" + files.fileName.originalFilename

                fs.rename(oldPath, newPath, (err) => {
                    if(err) throw err
                    res.redirect(307, '/test')
                })
            })
        }
    } else {
        res.json({data: 'no access'})
    }
}