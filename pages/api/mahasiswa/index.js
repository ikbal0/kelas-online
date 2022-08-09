import clientPromise from "../../../lib/mongodb"
import { getSession } from "next-auth/react"

export default async function (req, res){
  const session = await getSession({req})

  
  if(!session){
    res.json({data: 'no access'})
  } else {
    const client = await clientPromise
    const testDb = await client.db("test-Db")
    const tblMahasiswa = await testDb.collection("tblMahasiswa")
    const data = tblMahasiswa.aggregate( [
      {
        $lookup: {
          from: "userTbl",
          localField: "userId",    // field in the orders collection
          foreignField: "_id",  // field in the items collection
          as: "a"
        }
      },
      {
        $replaceRoot: { newRoot: { $mergeObjects: [ { $arrayElemAt: [ "$a", 0 ] }, "$$ROOT" ] } }
      },
      { $project: { a: 0 } }
    ])
      
    const result = await data.toArray()
    if (req.method === "GET"){
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