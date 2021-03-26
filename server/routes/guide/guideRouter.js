const router = require('express').Router()
const requireLogin = require('../../middleware/auth')
const mongoose = require('mongoose')
const Guide = mongoose.model("Guide")
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

router.get('/guide', requireLogin, async (req,res)=>{
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

router.post('/guide', requireLogin, async (req,res)=>{
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
            postedBy: req.user
        })

        await newUser.save()

        res.status(201).json({msg: "Posted Successfully"})

    } catch (err) {
        return res.status(500).json({err: err.message})
    }
})

router.delete('/guide/:id', requireLogin, async (req,res)=>{
    try {
        const guide = await Guide.findByIdAndDelete(req.params.id)
        res.status(200).json({msg: "Deleted Successfully"})
    } catch (err) {
        return res.status(500).json({err: err.message})
    }
})

router.post('/guide_photo_upload', upload.single('file'), (req, res) => {
    if (!req.file) {
      console.log("No file received");
      return res.send({
        success: false
      });
  
    } else {
      console.log('file received');
      return res.send({
        success: true
      })
    }
});

module.exports = router