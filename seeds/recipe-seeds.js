const { Recipe } = require("../models");

const recipeData = [
	{
		title: "Mai Tai",
		description:
			"The Mai Tai is a cocktail made of rum, dry Curacao liqueur, orgeat syrup, and lime juice. It is one of the characteristic cocktails in tiki culture.",
		user_id: 1,
	},
	{
		title: "Basil Smash",
		description:
			"A simple gin cocktail with muddled basil to give this drink a refreshing sip and scent",
		user_id: 2,
	},
	{
		title: "Brown Derby",
		description:
			"An easy three ingredient drink that is served at the Kentucky Derby.",
		user_id: 3,
	},
];

const seedRecipes = () => Recipe.bulkCreate(recipeData);

module.exports = seedRecipes;
