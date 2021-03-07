const mongoose = require('mongoose');
const { Schema }= mongoose;

const schema = new Schema({
    date: Date,
    grandSum: Number,
    voterCount: Number,
    country: String,
    description: JSON,
});

module.exports = mongoose.model('year_reward', schema);