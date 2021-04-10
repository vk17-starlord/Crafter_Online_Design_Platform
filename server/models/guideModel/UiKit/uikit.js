const mongoose = require('mongoose')

const uiSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    cover_photo: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    mockup: {
        type: String,
        required: true
    },
    kit_zip: {
        type: String,
        required: true
    },
    optional_link: {
        type: String,
        default: "null"
    }
}, {
    timestamps: true
})

mongoose.model("Ui", uiSchema) 