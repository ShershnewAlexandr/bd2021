const mongoose = require('mongoose');
const { Schema }= mongoose;

const schema = new Schema({
    firstname: String,
    lastname: String,
    patronymic: String,
    age: Number,
    sex: Boolean,
});

module.exports = mongoose.model('author', schema);