const mongoose = require('mongoose');

const ProfileSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    zipcode: {
        type: String,
        required: true
    },
    item1: {
        type: String,
        required: true
    },
    item2: {
        type: String,
        required: true
    },
    bio: {
        type: String
    }
})

module.exports = mongoose.model('profile', ProfileSchema);