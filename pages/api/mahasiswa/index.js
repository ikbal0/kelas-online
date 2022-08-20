import clientPromise from "../../../lib/mongodb"
import { getSession } from "next-auth/react"
import { MongoClient, ObjectId } from "mongodb"

const formidable = require('formidable')
const fs = require('fs')

export const config = {
  api: {
      bodyParser: false,
  }
}

export default async function ApiMahasiswa(req, res){
  const session = await getSession({req})
  
  if(!session){
    res.write({data: 'no access'})
  } else {
    const from = formidable()
    const client = await clientPromise
    const testDb = await client.db("test-Db")
    const tblMahasiswa = await testDb.collection("tblMahasiswa")
    const userTbl = await testDb.collection("userTbl")
    
    const date = new Date()
    const time = date.getTime()

    if (req.method === "GET"){
      const data = await tblMahasiswa.aggregate( [
        {
          $lookup: {
            from: "userTbl",
            localField: "userId",    // field in the orders collection
            foreignField: "_id",  // field in the items collection
            as: "a"
          },
          $lookup: {
            from: "tblKelas",
            localField: "idKelas",    // field in the orders collection
            foreignField: "_id",  // field in the items collection
            as: "b"
          },
        },
        {
          $lookup: {
            from: "tabelJurusan",
            localField: "b.idJurusan",
            foreignField: "_id",
            as: "c"
          }
        },
        {
          $replaceRoot: { newRoot: { $mergeObjects: [ { $arrayElemAt: [ "$a", 0 ] }, "$$ROOT" ] } }
        },
        {
          $replaceRoot: { newRoot: { $mergeObjects: [ { $arrayElemAt: [ "$b", 0 ] }, "$$ROOT" ] } }
        },
        {
          $replaceRoot: { newRoot: { $mergeObjects: [ { $arrayElemAt: [ "$c", 0 ] }, "$$ROOT" ] } }
        },
        { $project: { a: 0, b: 0, c: 0, idKelas: 0, userId: 0, idJurusan: 0} }
      ])
        
      const result = await data.toArray()
      
      res.json({session, result})

    } 
    
    if (req.method === "DELETE") {
      from.parse(req, async (err, fields) => {
        const id = fields.id
        const response = await tblMahasiswa.findOne({_id: new ObjectId(id)})
        const path = "public/assets/user/Mhs/photo/" + response.fileName

        fs.unlink(path, async (err) => {
          if(err) throw err

          const deletedUser = await userTbl.deleteOne({_id: response.userId})
          const deletedMhs = await tblMahasiswa.deleteOne({_id: new ObjectId(id)})
          res.json({deletedUser: deletedUser.deletedCount, deletedMhs: deletedMhs.deletedCount})
        })
      })
    }

    if (req.method === "POST") {
      from.parse(req, async (err, fields, files) => {
        const namaSiswa = fields.namaSiswa
        const nip = fields.nip
        const kelas = fields.kelas
        const email = fields.email
        const password = fields.password
        const alamatLenggkap = fields.alamatLenggkap
        const kota = fields.kota
        const provinsi = fields.provinsi
        const kodePos = fields.kodePos
        const fileName = namaSiswa + time + files.fileName.originalFilename
        const oldPath = files.fileName.filepath
        const newPath = "public/assets/user/Mhs/photo/" + fileName

        if(
          !namaSiswa ||
          !nip ||
          !kelas ||
          !email ||
          !password ||
          !alamatLenggkap ||
          !kota ||
          !provinsi ||
          !kodePos ||
          !fileName
        ){
          res.redirect(307, '/staff/mahasiswa')
        } else {
          const result = await userTbl.insertOne({
            email,
            password,
            level: 1,
          })

          await tblMahasiswa.insertOne({
            namaSiswa,
            nip,
            alamat: {
              kota,
              provinsi,
              kodePos,
              alamatLenggkap
            },
            userId: result.insertedId,
            fileName,
            idKelas: new ObjectId(kelas)
          })

          fs.rename(oldPath, newPath, (err) => {
            if(err) throw err
            res.redirect(307, '/staff/mahasiswa')
          })
        }
      })
    }
  }
}