const router = require('express').Router();
const mongoose = require('mongoose');
const User = mongoose.model('User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const {JWT_SECRET} = require('../keys');
const requireLogin = require('../middleware/requireLogin');

router.get('/users',requireLogin, (req,res)=>{
    User.find().then((users)=>{
        res.json({users});
    })
})

router.post('/signup', (req,res)=>{
    const {firstName, lastName, userName, email, password, whoAmI} = req.body;
    if(!firstName || !lastName || !userName || !email || !password || !whoAmI){
        return res.status(422).json({error: "Please Enter All the fields"});
    }
    User.findOne({userName}).then((savedUser)=>{
        if(savedUser){
            return res.status(401).json({error: "Username already exists"});
        }
    })

    User.findOne({email}).then((savedUser)=>{
        if(savedUser){
            return res.status(401).json({error: "Email already exists"});
        }

        bcrypt.hash(password, 12).then(hashedPassword=>{
            const user = new User({
                firstName,
                lastName,
                userName,
                email,
                password: hashedPassword,
                whoAmI
            });
    
            user.save().then((user)=>{
                res.json({message: "Successfully SignedUp"});
            })
        });
    })
});

router.post('/signin', (req,res)=>{
    const {userName, email, password} = req.body;
    if(!userName || !email || !password){
        return res.status(422).json({error: "Please Enter All the fields"});
    }

    User.findOne({userName}).then(savedUser=>{
        if(!savedUser){
            return res.status(401).json({error: "User doesn\'t exists"});
        }
    });

    User.findOne({email}).then((savedUser)=>{
        if(!savedUser){
            return res.status(401).json({error: "Email doesn\'t exists"});
        }

        bcrypt.compare(password, savedUser.password).then((doMatchPassword)=>{
            if(doMatchPassword){
                //res.json({message: "User Signed in Successfully"});
                const token = jwt.sign({_id: savedUser._id}, JWT_SECRET);
                res.json({token})
            }else{
                return res.status(401).json({error: "Invalid EMail or Password"});
            }
        })
    })
})

module.exports = router;