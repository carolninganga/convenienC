const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ItemSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
});

const Item = mongoose.model('items', ItemSchema);

module.exports = Item;
