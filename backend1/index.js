const express = require("express");
const mdb = require("mongoose");
const dotenv = require("dotenv");
const Signup = require("./models/signupSchema");
const app = express();
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

app.post("/signup", (req, res) => {
  try {
    const {firstName,lastName,password,email,phoneNumber}=req.body
    const newSignup = new Signup({
      firstName: firstName,
      lastName: lastName,
      password: password,
      email: email,
      phoneNumber: phoneNumber,
    });
    newSignup.save();
    console.log("Signup Successful");
    res.status(201).json({ message: "Signup Successful", isSignup: true });
  } catch (error) {
    res.status(201).json({ message: "Signup Failed", isSignup: false });
  }
});

app.listen(PORT, () => console.log("Server started successfully"));
