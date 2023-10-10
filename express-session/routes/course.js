const express = require("express")

const router = express.Router();

const CourseModel = require("../models/course")

router.get("/all", async function(req,res){
    // logic for get courses

    let courses = await CourseModel.find();
    res.send(courses)
})

router.post("/create",async function(req,res){
    const course = new CourseModel(req.body)
    await course.save();
    res.send("course create successfully")
})






module.exports = router