const seedUsers = require("./user-seeds");
const seedRecipes = require("./recipe-seeds");
const seedIngredients = require("./ingredient-seeds");

const sequelize = require("../config/connection");

const seedAll = async () => {
	await sequelize.sync({ force: true });
	console.log("--------------");
	await seedUsers();
	console.log("--------------");
	await seedRecipes();
	console.log("--------------");
	await seedIngredients();

	process.exit(0);
};

seedAll();
