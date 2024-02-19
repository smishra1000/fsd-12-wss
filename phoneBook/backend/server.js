const express = require("express");
const app = express();
const cors = require("cors")
const mongoose = require("mongoose")



const authRoutes = require("./routes/auth")

mongoose.connect("mongodb://localhost:27017/fsd12-phoneBook")


app.use(cors())
app.use(express.json())

app.use("/auth",authRoutes)


app.listen(7000,function(){
    console.log("server is running at port 7000")
})