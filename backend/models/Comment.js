const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    text: { type: String, required: true },
    time: { type: String, required: true },
    name: { type: String, required: true },
    rating: { type: String, required: true},
    productId:  { type: String, required: true}
});

module.exports = mongoose.model('Comment', commentSchema);
