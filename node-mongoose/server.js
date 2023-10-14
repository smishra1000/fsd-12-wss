const express = require("express")
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/fsd-12-test-db")

const app = express();

app.use(express.json())

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    age : {
        type:Number,
        required:true,
    },
    email:{
        type:String,
        required:true
    }
})

const UserModel = mongoose.model("user",userSchema,"user")

app.get("/users",async function(req,res){
   const users = await UserModel.find()
   res.json(users)
})

app.post("/save", async function(req,res){
    const {name, age, email} = req.body
    let user = new UserModel({name,age,email})
    try{
        await user.save();
        res.send("user save succesfully")
    }catch(err){
        console.log(err)
        res.status(500).send(err)
    }
})

app.delete("/deleteuser/:name",async function(req,res){
    const deletedUser = await UserModel.deleteOne({name:req.params.name})
    res.send(`user ${req.params.name} deleted suucessfully`)
})

app.listen(8000,function(){
    console.log("server is started")
})