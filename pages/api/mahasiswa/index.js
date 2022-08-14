import clientPromise from "../../../lib/mongodb"
import { getSession } from "next-auth/react"
import { MongoClient, ObjectId } from "mongodb"

export default async function ApiMahasiswa(req, res){
  const session = await getSession({req})

  
  if(!session){
    res.write({data: 'no access'})
  } else {
    const client = await clientPromise
    const testDb = await client.db("test-Db")
    const tblMahasiswa = await testDb.collection("tblMahasiswa")
    const userTbl = await testDb.collection("userTbl")
    
    if (req.method === "GET"){
      const data = tblMahasiswa.aggregate( [
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
      const id = req.body.id

      const response = await tblMahasiswa.findOne({_id: new ObjectId(id)})
      console.log({userid: response.userId, idMhs: id})
      const deletedUser = await userTbl.deleteOne({_id: response.userId})
      const deletedMhs = await tblMahasiswa.deleteOne({_id: new ObjectId(id)})
      res.json({deletedUser: deletedUser.deletedCount, deletedMhs: deletedMhs.deletedCount})
    }
  }
}