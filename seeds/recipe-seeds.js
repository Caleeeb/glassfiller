const { Recipe } = require("../models");

const recipeData = [
	{
		title: "Mai Tai",
		description: "Mai Tai description, is good, me drunk",
		user_id: 1,
	},
];

const seedRecipes = () => Recipe.bulkCreate(recipeData);

module.exports = seedRecipes;
