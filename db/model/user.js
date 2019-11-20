const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var userSchema = new Schema({
    name: String,
    age: Number,
    sex: String,
    email: String,
    instructions: String,
});
module.exports = mongoose.model('User', userSchema);