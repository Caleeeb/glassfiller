const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

const bcrypt = require('bcrypt');

// create user model
class User extends Model {

// check password
}

User.init( 
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.String,
            allowNull: false,
            validate: {
                len: [6]
            }
        },
        // hooks encrypt password
    },
    {
        hooks: {
            async beforeCreate(newUserData) {
                newUserData.password = await bcrypt.hash(newUserData.password, 10);
                return newUserData;
            },
            async beforeUpdate(updatedUserData) {
                updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10);
                return updatedUserData;
            }
        },
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'user'
    }
);


module.exports = User;