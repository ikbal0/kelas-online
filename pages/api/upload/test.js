export default async function ApiMahasiswa(req, res){
    if (req.method === "GET"){      
        res.json({result: 'a'})
    } 
    
    if (req.method === "DELETE") {
        console.log(req.body)
        res.json({msg: 'deleted'})
    }
}