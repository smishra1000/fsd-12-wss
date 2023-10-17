const mongoose = require("mongoose")

const blogSchema = new mongoose.Schema({
    title:String,
    content:String,
    author:String,
    image:String
})

let BlogModel = mongoose.model("blog",blogSchema,"blog")

module.exports = BlogModel