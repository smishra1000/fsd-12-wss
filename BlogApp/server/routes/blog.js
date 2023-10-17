const express = require("express")
const BlogModel = require("../models/blog")

const router = express.Router();

router.get("/all",async function(req,res){
    let blogs = await BlogModel.find();
    res.send(blogs)
})

router.post("/create", async function(req,res){
    let newBlog = new BlogModel(req.body)
    await newBlog.save();
    res.send("blog created successfully")

})


module.exports = router;