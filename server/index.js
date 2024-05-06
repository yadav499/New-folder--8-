const express = require("express");
const mongoose = require("mongoose");
const userModel = require("./models/userModel");
const app = express();
app.use(express.json());

mongoose
  .connect(
    "mongodb+srv://yadavhemantkumar30:uzQMcnccKcMjTAzV@cluster0.vugalmy.mongodb.net/"
  )
  .then( ()=>{console.log("database connected")}).catch((error)=>{

      console.log("database not connected")
  }
  )

  app.post("/upload", async(req,res)=>{
    const {name, fname, mname} = req.body;
    if(!name || !fname || !mname){
        return res.status(401).send({
            success:false,
            message:"fill all the fields"
        })
    }
    const user = new userModel({name, fname, mname});
    await user.save();
    return res.status(200).send({
        success:true,
        message:"send successfully",
        user
    })

  })



app.listen(4000, () => {
  console.log("server is running");
});
