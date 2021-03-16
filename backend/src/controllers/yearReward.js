const errorHandler = require('../utils/errorHandler');
const YearReward = require('../models/YearReward');

module.exports.get = async (req, res) => {
    try {
        const yearRewards = await YearReward.find();
        res.status(200).json(yearRewards);
    } catch (e) {
        errorHandler(res, e);
    }
};

module.exports.create = async (req, res) => {
    try {
        const yearReward = new YearReward({
            $set: req.body,
        });
        await yearReward.save();
        res.status(200).json(yearReward);
    } catch (e) {
        errorHandler(res, e);
    }
};

module.exports.update = async (req, res) => {
    try {
        const yearReward = await YearReward.findOneAndUpdate(
            { _id: req.body.id},
            { $set: req.body},
            { new: true }
        );
        res.status(200).json(yearReward);
    } catch (e) {
        errorHandler(res, e);
    }
};

module.exports.delete = async (req, res) => {
    try {
        const yearReward = await YearReward.findOneAndDelete({
            _id: req.body.id
        });
        res.status(200).json(yearReward);
    } catch (e) {
        errorHandler(res, e);
    }
};