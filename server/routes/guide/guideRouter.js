const router = require('express').Router()
const requireLogin = require('../../middleware/auth')
const mongoose = require('mongoose')
const Guide = mongoose.model("Guide")
const multer = require('multer')

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'guideupload')
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + file.originalname)
    }
})
   
var upload = multer({ storage: storage })

router.get('/guide', async (req,res)=>{
    try {
        const guide = await Guide.find()
        if(guide){
            res.status(200).json({guide})
        }else{
            return res.status(400).json({err: "Error"})
        }
    } catch (err) {
        return res.status(500).json({err: err.message})
    }
})

router.post('/guide/coverphoto', upload.single('coverphoto'), async (req,res)=>{
    try {
        res.send(req.file)
    } catch (err) {
        return res.status(500).json({err: err.message})
    }
})

// {
//     "_id": "6071b16072dc4c4e04376e8d",
//     "title": "jlkjlkjk",
//     "cover_photo": "server\\guideupload\\coverphoto-Nonvegsupreme.jpg",
//     "link": "https://afteracademy.com/blog/file-upload-with-multer-in-nodejs-and-express#:~:text=Multer%20is%20a%20node.,handle%20multipart%2Fform%2Ddata.",
//     "category": "adsasd",
//     "description": "sdasd",
//     "createdAt": "2021-04-10T14:08:32.225Z",
//     "updatedAt": "2021-04-10T14:08:32.225Z",
//     "__v": 0
// }

router.post('/guide', async (req,res)=>{
    try {
        const {title, cover_photo, link, category, description} = req.body
        if(!title || !cover_photo || !link || !category || !description){
            return res.status(401).json({err: "Please Enter all the fields"})
        }

        const guide = await Guide.findOne({title})
        if(guide){
            return res.status(400).json({err: "Title already exists"})
        }

        if(!cover_photo){
            return res.status(400).json({err: "No Photos Selected"})
        }

        const newGuide = new Guide({
            title,
            cover_photo,
            link,
            category,
            description,
        })

        await newGuide.save()

        res.status(201).json({msg: "Posted Successfully"})

    } catch (err) {
        return res.status(500).json({err: err.message})
    }
})

router.delete('/guide/:id', async (req,res)=>{
    try {
        const guide = await Guide.findByIdAndDelete(req.params.id)
        res.status(200).json({msg: "Deleted Successfully"})
    } catch (err) {
        return res.status(500).json({err: err.message})
    }
})

module.exports = router