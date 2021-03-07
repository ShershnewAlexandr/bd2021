const mongoose = require('mongoose');
const { Schema }= mongoose;

const schema = new Schema({
    name: String,
});

module.exports = mongoose.model('unit', schema);