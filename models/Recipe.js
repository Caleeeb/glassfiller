const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

// create the Recipe model
class Recipe extends Model {}

// create fileds/columns for Recipe model
Recipe.init(
	{
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
		},
		title: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		// ingredients: {
		// 	// this is going to store a json object
		// 	// this information will look like ingedients: [{name:'Lime Juice', quantity: '3/4', unit: "oz"}, {name:'Orgeat', quantity: '1/2', unit: "oz"}, 'Dry Curacao', 'Rum', 'Mint']
		// 	type: DataTypes.STRING,
		// 	allowNull: false,
		// },
		description: {
			type: DataTypes.STRING,
			allowNull: false
		},
		user_id: {
			type: DataTypes.INTEGER,
			references: {
				model: "user",
				key: "id",
			},
		},
	},
	{
		sequelize,
		freezeTableName: true,
		underscored: true,
		modelName: "Recipe",
	}
);

module.exports = Recipe;
