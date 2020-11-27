const router = require('express').Router();
const requireLogin = require('../middleware/requireLogin');
const mongoose = require('mongoose');
const Post = mongoose.model("Post");

router.get('/allpost', requireLogin, (req,res)=>{
    Post.find().populate("postedBy", "_id userName").then(posts=>{
        res.json({posts});
    })
})

router.get('/mypost', requireLogin, (req,res)=>{
    Post.find({postedBy: req.user._id}).populate("postedBy", "_id name").then((myposts)=>{
        res.json({myposts});
    })
})

router.post('/createPost', requireLogin, (req,res)=>{
    const {b_coverPhoto, b_title, b_desc, b_body, b_photo} = req.body;
    if(!b_coverPhoto || !b_title || !b_desc || !b_body || !b_photo){
        return res.status(422).json({error: "Please enter all the fields"});
    }

    const post = new Post({
        b_coverPhoto,
        b_title,
        b_desc,
        b_body,
        b_photo,
        postedBy: req.user
    });

    post.save().then((posts)=>{
        res.json({posts});
    })
})

router.put("/like",requireLogin, (req,res)=>{
    const like = {
        postedBy: req.user
    }
    Post.findByIdAndUpdate(req.body.postId, {
        $push: {b_likes: like}
    },{
        new: true
    }).populate("b_likes.postedBy","_id userName").exec((err,result)=>{
        if(err){
            return res.status(401).json({error: err});
        }
        res.json(result)
    })
})

router.put("/unlike",requireLogin, (req,res)=>{
    const like = {
        postedBy: req.user
    }
    Post.findByIdAndUpdate(req.body.postId, {
        $pull: {b_likes: like}
    },{
        new: true
    }).populate("b_likes.postedBy","_id userName").exec((err,result)=>{
        if(err){
            return res.status(401).json({error: err});
        }
        res.json(result)
    })
})

router.put("/comment",requireLogin, (req,res)=>{
    const comment = {
        text: req.body.text,
        postedBy: req.user
    }
    Post.findByIdAndUpdate(req.body.postId, {
        $push: {b_comments: comment}
    },{
        new: true
    }).populate("b_comments.postedBy","_id userName").exec((err,result)=>{
        if(err){
            return res.status(401).json({error: err});
        }
        res.json(result)
    })
})

router.put("/uncomment",requireLogin, (req,res)=>{
    const comment = {
        text: req.body.text,
        postedBy: req.user
    }
    Post.findByIdAndUpdate(req.body.postId, {
        $pull: {b_comments: comment}
    },{
        new: true
    }).populate("b_comments.postedBy","_id userName").exec((err,result)=>{
        if(err){
            return res.status(401).json({error: err});
        }
        res.json(result)
    })
})

router.delete("/deletepost/:postId", requireLogin, (req,res)=>{
    Post.findOne({_id: req.params.postId}).populate("postedBy","_id").exec((err,post)=>{
        if(err || !post){
            return res.status(422).json({error: err});
        }
        if(post.postedBy._id.toString() === req.user._id.toString()){
            post.remove().then(()=>{
                res.json({message: "Post Deleted Successfully"});
            })
        }
    })
})

module.exports = router;