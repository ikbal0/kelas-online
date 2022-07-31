import clientPromise from "../../lib/mongodb"

export default async function (req, res){

  // `await clientPromise` will use the default database passed in the MONGODB_URI
  // However you can use another database (e.g. myDatabase) by replacing the `await clientPromise` with the following code:
  //
  // `const client = await clientPromise`
  // `const db = client.db("myDatabase")`
  //
  // Then you can execute queries against your database like so:
  // db.find({}) or any of the MongoDB Node Driver commands


  const client = await clientPromise
  const db_e_learning_db = await client.db("e_learning_db")
  const userTbl = await db_e_learning_db.collection("userTbl")
  const data = userTbl.find({})
    
  const result = await data.toArray()
  if (req.method === "GET"){
    res.json(result)
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