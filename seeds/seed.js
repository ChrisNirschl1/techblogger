const sequelize = require("../config/connection");
const {Post, User, Comment} = require("../models")
const postData = require ("./posts.json")
const userData = require ("./users.json")
const commentData = require ("./comments.json")

const seed = async () => {
    await sequelize.sync({force: true});
    await Post.bulkCreate(postData);
    console.log("Your post data has been seeded.");
    await User.bulkCreate(userData, {individualHooks:true});
    console.log("Your user data has been seeded.");
    await Comment.bulkCreate(commentData);
    console.log("Your comment data has been seeded.");
    process.exit(0);
};

seed()