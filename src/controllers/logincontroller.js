const User = require('../models/userModel');
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const jwt = require('jsonwebtoken');

app.use(express.json());

const login = async(req,res) =>{
    try{
        const{user,password} = req.body

        const userGot = await User.findOne({user});

        if(!userGot){
            return res.status(401).json({error:'invalid username'});
        }

        const passwordMatch = await password == userGot.password;

        if(!passwordMatch){
            return res.status(401).json({error:'Invalid name'});
        }

        const token = jwt.sign({userId: userGot._id},'key');
        const admin = userGot.isadmin;

        userGot.token = token
        await userGot.save();

        res.json({token,admin});
    }catch(error){
        res.status(500).json({message:error.message});
    }
}

mongoose.set("strictQuery",false);
module.exports = login;