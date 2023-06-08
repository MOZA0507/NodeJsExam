const mongoose = require('mongoose');

const userSchema = mongoose.Schema(
    {
        user:{
            type: String,
            //required: true,
        },
        name:{
            type: String,
            //required: true,
        },
        lastname:{
            type: String,
            //required: true,
        },
        money:{
            type: Number,
            //required: true,
            default: 1000,
        },
        isadmin:{
            type: Boolean,
            //required: true,
        },
        amount:{
            type: Number,
            default: 0
        },
        password:{
            type:String,
        },
        token:{
            type:String,
        }
    }
);

const User = mongoose.model('User',userSchema);

module.exports = User;