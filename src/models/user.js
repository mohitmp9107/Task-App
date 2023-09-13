const mongoose = require('mongoose');
const validator = require('validator');

const User = mongoose.model('User',{
    name:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        lowercase:true,
        trim:true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error('Email is invalid');
            }
        }
    },
    age:{
        type:Number,
        default:0,
        validate(age){
            if(age<0){
                throw new Error('age must be +ve');
            }
        }
    },
    password:{
        type:String,
        reqired:true,
        trim:true,
        minLength:7,
        validate(value){
            if(value.includes('password')){
                throw new Error('Password can\'t contain "password"');
            }
        }
    }
});

module.exports = User;

