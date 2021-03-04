const errorHandler = require('../utils/errorHandler');
const Info = require('../models/Info');

module.exports.get = async (req, res) => {
    console.log(req.params.userId);
    console.log(req.body.userId);
    try {
        const info = await Info.findOne({
            userId: req.body.userId,
        });
        res.status(200).json(info);
    } catch (e) {
        errorHandler(res, e);
    }
};

module.exports.update = async (req, res) => {
    try {
       const info = await Info.findOneAndUpdate(
            { userId: req.user.id},
            { $set: req.body},
            { new: true }
        );
        res.status(200).json(info);
    } catch (e) {
        errorHandler(res, e);
    }
};