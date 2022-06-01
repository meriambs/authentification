const express = require('express')
// const UserSchema = require('../model/user')
const userRoutes = express.Router()
const {login,getUser,register} = require('../controllers/user')
//partie validation 
const {registerValidation,validation,logvalidator} = require('../Middelware/RegisterValidator')
const {isAuth} = require('../Middelware/isAuth')
// 2nd lieu 
// const bcrypt = require('bcrypt')
// var jwt = require('jsonwebtoken');


//****************find by token  */
// ki nb3thou maw bil body , nrj3ou bil head ey parametre d'acess fil head
// userRoutes.get('/get',getUser)
//lina bich nzidou hekel validtion 


userRoutes.post('/singup',registerValidation,validation,register)


//login 

userRoutes.post('/login',login)
//grace au token not id matetfj3ouch -_- it dosnt eat 
userRoutes.get('/getaUser',isAuth,(req,res)=>{
    res.send(req.user)
})
userRoutes.get('/gett',(req,res)=>{
    try{
        const newUser = new userSchema(req.body)
        newUser.save()
        res.send({msg:'you did it '})
    }catch(err){res.send({msg:'mkn',err})}

})
module.exports = userRoutes

// on passe a l apartie express validator et on va valider les parties . 
