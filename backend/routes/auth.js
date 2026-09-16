 const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const router = express.Router();

router.post('/register', async (req,res)=>{
  try{
    const {name,email,password} = req.body;
    const exists = await User.findOne({email});
    if(exists) return res.status(400).json({error: "User already exists"});
    const hashed = await bcrypt.hash(password, 10);
    const user = new User({name,email,password:hashed});
    await user.save();
    res.json({message: "User Registered"});
  }catch(e){
    res.status(400).json({error: e.message})
  }
});

router.post('/login', async (req,res)=>{
  try{
    const {email,password} = req.body;
    const user = await User.findOne({email});
    if(!user) return res.status(400).json({error:"User not found"});
    const isMatch = await bcrypt.compare(password, user.password);
    if(!isMatch) return res.status(400).json({error:"Wrong password"});
    const token = jwt.sign({id:user._id}, process.env.JWT_SECRET || "akash_secret_123", {expiresIn:"1d"});
    res.json({token, user: {id:user._id, name:user.name, email:user.email}});
  }catch(e){
    res.status(400).json({error: e.message})
  }
});

module.exports = router;