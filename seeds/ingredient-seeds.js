const { Ingredient } = require("../models");

const ingredientsdata = [
	{
		name: "['Lime Juice', 'Dry Curacao', 'Orgeat', 'Rum', 'Angostura Bitters']",
		quantity: "['3/4', '1/2', '1/2', '2', '1']",
		unit: "['oz', 'oz', 'oz', 'oz', 'dash']",
		garnish: "Mint",
		recipe_id: 1,
	},
	{
		name: "['Leman Juice', 'Simple Syrup', 'Gin', 'Basil']",
		quantity: "['1', '3/4', '2', '4-6']",
		unit: "['oz', 'oz', 'oz', 'leaves']",
		garnish: "Basil Sprig and Lemon Wedge",
		recipe_id: 2,
	},
	{
		name: "['Grapefruit Juice', 'Honey Syrup', 'Rye Whiskey']",
		quantity: "['1', '1/2', '2',]",
		unit: "['oz', 'oz', 'oz']",
		garnish: "None",
		recipe_id: 3,
	},
];

const seedIngredients = () => Ingredient.bulkCreate(ingredientsdata);

module.exports = seedIngredients;
