const express = require('express')

const AccounttRouter = express.Router()
const { deletContact,GetById,UpdateContact,AddContact,GetContact}=require('../controllers/accountUser')

// /get route 

AccounttRouter.get('/',GetContact)

//delet routes 

AccounttRouter.delete('/:id',deletContact)


//post route 

AccounttRouter.post('/',AddContact)

//put route 


AccounttRouter.put('/:id',UpdateContact)


//and naw it's the get by id 

AccounttRouter.get('/:id',GetById)
module.exports = AccounttRouter