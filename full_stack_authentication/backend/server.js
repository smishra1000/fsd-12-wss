const express=require("express");
const app = express();
const cors = require("cors");

const mongoose = require("mongoose")
mongoose.connect("mongodb://localhost:27017/fsd12-authentication")
const authRoutes = require("./routes/auth")

app.use(cors())
app.use(express.json())

app.use("/auth",authRoutes)

app.listen(8000,()=>{
    console.log("server started")
})