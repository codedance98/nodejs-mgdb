const mongoose = require('mongoose');
const schema = new mongoose.Schema({
    name: String,
    age: Number,
    sex: String,
    email: String,
    instructions: String,
});
module.exports = mongoose.model('Article', schema);