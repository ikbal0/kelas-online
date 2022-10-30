import clientPromise from "../../../lib/mongodb";
import { getSession } from "next-auth/react"

export default async function APIJurusan(req, res){
    const session = await getSession({req})
    if(!session){
        res.json({message: 'no access'})
    } else {
        const client = await clientPromise
        const testDb = await client.db("test-Db")
        const tabelJurusan = await testDb.collection("tabelJurusan")
        if(req.method === "GET"){
            const data = await tabelJurusan.find({}).toArray()

            res.json(data)
        }
    }
}