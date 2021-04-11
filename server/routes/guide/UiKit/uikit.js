const router = require('express').Router()
const requireLogin = require('../../../middleware/auth')
const mongoose = require('mongoose')
const Ui = mongoose.model("Ui")
const multer = require('multer')

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uikitupload')
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + "-" + file.originalname)
    }
})
   
var upload = multer({ storage: storage })


router.get('/uikit', async (req,res)=>{
    try {
        const uikit = await Ui.find()
        if(uikit){
            res.status(200).json({uikit})
        }else{
            return res.status(400).json({err: "Error"})
        }
    } catch (err) {
        return res.status(500).json({err: err.message})
    }
})

router.post('/uikit/coverphoto', upload.single('coverphoto'), async (req,res)=>{
    try {
        res.send(req.file)
    } catch (err) {
        return res.status(500).json({err: err.message})
    }
})

router.post('/uikit/mockup', upload.single('mockup'), async (req,res)=>{
    try {
        res.send(req.file)
    } catch (err) {
        return res.status(500).json({err: err.message})
    }
})

router.post('/uikit/kit_zip', upload.single('kit_zip'), async (req,res)=>{
    try {
        res.send(req.file)
    } catch (err) {
        return res.status(500).json({err: err.message})
    }
})

// {
//     "optional_link": "https://afteracademy.com/blog/file-upload-with-multer-in-nodejs-and-express#:~:text=Multer%20is%20a%20node.,handle%20multipart%2Fform%2Ddata.",
//     "_id": "6071afef6cbe6d4f98b58cee",
//     "title": "jlkjlkjk",
//     "cover_photo": "server\\uikitupload\\coverphoto-Nonvegsupreme.jpg",
//     "mockup": "server\\uikitupload\\mockup-Cheeseandcorn.jpg",
//     "kit_zip": "server\\uikitupload\\kit_zip-eco.rar",
//     "description": "sdasd",
//     "createdAt": "2021-04-10T14:02:23.998Z",
//     "updatedAt": "2021-04-10T14:02:23.998Z",
//     "__v": 0
// }

router.post('/uikit', async (req,res)=>{
    try {
        const {title, cover_photo, mockup, kit_zip, description, optional_link} = req.body
        if(!title || !cover_photo || !mockup || !kit_zip || !description || !optional_link){
            return res.status(401).json({err: "Please Enter all the fields"})
        }

        const uikit = await Ui.findOne({title})
        if(uikit){
            return res.status(400).json({err: "Title already exists"})
        }

        if(!cover_photo){
            return res.status(400).json({err: "No Photos Selected"})
        }

        const newUikit = new Ui({
            title,
            cover_photo,
            mockup,
            kit_zip,
            description,
            optional_link,
            postedBy: req.user
        })

        await newUikit.save()

        res.status(201).json({msg: "Posted Successfully"})

    } catch (err) {
        return res.status(500).json({err: err.message})
    }
})

router.delete('/uikit/:id', async (req,res)=>{
    try {
        const uikit = await Ui.findByIdAndDelete(req.params.id)
        res.status(200).json({msg: "Deleted Successfully"})
    } catch (err) {
        return res.status(500).json({err: err.message})
    }
})

module.exports = router