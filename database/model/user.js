const mongoose = require('mongoose')


const UserSchema= new mongoose.Schema({
    name:String,
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    userName:String,
    PhoneNumber:Number,
    githubAccount:String
})

module.exports = mongoose.model('utilisateusr',UserSchema);
