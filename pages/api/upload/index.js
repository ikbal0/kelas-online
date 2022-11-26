import nextConnect from 'next-connect';
import multer from 'multer';
import clientPromise from '../../../lib/mongodb';
import { ObjectId } from 'mongodb';

const upload = multer({
    storage: multer.diskStorage({
        destination: './public/uploads',
        filename: (req, file, cb) => cb(null, file.originalname),
    }),
});

const apiRoute = nextConnect({
    onError(error, req, res) {
        res.status(501).json({ error: `Sorry something Happened! ${error.message}` });
    },
    onNoMatch(req, res) {
        res.status(405).json({ error: `Method '${req.method}' Not Allowed` });
    },
});

apiRoute.use(upload.array('uploaded_file'));

apiRoute.post( async (req, res) => {
    const client = await clientPromise
    const testDb = await client.db("e_learning_db")
    const fileUpload = await testDb.collection("fileUpload")

    const result = await fileUpload.insertOne({
        filename: req.body.file_name,
        n_speakers: req.body.n_speakers
    })

    res.status(200).json({ data: `1 image uploaded`});
    console.log({data: 'success', filename: req.body.file_name, n_speakers: req.body.n_speakers})
});

apiRoute.get( async (req, res) => {
    const client = await clientPromise
    const testDb = await client.db("e_learning_db")
    const fileUpload = await testDb.collection("fileUpload")
    const result = await fileUpload.find({}).sort({_id:-1}).toArray()
    res.json(result);
});

apiRoute.delete( async (req, res) => {
    console.log(req.body.id)
    console.log('check')
    // const client = await clientPromise
    // const testDb = await client.db("e_learning_db")
    // const fileUpload = await testDb.collection("fileUpload")
    // const result = await fileUpload.deleteOne({_id: new ObjectId(req.body.id)})
    // res.json({deletedCount: result.deletedCount});
    // res.json({deletedCount: 1});
});

export default apiRoute;

export const config = {
    api: {
        bodyParser: false, // Disallow body parsing, consume as stream
    },
};