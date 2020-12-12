const router = require('express').Router();
const mongoose = require('mongoose');
const Profile = mongoose.model('Profile');
const User = mongoose.model('User');
const requireLogin = require('../middleware/auth');

router.get('/getProfileInfo', requireLogin, async (req,res)=>{
    try {
        const userProfile = await Profile.find().populate('postedBy','userName profilePic');
        res.json(userProfile);
    } catch (err) {
        return res.status(500).json({err: err.message});
    }
})



router.post('/postProfileInfo', requireLogin, async (req,res)=>{
    try {
        const {bio,desc} = req.body;
        
        const newUserProfile = new Profile({
            bio,
            desc,
            postedBy: req.user
        })

        await newUserProfile.save();

        res.json({message: "Profile Info Updated Successfully"});
    } catch (err) {
        return res.status(500).json({err: err.message});
    }
})

router.get('/getUserProfile', requireLogin, async (req,res)=>{
        const userProfile = await Profile.find({postedBy: req.user._id}).populate('postedBy','_id')
    try {
        res.json(userProfile);
    } catch (err) {
        return res.status(500).json({err: err.message});
    }
})

module.exports = router