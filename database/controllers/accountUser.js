const UserSchema = require('../model/user')

exports.GetContact=async(req,res)=>{
    try{
    const users = await UserSchema.find()
    res.status(200).send({users,msg:'list of ocntact'})
    }catch{
    res.status(500).send('could not get contacts')
    }
    }


    exports.AddContact=async(req,res)=>{
        try{
     const NewContact= new UserSchema(req.body)
     await NewContact.save()
    res.status(200).send({NewContact,msg:"you did it the user is added "})
        }catch(err){
            res.status(500).send('could not add the contact')
        }
    }

    exports.UpdateContact = async(req,res)=>{
        const {id}= req.params
        try{
            const updatedUser = await UserSchema.findByIdAndUpdate(id,{$set:{...req.body}})
    res.status(200).send('the user is updated ')
        }catch(err){
            res.status(500).send('u didnt do it  , no he is not  updated')
        }
    }
    exports.GetById=async(req,res)=>{
        const {id} = req.params
    
        try{
    
    const getuser = await UserSchema.findById(id)
    res.status(200).send({getuser})
        }catch(err){
            console.log(err)
            res.status(500).send('there is no getting naw ')
            
        }
    }

    exports.deletContact= async (req,res)=>{
        try{
            const{id} = req.params
    
            const delContact = await UserSchema.findByIdAndDelete(id)
    res.status(200).send('could delet it ')
        }catch(err){
    res.status(500).send('could not delete')
        }
    }
