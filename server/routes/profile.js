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

        Profile.find({postedBy:req.user._id},async(err, profile)=>{
            if(profile.length>0){
               return res.json({msg:"You Have Already Posted a Profile"})
            }else{
            try {
                const {bio, desc, p_coverPhoto, p_contact, p_links} = req.body;
                console.log( {bio, desc, p_coverPhoto, p_contact, p_links} )
  
                const newUserProfile = new Profile({
                    bio,
                    desc,
                    p_coverPhoto,
                    p_contact,
                    p_links,
                    postedBy: req.user
                })
                await newUserProfile.save();
                res.json({msg: "Profile Info Updated Successfully"});
            } catch (error) {
                res.json({msg:error})
            }
            }
        })

})
router.put('/updateProfile/:id', requireLogin, async (req,res)=>{
    try {
        const {bio, desc, p_coverPhoto, p_contact, p_links} = req.body

 
        console.log( {bio, desc, p_coverPhoto, p_contact, p_links} )
        await Profile.findOneAndUpdate({postedBy: req.params.id}, {
            bio, desc, p_coverPhoto, p_contact, p_links, postedBy: req.user
        }, (err, prof)=>{
            if(err) throw err;

            if(prof.postedBy._id.toString() === req.user._id.toString()){
                const update_prof = prof.update()
                if(update_prof){
                    res.json({msg: "Profile Updated Successfully"})
                }
            }
        });
        


    } catch (err) {
        return res.status(500).json({err: err.message})
    }
})

router.delete('/del_prof/:id', requireLogin, async (req,res)=>{
    try {
        await Profile.findByIdAndDelete(req.params.id);
        res.json({msg: "Profile Deleted Successfully"})
    } catch (err) {
        return res.status(500).json({err: err.message})
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