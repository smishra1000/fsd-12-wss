const mongoose = require("mongoose");

const authSchema = new mongoose.Schema({
    email:String,
    password:String
})

module.exports = mongoose.model("auth",authSchema,"auth")