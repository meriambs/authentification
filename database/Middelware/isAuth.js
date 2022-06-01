//enta howa wela mouch howa XD 

var jwt = require('jsonwebtoken');
const UserSchema = require('../model/user')

//nest7a9ou el jwt ely bich yjbdlina el token 

exports.isAuth = async(req,res,next)=>{
try{
    const token = req.header('Authorization')
//tnejem tkteb 7ata djeja XD ----> i know not that funny -_- 
//thema 7aja tb3a el jwt tjibhoulik zl id 
var decoded =jwt.verify(token,process.env.privateKey)
if(!decoded){ return res.status(404).json({ errors })}
const user = await UserSchema.findById(decoded.id)
//une fois sna3et el key mt3i nemchi nguolou next 
req.user = user 
next()
}catch(err){
    res.status(500).send({msg:'you are not '})
}
}