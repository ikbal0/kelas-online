export default async function handler(req, res) {
     const session = await getSession({req})
     const { semesterId } = req.query
    
    if(!session){
          res.write({data: 'no access'})
    } else {
          const client = await clientPromise
          const testDb = await client.db("test-Db")
          const tblSemester = await testDb.collection("tblSemester")

          if (req.method === 'GET'){
               const result = await tblSemester.findOne({name:nameOfListing})
               res.status(200).json(comment)
          }
     }

}