const mongoose = require("mongoose");

let authSchema = mongoose.Schema({
    email:String,
    password:String,
    role:String,
})

module.exports = mongoose.model("auth",authSchema,"auth")