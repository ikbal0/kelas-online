import clientPromise from "../../../lib/mongodb"
import { getSession } from "next-auth/react"

export default async function ApiMahasiswa(req, res){
    const session = await getSession({req})
    
    if(!session){
        res.write({data: 'no access'})
    } else {
        const client = await clientPromise
        const testDb = await client.db("test-Db")
        const tblDosen = await testDb.collection("tblDosen")
        
        if (req.method === "GET"){
            const data = await tblDosen.aggregate( [
                {
                    $lookup: {
                        from: "userTbl",
                        localField: "userId",    // field in the orders collection
                        foreignField: "_id",  // field in the items collection
                        as: "a"
                    }
                },
                {
                    $lookup: {
                        from: "tabelMatakuliah",
                        localField: "matakuliahId",
                        foreignField: "_id",
                        as: "b"
                    }
                },
                {
                    $replaceRoot: { newRoot: { $mergeObjects: [ { $arrayElemAt: [ "$a", 0 ] }, "$$ROOT" ] } }
                },
                {
                    $replaceRoot: { newRoot: { $mergeObjects: [ { $arrayElemAt: [ "$b", 0 ] }, "$$ROOT" ] } }
                },
                { 
                    $project: { a: 0, b: 0, matakuliahId: 0, userId: 0} 
                }
            ])
                
            const result = await data.toArray()
            
            res.json(result)

        }
    }
}