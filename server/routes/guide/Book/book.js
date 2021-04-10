const router = require('express').Router()
const requireLogin = require('../../../middleware/auth')
const mongoose = require('mongoose')
const Book = mongoose.model("Book")
const multer = require('multer')

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'bookupload')
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + "-" + file.originalname)
    }
})
   
var upload = multer({ storage: storage })

router.get('/book', async (req,res)=>{
    try {
        const book = await Book.find()
        if(book){
            res.status(200).json({book})
        }else{
            return res.status(400).json({err: "Error"})
        }
    } catch (err) {
        return res.status(500).json({err: err.message})
    }
})

router.post('/book/coverphoto', upload.single('coverphoto'), async(req,res)=>{
    try {
        res.send(req.file)
    } catch (err) {
        return res.status(500).json({err: err.message})
    }
})

router.post('/book/pdf_link', upload.single('pdf_link'), async(req,res)=>{
    try {
        res.send(req.file)
    } catch (err) {
        return res.status(500).json({err: err.message})
    }
})

// {
//     "book": [
//         {
//             "_id": "6071abd8766a483f345997e5",
//             "title": "jlkjlkjk",
//             "description": "sdasd",
//             "coverphoto": "server\\upload\\coverphoto-1618061281029",
//             "pdf_link": "server\\upload\\pdf_link-1618061310390",
//             "link": "https://github.com/vk17-starlord/Crafter_Online_Design_Platform/tree/resources/server/routes",
//             "createdAt": "2021-04-10T13:44:56.767Z",
//             "updatedAt": "2021-04-10T13:44:56.767Z",
//             "__v": 0
//         }
//     ]
// }

router.post('/book', async (req,res)=>{
    try {
        const {title, description, coverphoto, pdf_link, link} = req.body
        if(!title || !link || !coverphoto || !pdf_link || !description){
            return res.status(401).json({err: "Please Enter all the fields"})
        }

        const book = await Book.findOne({title})
        if(book){
            return res.status(400).json({err: "Title already exists"})
        }

        const newBook = new Book({
            title,
            description,
            coverphoto,
            pdf_link,
            link
        })

        await newBook.save()

        res.status(201).json({msg: "Posted Successfully"})

    } catch (err) {
        return res.status(500).json({err: err.message})
    }
})

router.delete('/book/:id', async (req,res)=>{
    try {
        const book = await Book.findByIdAndDelete(req.params.id)
        res.status(200).json({msg: "Deleted Successfully"})
    } catch (err) {
        return res.status(500).json({err: err.message})
    }
})

module.exports = router