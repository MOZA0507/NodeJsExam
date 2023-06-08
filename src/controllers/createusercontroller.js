const User = require('../models/userModel');
const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.use(express.json());

const userCreation = async(req,res) =>{
    try{
        const{token} = req.params;
        const creator = await User.findOne(token);
        if(creator.isadmin !==true){
            return res.status(403).json('You dont have permission to execute this');
        }
        const user = await User.create(req.body)
        res.status(200).json('User created');
    }catch(error){
        console.log(error.message);
        res.status(500).json({message: error.message});
    }
}

mongoose.set("strictQuery",false);
module.exports = userCreation