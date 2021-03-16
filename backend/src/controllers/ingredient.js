const errorHandler = require('../utils/errorHandler');
const Ingredient = require('../models/Ingredient');

module.exports.get = async (req, res) => {
    try {
        const ingredients = await Ingredient.find();
        res.status(200).json(ingredients);
    } catch (e) {
        errorHandler(res, e);
    }
};

module.exports.create = async (req, res) => {
    try {
        const ingredient = new Ingredient({
            $set: req.body,
        });
        await ingredient.save();
        res.status(200).json(ingredient);
    } catch (e) {
        errorHandler(res, e);
    }
};

module.exports.update = async (req, res) => {
    try {
        const ingredient = await Ingredient.findOneAndUpdate(
            { _id: req.body.id},
            { $set: req.body},
            { new: true }
        );
        res.status(200).json(ingredient);
    } catch (e) {
        errorHandler(res, e);
    }
};

module.exports.delete = async (req, res) => {
    try {
        const ingredient = await Ingredient.findOneAndDelete({
            _id: req.body.id
        });
        res.status(200).json(ingredient);
    } catch (e) {
        errorHandler(res, e);
    }
};