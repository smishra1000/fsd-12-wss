const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/fsd-12-db")

const app = express();
app.use(cors())
app.use(express.json())

const emplyeeRoutes = require("./routes/employee")
const courseRoutes = require("./routes/course")


app.use("/employees",emplyeeRoutes)
app.use("/course",courseRoutes)

app.listen(8001,function(){
    console.log("server is running")
})

