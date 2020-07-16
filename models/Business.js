const mongoose = require('mongoose');

const BusinessSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String
    },
    type: {
        type: String,
        default: 'toilet-paper'
    },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('business', BusinessSchema);