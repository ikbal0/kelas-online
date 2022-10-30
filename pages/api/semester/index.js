import clientPromise from "../../../lib/mongodb"
import { getSession } from "next-auth/react"

export default async function ApiSemester(req, res){
    const session = await getSession({req})
    
    if(!session){
        res.write({data: 'no access'})
    } else {
        const client = await clientPromise
        const testDb = await client.db("test-Db")
        const tblSemester = await testDb.collection("tblSemester")
        
        if (req.method === "GET"){
            const data = await tblSemester.aggregate( [
                {
                    $lookup: {
                        from: "tblKelas",
                        localField: "idKelas",    // field in the tblSemester collection
                        foreignField: "_id",  // field in the tblKelas collection
                        as: "a"
                    }
                },
                {
                    $lookup: {
                        from: "tblDosen",
                        localField: "idDosen",
                        foreignField: "_id",
                        as: "b"
                    }
                },
                {
                    $lookup: {
                        from: "tabelJurusan",
                        localField: "a.idJurusan",
                        foreignField: "_id",
                        as: "c"
                    }
                },
                {
                    $lookup: {
                        from: "userTbl",
                        localField: "b.userId",
                        foreignField: "_id",
                        as: "d"
                    }
                },
                {
                    $lookup: {
                        from: "tabelMatakuliah",
                        localField: "b.matakuliahId",
                        foreignField: "_id",
                        as: "e"
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
                {
                    $replaceRoot: { newRoot: { $mergeObjects: [ { $arrayElemAt: [ "$d", 0 ] }, "$$ROOT" ] } }
                },
                {
                    $replaceRoot: { newRoot: { $mergeObjects: [ { $arrayElemAt: [ "$e", 0 ] }, "$$ROOT" ] } }
                },
                { 
                    $project: { a: 0, b: 0, c: 0, d: 0, e: 0, idKelas: 0, idDosen: 0, userId: 0, matakuliahId: 0, idJurusan: 0, password: 0} 
                }
            ])
                
            const result = await data.toArray()
            
            res.json(result)

        }
    }
}