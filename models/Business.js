const mongoose = require('mongoose');
const BusinessSchema = mongoose.Schema({
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
    item3: {
        type: String,
        required: String
    },
    bio: {
      type: String,
      required: String
  }
})
module.exports = mongoose.model('business', BusinessSchema);




















// const mongoose = require('mongoose');

// const BusinessSchema = mongoose.Schema({
//   user: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'user',
//   },
//   name: {
//     type: String,
//     required: true,
//   },
//   email: {
//     type: String,
//     required: true,
//   },
//   phone: {
//     type: String,
//   },
//   zipcode: {
//     type: String,
//   },
//   items: [
//     {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: 'items',
//     },
//   ],
//   date: {
//     type: Date,
//     default: Date.now,
//   },
// });

// module.exports = mongoose.model('business', BusinessSchema);
