const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
    bio: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    postedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
})

mongoose.model('Profile', profileSchema);