const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

// create the POST model
class Ingredient extends Model {}


Ingredient.init(
    {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        quantity:  {
            type: DataTypes.STRING,
            allowNull: false
        },
        unit: {
            type: DataTypes.STRING,
            allowNull: false
        },
        post_id: {
            type: DataTypes.INTEGER,
            references: {
				model: "post",
				key: "id",
			},
        },
    },
    {
		sequelize,
		freezeTableName: true,
		underscored: true,
		modelName: "ingredient",
	}
);


module.exports = Ingredient;