const mongoose = require('mongoose');
const { Schema }= mongoose;

const infoSchema = new Schema({
    firstname: String,
    lastname: String,
    patronymic: String,
    avatarURL: String,
    email: String,
    phone: String,
    vk: String,
    github: String,
    content: String,
    userId: {
        ref: 'users',
        type: Schema.Types.ObjectId,
    }
});

module.exports = mongoose.model('infos', infoSchema);