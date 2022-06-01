const mongoose = require('mongoose')

const connectddb=async()=>{
    try{
        //tekhou path de data base , nelguouh ki nruni el mongo 
        // adha el // el el cmd mongo nelgua hekel path el uri /
        //y3ref data win mwjouda bil atlas kifkif 
        //link like this dont forget it 
        
        await mongoose.connect("mongodb+srv://kamikaze:kaito123.HM@cluster0.8mco3.mongodb.net/?retryWrites=true&w=majority")
console.log('db is connected')
    }catch(err){
console.log('you',err)
    }
}

module.exports = connectddb;