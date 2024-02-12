// const express = require('express')
// const route = express.Router()
// const {login,register,about,contact} = require("../Controller/Api")
// const { SpecificAuth } = require('../Middleware/auth')

// route.get('/login',SpecificAuth, login)
// route.get('/register',SpecificAuth, register)
// route.get('/about',about)
// route.get('/contact',contact)

// module.exports = route

const route = require("express").Router()
// const route = express.Router();
const bcrypt = require("bcrypt");
const saltRound = 10;
const secretKey = 'kishore';
// console.log(secretKey)
const jwt = require('jsonwebtoken')
const auth = require('../Middleware/auth')

let arr = []; //database

route.post("/register", (req, res) => {
  const data = req.body; //body parsing
  // console.log(data) //{ email: 'abc@gmail.com', password: '123456789' }

  const account = arr.find((item) => item.email === data.email);
  if(account){
    return res.send({msg:"This email is already exist"})
  }

  //encrypt the password by hashing the password
  data.password = bcrypt.hashSync(data.password, saltRound);
  // console.log(data); //{email: 'abc@gmail.com',password: '$2b$10$gJLAsucy2yviXqnEYrxXrORXfCTORQRd4yt9ED7P/OKciQfa6luLS' }

  arr.push(data);
  console.log(arr);

  const token = jwt.sign({user:data.email},secretKey)  //jwt token generation  

  res.send({msg:"user Registered successfully", token:token});
});

route.post("/login", async (req, res) => {
  const data = req.body; //user input data for login
  console.log(data);

  const account = arr.find((item) => item.email === data.email);
  console.log(account, "account");

  if (account) {
    const login = await bcrypt.compare(data.password, account.password);
    console.log(login, "login");
    if (login) {
      const token = jwt.sign({user:data.email},secretKey,{expiresIn:"365d"})
      return res.send({msg:"User Logged in successfully",token:token});
    } else {
      return res.send("Password is incorrect");
    }
  } else {
    return res.send("user is not registered");
  }
});

route.get('/home',(req,res)=>{
  res.send({msg:"Welcome to home page"})
})

route.get('/dashboard',auth, (req,res)=>{
  res.send({msg:"Welcome to Dashboard"})
})
module.exports = route;