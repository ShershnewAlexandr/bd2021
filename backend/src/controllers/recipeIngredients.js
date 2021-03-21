const errorHandler = require('../utils/errorHandler');
const RecipeIngredients = require('../models/RecipeIngredients');

module.exports.get = async (req, res) => {
    try {
        const recipeIngredients = await RecipeIngredients.find({
            recipeId: req.body.id,
        });
        res.status(200).json(recipeIngredients);
    } catch (e) {
        errorHandler(res, e);
    }
};

module.exports.create = async (req, res) => {
    try {
        const recipe = new RecipeIngredients({
            $set: req.body,
        });
        await recipe.save();
        res.status(200).json(recipe);
    } catch (e) {
        errorHandler(res, e);
    }
};

module.exports.update = async (req, res) => {
    try {
        const recipe = await RecipeIngredients.findOneAndUpdate(
            { _id: req.body.id},
            { $set: req.body},
            { new: true }
        );
        res.status(200).json(recipe);
    } catch (e) {
        errorHandler(res, e);
    }
};

module.exports.delete = async (req, res) => {
    try {
        const recipe = await RecipeIngredients.findOneAndDelete({
            _id: req.body.id
        });
        res.status(200).json(recipe);
    } catch (e) {
        errorHandler(res, e);
    }
};