const mongoose = require('mongoose');
const { Schema }= mongoose;

const schema = new Schema({
    firstname: String,
    lastname: String,
    patronymic: String,
    age: Number,
    sex: Boolean,
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'users',
        required: true,
        unique: true,
    }
});

module.exports = mongoose.model('author', schema);