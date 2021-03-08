const mongoose = require('mongoose');
const { Schema }= mongoose;

const schema = new Schema({
    name: String,
    difficulty: Number,
    description: String,
    type: String,
    authorId: {
        type: Schema.Types.ObjectId,
        ref: 'author',
    },
    yearRewardId: {
        type: Schema.Types.ObjectId,
        ref: 'year_reward',
    }
});

module.exports = mongoose.model('recipe', schema);