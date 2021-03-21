const errorHandler = require('../utils/errorHandler');
const Author = require('../models/Author');

module.exports.get = async (req, res) => {
    console.log("+++");
    console.log(req.user);
    try {
        const author = await Author.findOne({
            userId: req.user.id,
        });
        res.status(200).json(author);
    } catch (e) {
        errorHandler(res, e);
    }
};

module.exports.update = async (req, res) => {
    try {
        const info = await Author.findOneAndUpdate(
            { userId: req.user.id},
            { $set: req.body},
            { new: true }
        );
        res.status(200).json(info);
    } catch (e) {
        errorHandler(res, e);
    }
};