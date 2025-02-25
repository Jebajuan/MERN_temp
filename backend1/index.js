const express = require("express");
const mdb = require("mongoose");
const dotenv = require("dotenv");
const Signup = require("./models/signupSchema");
const app = express();
const bcryt=require('bcrypt')
app.use(express.json())
const PORT = 3001;
dotenv.config();

mdb
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("Connection Successfully");
  })
  .catch((err) => {
    console.log("Check your connection string", err);
  });

app.get("/", (req, res) => {
  res.send("<h1>Welcome to server</h1>");
});

app.post("/login",async (req,res)=>{
  const{Email, password} = req.body;
  try {
    const email=await Signup.findOne({Email})
    if(!email){
      return res.status(400).json({message:"Invalid email"})
    }

    const isMatch=await bcryt.compare(password,email.password)
    if(!isMatch){
      return res.status(400).json({message:"Invalid email or password"})
    }

    return res.status(200).json({message:"Login Successful"})

  } catch (error) {
    res.status(400).json({message:"Login Failed"})
  }
})

app.post("/signup", async (req, res) => {
  try {
    const {firstName,lastName,password,email,phoneNumber}=req.body
    const hashPassword=await bcryt.hash(password,10);
    const newSignup = new Signup({
      firstName: firstName,
      lastName: lastName,
      password: hashPassword,
      email: email,
      phoneNumber: phoneNumber,
    });
    newSignup.save();
    console.log("Signup Successful");
    res.status(201).json({ message: "Signup Successful", isSignup: true });
  } catch (error) {
    res.status(400).json({ message: "Signup Failed", isSignup: false });
  }
});

app.listen(PORT, () => console.log("Server started successfully"));
