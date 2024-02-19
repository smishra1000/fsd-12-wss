const mongoose = require("mongoose")

const authSchema = new mongoose.Schema({
    fullName:String,
    email:String,
    password:String,
    address:String,
    phone:String
})

module.exports = mongoose.model("auth",authSchema)