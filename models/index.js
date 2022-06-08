const User = require("./User");
const Recipe = require("./Recipe");
const Ingredient = require("./Ingredient")

// create associations
User.hasMany(Recipe, {
	foreignKey: "user_id",
});

Recipe.belongsTo(User, {
	foreignKey: "user_id",
});

Recipe.hasMany(Ingredient, {
	foreignKey: "Recipe_id",
});

Ingredient.belongsTo(Recipe, {
	foreignKey: "user_id",
});

module.exports = { User, Recipe, Ingredient };
