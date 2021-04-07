const router = require('express').Router()
const requireLogin = require('../../../middleware/auth')
const mongoose = require('mongoose')
const Book = mongoose.model("Book")
const multer = require('multer')

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads')
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now())
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

router.post('/book', upload.single('file'), async (req,res)=>{
    try {
        const {title, cover_photo, link, pdf_link, description} = req.body
        if(!title || !cover_photo || !link || !pdf_link || !description){
            return res.status(401).json({err: "Please Enter all the fields"})
        }

        const book = await Book.findOne({title})
        if(book){
            return res.status(400).json({err: "Title already exists"})
        }

        if(!cover_photo){
            return res.status(400).json({err: "No Photos Selected"})
        }

        const newBook = new Book({
            title,
            cover_photo,
            link,
            pdf_link,
            description,
            postedBy: req.user
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