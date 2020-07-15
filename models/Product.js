var mongoose = require('mongoose');


var ProductSchema = new mongoose.Schema({

  name: {
    type: String,
    unique: true
  }
  
});

var Product = mongoose.model('Product', ProductSchema);
module.exports = Product;
