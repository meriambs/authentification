const express = require('express')
// const UserSchema = require('../model/user')
const userRoutes = express.Router()
const {login,getUser,register} = require('../controllers/user')
// 2nd lieu 
// const bcrypt = require('bcrypt')
// var jwt = require('jsonwebtoken');

userRoutes.get('/get',getUser)
//
userRoutes.post('/singup',register)
//login 

userRoutes.post('/login',login)
module.exports = userRoutes

// on passe a l apartie express validator et on va valider les parties . 
