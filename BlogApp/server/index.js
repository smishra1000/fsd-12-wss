const express = require("express");


const mongoose = require("mongoose");
const cors = require("cors")

const blogRoutes = require("./routes/blog")

const app = express();

mongoose.connect("mongodb://localhost:27017/blog_app")

app.use(cors())
app.use(express.json())

app.use("/blog",blogRoutes)

app.listen(8000,()=>{
    console.log("server is runnning")
})