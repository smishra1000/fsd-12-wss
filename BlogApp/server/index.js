const express = require("express");
const fileUpload = require("express-fileupload")


const mongoose = require("mongoose");
const cors = require("cors")

const blogRoutes = require("./routes/blog")
const authRoutes = require("./routes/auth")

const app = express();

mongoose.connect("mongodb://localhost:27017/blog_app")

app.use(cors())
app.use(express.json())
app.use(fileUpload())

app.use('/uploads', express.static('uploads'))

app.use("/blog",blogRoutes)
app.use("/auth",authRoutes)


app.listen(8000,()=>{
    console.log("server is runnning")
})