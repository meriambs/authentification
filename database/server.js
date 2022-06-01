const express = require ('express')
const cors = require('cors')
const app = express()
const connectddb = require('./config/connectdb')
const port = 5008
require('dotenv').config()
const userRoutes = require('./routes/user')
const AccounttRouter = require('./routes/accountUser')
app.use(cors())

connectddb()
app.use(express.json())


app.use('/auth/user',userRoutes)
app.use('/account/user',AccounttRouter)




app.listen(port,err=>{
    err?console.log(err):console.log(`go to ${port}`)
})