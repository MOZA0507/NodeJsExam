const User = require('../models/userModel');
const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.use(express.json());


const addMoney = async(req,res)=>{
    try{
        const {id} = req.params;
        const amount = req.body.amount;
        const user = await User.findById(id);
        if(!user){
            return res.status(404).json({message:`cannot find user`});
        }
        user.money+=amount;
        await user.save();
        const {name,lastname,money} = user
        res.status(200).json({name,lastname,money});
    }catch(error){
        res.status(500).json({message:error.message})
    }
}

const takeOffMoney = async(req,res)=>{
    try{
        const {token} = req.params;
        const amount = req.body.amount;
        const user = await User.findOne({token});
        if(user.isadmin === true){
            return res.status(403).json('You dont have permission to execute this');
        }
        if(!user){
            return res.status(404).json({message:`cannot find any user with ID ${id}`});
        }
        if(amount>user.money){
            console.log("You cannot take off more quantity than you have")
            res.json({message:'You cannot take that quantity'})
        }else{
            user.money-=amount;
            await user.save();
            const {name,lastname,money} = user;
            res.status(200).json({name,lastname,money});
        }
        
        
    }catch(error){
        res.status(500).json({message:error.message})
    }
}

mongoose.set("strictQuery",false);
module.exports = {addMoney,takeOffMoney};