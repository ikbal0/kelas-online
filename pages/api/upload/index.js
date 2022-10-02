import nextConnect from 'next-connect';
import multer from 'multer';

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

apiRoute.post((req, res) => {
    res.status(200).json({ data: 'success', body: req.body });
    console.log({data: 'success', body: req.body})
});

// apiRoute.get((req, res) => {
//   res.status(200).json({ data: 'get'});
// });

export default apiRoute;

export const config = {
    api: {
        bodyParser: false, // Disallow body parsing, consume as stream
    },
};