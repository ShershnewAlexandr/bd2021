const errorHandler = require('../utils/errorHandler');
const Ingredient = require('../models/Ingredient');

module.exports.get = async (req, res) => {
    try {
        const ingredients = await Ingredient.find({});
        console.log('000')
        res.status(200).json(ingredients);
    } catch (e) {
        errorHandler(res, e);
    }
};

module.exports.create = async (req, res) => {
    try {
        const ingredient = new Ingredient(req.body);
        await ingredient.save();
        res.status(200).json(ingredient);
    } catch (e) {
        errorHandler(res, e);
    }
};

module.exports.update = async (req, res) => {
    try {
        const ingredient = await Ingredient.findByIdAndUpdate(
            req.body._id,
            {
                name: req.body.name,
                expiresAt: req.body.expiresAt,
                average_cost: req.body.average_cost,
                type: req.body.type,
                withGluten: req.body.withGluten,
            }
        );
        res.status(200).json(ingredient);
    } catch (e) {
        errorHandler(res, e);
    }
};

module.exports.delete = async (req, res) => {
    try {
        const ingredient = await Ingredient.findByIdAndDelete(req.body._id);
        res.status(200).json(ingredient);
    } catch (e) {
        errorHandler(res, e);
    }
};