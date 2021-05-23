const express = require('express')
const path = require('path')
const router = require('./routes/index')

const app = express()

//settings
app.set('port',3000)
app.set('views',path.join(__dirname,'views'))
app.engine('html',require('ejs').renderFile)
app.set('view engine','ejs')
// middleware

//routes 
app.use(router)

//static files
app.use(express.static(path.join(__dirname,'assets')))

//listen on port
app.listen(app.get('port'),()=>{
    console.log('Server on port',app.get('port'))
})