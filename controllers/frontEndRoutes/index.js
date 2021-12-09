const express = require('express');
const router = express.Router();
const {User,Post,Comment}  = require("../../models")

router.get("/", (req, res)=> {
     res.render("home")
 })

router.get("/posts", (req, res)=>{
    Post.findAll().then(postData=>{
        console.log(postData)
        console.log("========")
        const hbsPostData = postData.map(item=>item.get({plain:true}))
        console.log(hbsPostData)
        res.render("posts/index",{
           post:hbsPostData 
        })
    })
})

module.exports = router;