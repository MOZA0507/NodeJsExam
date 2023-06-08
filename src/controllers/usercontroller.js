const User = require('../models/userModel');
const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.use(express.json());

const getUsers = async(req,res) =>{
    try{
        const users = await User.find();
        res.status(200).json(users);
    }catch (error){
        res.status(500).json({message:error.message});
    }
}

const getUser = async(req,res)=>{
    try{
        const{token} = req.params;
        const user = await User.findOne({token});
        const {_id,name,lastname,money} = user;
        res.status(200).json({_id,name,lastname,money,token});
    }catch(error){
        res.status(500).json({message:error.message});
    }
}

mongoose.set("strictQuery",false);
module.exports ={
    getUsers,
    getUser,
};