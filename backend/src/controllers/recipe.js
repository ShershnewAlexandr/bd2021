const errorHandler = require('../utils/errorHandler');
const Recipe = require('../models/Recipe');
const Author = require('../models/Author')
const RecipeIngredients = require('../models/RecipeIngredients');

module.exports.get = async (req, res) => {
    try {
        const author = await Author.findOne({
            userId: req.user.id,
        });
        const recipes = await Recipe.find({
            authorId: author._id,
        })
        const withFood = [];
        for (let i = 0; i < recipes.length; i++) {
            console.log('77777777777777777', withFood);
            const currentFood = await RecipeIngredients.find({
                recipeId: recipes[i]._id
            }).populate('ingredientId');
            const populated = {
                ...recipes[i]._doc,
                food: currentFood.map(v => (v.ingredientId))
            }
            withFood.push(populated)
        }
        res.status(200).json(withFood);
    } catch (e) {
        errorHandler(res, e);
    }
};

module.exports.create = async (req, res) => {
    try {
        const author = await Author.findOne({
            userId: req.user.id,
        });
        const recipe = new Recipe(
          {
              ...req.body,
              authorId: author._id,
          }
        );
        const savedRecipe = await recipe.save();
        const food = req.body.food;
        for (let i = 0; i < food.length; i++) {
            await (new RecipeIngredients({
                recipeId: savedRecipe._id,
                ingredientId: food[i]._id
            })).save();
        }
        res.status(200).json(recipe);
    } catch (e) {
        errorHandler(res, e);
    }
};

module.exports.update = async (req, res) => {
    try {
        await Recipe.findOneAndUpdate(
            { _id: req.body.id},
            { $set: req.body},
            { new: true }
        );
        const recipe = await Recipe.findById(req.body._id);
        console.log('3333', recipe);
        await RecipeIngredients.deleteMany({
            recipeId: recipe._doc._id,
        });
        const food = req.body.food;
        for (let i = 0; i < food.length; i++) {
            await (new RecipeIngredients({
                recipeId: recipe._id,
                ingredientId: food[i]._id
            })).save();
        }
        res.status(200).json(recipe);
    } catch (e) {
        errorHandler(res, e);
    }
};

module.exports.delete = async (req, res) => {
    try {
        const recipe = await Recipe.findOneAndDelete({
            _id: req.body._id
        });
        res.status(200).json(recipe);
    } catch (e) {
        errorHandler(res, e);
    }
};