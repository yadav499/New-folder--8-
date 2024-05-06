const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    fname:{
        type:String,
        required:true
    },
    mname:{
        type:String,
        required:true
    }
})

const userModel = new mongoose.model("user",userSchema);
module.exports = userModel;