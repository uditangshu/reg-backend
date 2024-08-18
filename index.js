const express = require("express");
const mongoose = require("mongoose");

const Registration = require("./model/index"); 

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


mongoose.connect("mongodb://localhost:27017/my-mongo")
.then(() => console.log("Connected to MongoDB"))
.catch((e)=>{
    console.log(e);
});


app.get("/show", async (req,res)=>{
    try{
        const registrations = await Registration.find();
        res.status(200).send(registrations);
    }catch(error){
        res.status(400).send(error.message);
    }
})

app.post("/register", async (req, res) => {
  try {
    const newRegistration = new Registration(req.body);
    await newRegistration.save();
    res.status(201).send("Registration successful!");
  } catch (error) {
    res.status(400).send(error.message);
  }
});

const PORT =  8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
