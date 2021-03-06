const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Post extends Model {}

Post.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
    },
    // user_id: {
    //     type: DataTypes.INTEGER,
    //     allowNull: false,
    // },
    content: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    title: {
        type: DataTypes.STRING, 
        allowNull: false,
    },
},{
    sequelize
});

module.exports = Post;