const express = require ('express')
const cors = require('cors')
const app = express()
const connectddb = require('./config/connectdb')
const port = 5007
require('dotenv').config()
const userRoutes = require('./routes/user')
app.use(cors())

connectddb()
app.use(express.json())


app.use('/auth/user',userRoutes)




app.listen(port,err=>{
    err?console.log(err):console.log(`go to ${port}`)
})