const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');


// create the POST model
class Post extends Model {
  
  }

// create fileds/columns for Post model
Post.init(
    {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    ingredients: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    user_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'user',
            key: 'id'
        }
    },
    measurements: {
        type: DataTypes.INTEGER,
        allowNull: true,
    }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'post'
    }
);


module.exports = Post;