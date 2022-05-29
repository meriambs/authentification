const UserSchema = require('../model/user')
const bcrypt = require('bcrypt')
var jwt = require('jsonwebtoken');
const { body, validationResult } = require('express-validator');

exports.register= async(req,res)=>{
   
    try{ 
        const{name,email,password} = req.body
        const found = await UserSchema.findOne({email})
        if(found){res.status(400).send('you have already an acount')}
//when do u need the bycrypt ??



            const newUser = await new UserSchema(req.body)
//so nkhlih ysn3ou w b3ed yhashi el pws
            //everything will happen before the save of the user 
            const saltRounds = 10;
            const salt = bcrypt.genSaltSync(saltRounds);
            //we can use only this one but at the same time we can use the 3 of them 
            //the plain pasword will be ur password 
            //lina bich ysir hashage lil password , ely bich thez ism w salting 
            // w bil destructorign el foguenya ma nest7a9ouch nktbou req.body.psw
const hash = bcrypt.hashSync(password, salt);

// on peut egalement : const hash = bcrypt.hashSync(password, 10);same 
//ici on change un elemnt de notre objet car nous n'avons plus the same psw 
newUser.password = hash 
//end partie hash 
//token , tnejem t7otou b3ed el save , ema el save khleha heka  wkhw 
const payload = { id : newUser._id}
var token = jwt.sign(payload, process.env.privateKey);
//tnjim tspiri 
            newUser.save()
            res.status(200).send({msg:'welcome to the groupe',newUser,token})
        
//naw lezm nans3ou el token mt3na 
// /*token howa bita9et t3rif , y3tik chney 3ndek t7el bih 
//chneay el identifiant de l'user , selon el id ely jey mil token , 
//el payload howa el id mt3na , scd part el 
//nhezou el token njrbouh fil site nrw enfis el id el mt3 el user 

        res.send('true you did it ')
            }catch(err){
                console.log(err)
                res.send({msg:'it error',err})
            }
}


exports.getUser=async(req,res)=>{
    try{
        const take = await UserSchema.find()

res.send({msg:'true you did it ',take})
    }catch(err){
        res.send({msg:'it error'})
    }
}


exports.login=async(req,res)=>{
    try{
    const{email,password} = req.body
    const found = await UserSchema.findOne({email})
    //hekel found mouch el user mtE3i donc jebit el user deja 
    if(!found){res.status(500).send({msg:'the email is not found you have t create and account '})}
    
    //tw nediw hekel bycrypt 
    const match = await bcrypt.compare(password, found.password);
    //eror client  how 3ta mdp ghalit 
    if(!match){res.status(400).send({msg:'you have the wrong mdp'})}
    
    //bich t7el njibou hekel token , nest7a9ou hekel payload nn 
    const payload = { id : found._id}
    var token = jwt.sign(payload, process.env.privateKey);
    res.status(200).send({msg:'you did good welcome ',token,found})
    }catch(err){
        res.send({msg:'you have a prob',err})
    }
    }