const express = require("express")
const router = express.Router();
const EmployeeModel = require("../models/employee")

router.post("/create", async function(req,res){
    console.log(req.body)
    let employeeNew = new EmployeeModel(req.body)
    await employeeNew.save();
    res.send("employee save successfully")

})

router.get("/all",async function(req,res){
    let employees = await EmployeeModel.find()
    res.send(employees)
})

module.exports = router