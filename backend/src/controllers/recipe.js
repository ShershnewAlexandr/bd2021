const errorHandler = require('../utils/errorHandler');
const Recipe = require('../models/Recipe');
const Author = require('../models/Author')

module.exports.get = async (req, res) => {
    try {
        const author = await Author.findOne({
            userId: req.user.id,
        });
        const recipes = await Recipe.find({
            authorId: author._id,
        })
        res.status(200).json(recipes);
    } catch (e) {
        errorHandler(res, e);
    }
};

module.exports.create = async (req, res) => {
    try {
        const recipe = new Recipe({
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
        const recipe = await Recipe.findOneAndUpdate(
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
        const recipe = await Recipe.findOneAndDelete({
            _id: req.body.id
        });
        res.status(200).json(recipe);
    } catch (e) {
        errorHandler(res, e);
    }
};