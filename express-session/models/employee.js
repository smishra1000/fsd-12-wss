const mongoose = require("mongoose")

const employeeShema = new mongoose.Schema({
    id:String,
    name:String,
    age:String,
    email:String
})

module.exports =  mongoose.model("employee",employeeShema,"employee")