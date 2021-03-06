const mongoose = require('mongoose');
const { Schema }= mongoose;

const schema = new Schema({
    name: String,
    expiresAt: String,
    average_cost: Number,
    type: Number,
    withGluten: Boolean,
});

module.exports = mongoose.model('ingredient', schema);