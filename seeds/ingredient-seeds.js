const { Ingredient } = require("../models");

const ingredientsdata = [
	{
		name: "Lime Juice",
		quantity: "3/4",
		unit: "oz",
		recipe_id: 1,
	},
	{
		name: "Dry Curacao",
		quantity: "1/2",
		unit: "oz",
		recipe_id: 1,
	},
	{
		name: "Orgeat",
		quantity: "1/2",
		unit: "oz",
		recipe_id: 1,
	},
	{
		name: "Rum",
		quantity: "2",
		unit: "oz",
		recipe_id: 1,
	},
	{
		name: "Angostura Bitters",
		quantity: "2",
		unit: "dash",
		recipe_id: 1,
	},
	{
		name: "Mint",
		quantity: "1",
		unit: "Sprig",
		garnish: true,
		recipe_id: 1,
	},
	// 	{
	// 		name: "['Leman Juice', 'Simple Syrup', 'Gin', 'Basil']",
	// 		quantity: "['1', '3/4', '2', '4-6']",
	// 		unit: "['oz', 'oz', 'oz', 'leaves']",
	// 		garnish: "Basil Sprig and Lemon Wedge",
	// 		recipe_id: 2,
	// 	},
	// 	{
	// 		name: "['Grapefruit Juice', 'Honey Syrup', 'Rye Whiskey']",
	// 		quantity: "['1', '1/2', '2',]",
	// 		unit: "['oz', 'oz', 'oz']",
	// 		garnish: "None",
	// 		recipe_id: 3,
	// 	},
];

const seedIngredients = () => Ingredient.bulkCreate(ingredientsdata);

seedIngredients();

module.exports = seedIngredients;
