const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Comment extends Model {}

Comment.init({
    like: {
        type:DataTypes.INTEGER,
        allowNull: false,
    },
    review: {
        type:DataTypes.TEXT,
        allowNull: false,
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
},{
    sequelize
});

module.exports = Comment;