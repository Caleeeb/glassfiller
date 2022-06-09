const { Recipe } = require("../models");

const recipeData = [
	{
		title: "Mai Tai",
		description: "Mai Tai description, is good, me drunk",
		user_id: 1,
	},
	{
		title: "Snail Mail",
		description: "When you don't need to be anywhere fast",
		user_id: 2,
	},
	{
		title: "Wahoo",
		description: "Bold, Refreshing, Delightful, Wahoo",
		user_id: 3,
	},

];

const seedRecipes = () => Recipe.bulkCreate(recipeData);

module.exports = seedRecipes;
