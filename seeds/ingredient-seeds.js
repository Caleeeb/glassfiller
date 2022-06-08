const { Ingredient } = require("../models");

const ingredientsdata = [
	{
		name: "['Lime Juice', 'Dry Curacao', 'Orgeat', 'Rum', 'Angostura Bitters']",
		quantity: "['3/4', '1/2', '1/2', '2', '1']",
		unit: "['oz', 'oz', 'oz', 'oz', 'dash']",
		garnish: "Mint",
		recipe_id: 1,
	},
];

const seedIngredients = () => Ingredient.bulkCreate(ingredientsdata);

module.exports = seedIngredients;
