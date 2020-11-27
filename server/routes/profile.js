const router = require('express').Router();
const requireLogin = require('../middleware/requireLogin');
const mongoose = require('mongoose');
const Post = mongoose.model("Post");
const User = mongoose.model("User");

router.get('/user/:id',requireLogin, (req,res)=>{
    User.findOne({_id: req.params.id}).select('-password').then((user)=>{
        Post.find({postedBy: req.params.id}).populate("postedBy","_id userName").exec((err,posts)=>{
            if(err){
                return res.status(422).json({error: err});
            }
            res.json({user,posts});
        })
    })
})

module.exports = router;