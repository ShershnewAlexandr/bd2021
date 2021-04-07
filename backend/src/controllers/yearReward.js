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
        const yearReward = new YearReward(req.body);
        await yearReward.save();
        res.status(200).json(yearReward);
    } catch (e) {
        errorHandler(res, e);
    }
};

module.exports.update = async (req, res) => {
    try {
        const yearReward = await YearReward.findByIdAndUpdate(
          req.body._id,
          {
              date: req.body.date,
              grandSum: req.body.grandSum,
              voterCount: req.body.voterCount,
              country: req.body.country,
              description: req.body.description,
          }
        );
        res.status(200).json(yearReward);
    } catch (e) {
        errorHandler(res, e);
    }
};

module.exports.delete = async (req, res) => {
    try {
        const yearReward = await YearReward.findByIdAndDelete(req.body._id);
        res.status(200).json(yearReward);
    } catch (e) {
        errorHandler(res, e);
    }
};