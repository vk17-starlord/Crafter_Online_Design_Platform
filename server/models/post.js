const mongoose = require('mongoose');
const {ObjectId} = mongoose.Schema.Types

const postSchema = new mongoose.Schema({

    //b stands for blog. b_coverphoto b_title b_desc are to be displayed on 1st page i.e. on coverphoto.

    b_coverPhoto: {
        type: String,
        default: "No Photo"
    },
    b_title: {
        type: String,
        required: true
    },
    b_desc: {
        type: String,
        required: true 
    },
    b_body: {
        type: String,
        required: true
    }, 
    b_photo: [
        {
            type: String,
            default: "No Photo"
        }
    ],
    b_likes: [
        {
            postedBy:{
                type: ObjectId,
                ref: "User"
            }
        }
    ],
    b_comments: [
        {
            text: String,
            postedBy: {
                type: ObjectId,
                ref: 'User'
            }
        }
    ],
    postedBy: {
        type: ObjectId,
        ref: 'User'
    }
});

mongoose.model('Post', postSchema);