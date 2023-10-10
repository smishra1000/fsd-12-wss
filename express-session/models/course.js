const mongoose = require("mongoose")

const courseSchema = new mongoose.Schema({
    name:String,
    instructor:String,
    fee:String,
    duration:String
})

module.exports= mongoose.model("course",courseSchema,"course")

//module.exports = CourseModel
