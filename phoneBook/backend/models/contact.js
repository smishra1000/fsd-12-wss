const mongoose = require("mongoose")

const contactSchema = new mongoose.Schema({
fullName:String,
email:String,
address:String,
phone:String,
userId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'Auth'
}
})



module.exports = mongoose.model("contact",contactSchema)