import clientPromise from "../../../lib/mongodb"
import { getSession } from "next-auth/react"

export default async function ApiMahasiswa(req, res){
  const session = await getSession({req})

  
  if(!session){
    res.json({data: 'no access'})
  } else {
    const client = await clientPromise
    const testDb = await client.db("test-Db")
    const tblMahasiswa = await testDb.collection("tblMahasiswa")
    
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

    } else if (req.method === "POST") {
      const name = req.body.name
      const password = req.body.password
      const email = req.body.email
      const nip = req.body.nip
      const userLast_update = new Date()

      await createListing(client, {
        name: name,
        password: password,
        email: email,
        nip: nip,
        last_update: userLast_update
      })

      async function createListing(client, newListing) {
        const result = client.db("e_learning_db").collection("userTbl").insertOne(newListing)
        console.log(`New Listing created with the following id : ${result.insertedId}`)
      }

    }
  }
}