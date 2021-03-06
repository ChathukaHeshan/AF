const Document = require('../models/documents.model');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/')
    },
    filename: (req, file, cb) => {
        cb(null, `${file.originalname}`)
    },
    fileFilter: (req, file, cb) => {
        const ext = path.extname(file.originalname)
        if (ext !== '.pdf' || ext !== '.doc' || ext !== '.docx' || ext !== '.pptx') {
            return cb(response.status(400).end('only document file formats are allowed'), false);
        }
        cb(null, true)
    }
})

const upload = multer({ storage: storage }).single("file")

const addDocument = async (request, response) => {
    const document = new Document(request.body);

    await document.save().
    then((data) => {
        response.status(200).send({
            Document: data,
            success: true,
        }).
        catch((err) => {
            response.status(500).send({error: err.message});
        });
    })
}

const getDocuments = async (request, response) => {
    try {
        const documents = await Document.find();
        response.status(200).json({ documents: documents });
    } catch (error) {
        response.status(404).json({ error: error.message });
    }
};

const approveDocument = async (request, response) => {
    if(request.body.approve){
        Document.findByIdAndUpdate(request.body.id, {
            isApproved: true
        }, (error, data) => {
            if (error) {
                console.log(error)
                return response.json({ success: false, error })
            } else {
                response.json({success: true})
                console.log('Document updated successfully !')
            }
        })
    }else{
        Document.findByIdAndDelete(request.body.id, function (err, docs) {
            if (err){
                return response.json({ success:false,error: err})
            }
            else{
                return response.json({ success:true})
            }
        });
    }
}

const uploadFile = async(request, response) => {
    upload(request, response, err => {
        if (err) {
            return response.json({success: false, err})
        }
        return response.json({success: true, fileName: response.req.file.filename})
    })
}

module.exports = {
    addDocument,
    getDocuments,
    uploadFile,
    approveDocument
};