const express = require("express");
const router = express.Router();
const ContactModel = require("../models/contact")
const mongoose = require("mongoose")


router.post("/create",async function(req,res){
    let isContactExist = await ContactModel.findOne({phone:req.body.phone})
    if(isContactExist){
        return res.send({message:"This Contact alredy exist",success:false})
    }else{
        let newContact = new ContactModel({...req.body});
        let createdContact = await newContact.save()
        return res.send({message:"Contact Created Successfully",success:true})
    }
})

router.get("/list/:userId",async function(req,res){
    // let userId = req.params.userId
    // const id = mongoose.Types.ObjectId(req.params.userId.trim());
    let contacts = await ContactModel.find()
    return res.send({contacts,success:true})
})

router.delete("/delete/:id",async function(req,res){
    let contacts = await ContactModel.findByIdAndDelete({_id:req.params.id})
    return res.send({message:"Contact deleted Successfully",success:true})
})

// router.get("/list/:userId",function(req,res){
//     let userId = req.params.userId
//     let contacts = ContactModel.find({userId:{$ne:userId}})
//     return res.send({contacts,success:true})
// })




module.exports = router