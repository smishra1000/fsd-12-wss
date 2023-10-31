const express = require("express")
const BlogModel = require("../models/blog")
var ObjectId = require('mongodb').ObjectId;

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

router.delete("/deleteBlog/:id", async function(req,res){
    const deltedBlog = await BlogModel.deleteOne({"_id":new ObjectId(req.params.id)})
    res.send("blog deleted successfully")
})

router.get("/blogById/:id", async function(req,res){
    let blog = await BlogModel.findOne({"_id": new ObjectId(req.params.id)})
    res.send(blog)
})

router.put("/edit/:id",async function(req,res){
    console.log(req.params,req.body)
     const updatedBlog = await BlogModel.findByIdAndUpdate({"_id":new ObjectId(req.params.id)},req.body,{upsert:true})
    res.send("blog updated successfully")
})

router.get("/searchByTitle/:title",async function(req,res){
    console.log(req.params.title)
    const blogs = await BlogModel.find({title:req.params.title})
    res.send(blogs)
})

router.get("/searchByCategory/:category",async function(req,res){
    console.log(req.params.category)
    if(req.params.category.toLowerCase()==='all'){
        const blogs = await BlogModel.find({})
        res.send(blogs)
    }else{
        const blogs = await BlogModel.find({category:req.params.category.toLowerCase()})
        res.send(blogs)
    }
    
})


module.exports = router;