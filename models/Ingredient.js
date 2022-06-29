const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

// create the Recipe model
class Ingredient extends Model {}

Ingredient.init(
	{
		name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		quantity: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		unit: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		garnish: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			defaultValue: false,
		},
		recipe_id: {
			type: DataTypes.INTEGER,
			references: {
				model: "recipe",
				key: "id",
			},
		},
	},
	{
		sequelize,
		timestamps: false,
		freezeTableName: true,
		underscored: true,
		modelName: "ingredient",
	}
);

module.exports = Ingredient;
