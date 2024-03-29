const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    title: { type: String, required: true },
    text: { type: String, required: true },
    image: { type: String, required: true }
});

module.exports = mongoose.model('Product', productSchema);
