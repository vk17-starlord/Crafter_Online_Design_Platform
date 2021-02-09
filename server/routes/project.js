const router = require('express').Router()
const multer = require('multer')
const path = require('path')

var Storage = multer.diskStorage({
    destination: function(req,file,callback){
        callback(null, './routes/Images')
    },
    filename: function(req,file,callback){
        callback(null, file.fieldname + "_" + Date.now() + "_" + file.originalname)
    }   
}) 

var upload = multer({
    storage: Storage
}).array("imgUploader", 3)

router.get('/get_projects/:name', async (req,res,next)=>{
    try {
        var options = {
            root: path.join(__dirname, 'Images'),
            dotfiles: 'deny',
            headers: {
                'x-timestamp': Date.now(),
                'x-sent': true
            }
        }

        var fileName = req.params.name
        res.sendFile(fileName, options, (err)=>{
            if(err){
                next(err)
            }else{
                console.log('Sent:', fileName)
            }
        })
        
    } catch (err) {
        return res.status(500).json({err: err.message})
    }
})

router.post('/post_projects', async (req,res)=>{
    try {
        upload(req,res,function(err){
            if(err) throw err
            return res.status(201).json({msg: "Posted Successfully"})
        })
    } catch (err) {
        return res.status(500).json({err: err.message})
    }
})





module.exports = router