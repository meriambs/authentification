const mongoose = require('mongoose')

const connectddb=async()=>{
    try{
        //tekhou path de data base , nelguouh ki nruni el mongo 
        // adha el // el el cmd mongo nelgua hekel path el uri /
        //y3ref data win mwjouda bil atlas kifkif 
        //link like this dont forget it 
        //
        await mongoose.connect("mongodb+srv://kamikaze:Ja2hzpzdujtSD3DG@cluster0.8mco3.mongodb.net/mycontactList?retryWrites=true&w=majority")
console.log('db is connected')
    }catch(err){
console.log(err)
    }
}

module.exports = connectddb;