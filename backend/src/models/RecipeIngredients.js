const mongoose = require('mongoose');
const { Schema }= mongoose;

const schema = new Schema({
    recipeId: {
        type: Schema.Types.ObjectId,
        ref: 'recipe',
    },
    ingredientId: {
        type: Schema.Types.ObjectId,
        ref: 'ingredient',
    },
    unitId: {
        type: Schema.Types.ObjectId,
        ref: 'unit',
    },
    amount: Number,
});

module.exports = mongoose.model('recipe_ingredients', schema);