import clientPromise from "../../../lib/mongodb";
import { getSession } from "next-auth/react"

export default async function TestAPI(req, res){
    const session = await getSession({req})
    if(!session){
        res.json({message: 'no access'})
    } else {
        const client = await clientPromise
        const testDb = await client.db("test-Db")
        const tabelMatakuliah = await testDb.collection("tabelMatakuliah")
        if(req.method === "GET"){
            const data = await tabelMatakuliah.find({}).toArray()

            res.json(data)
        }
    }
}