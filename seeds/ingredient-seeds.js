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
		name: "['Lemon Juice', 'Triplesec', 'Cinnamon Syrup', 'Gin', 'Snail Slime']",
		quantity: "['3', '1', '2', '1', '1']",
		unit: "['oz', 'oz', 'oz', 'oz', 'dash']",
		garnish: "Cinnamon Stick",
		recipe_id: 2,
	},
	{
		name: "['Grapefruit Juice', 'Allspice', 'Simple Syrup', 'Vodka', 'Grenadine']",
		quantity: "['1', '2', '2', '2', '1']",
		unit: "['oz', 'oz', 'oz', 'oz', 'dash']",
		garnish: "Mini Umbrella",
		recipe_id: 3,
	},
];

const seedIngredients = () => Ingredient.bulkCreate(ingredientsdata);

module.exports = seedIngredients;
