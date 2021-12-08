const express = require('express');
const router = express.Router();
const postRoutes = require("../apiRoutes/postRoutes");
// const userRoutes = require("../apiRoutes/userRoutes");
// const opinionRoutes = require("../apiRoutes/opinionRoutes");
//these are pluralized in the search i.e localhost:3000/api/posts NOT api/post
router.use('/posts', postRoutes);
// router.use('/users', userRoutes);
// router.use('/opinions', opinionRoutes);
router.get('/',(req, res) => {
    res.send("apiRoutes/index.js has been reached.")
})

module.exports = router;