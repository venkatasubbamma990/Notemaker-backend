let mongoose = require('mongoose');
let express = require('express');
let port = 3000
let app = express()
app.use(express.json());
let data = require('./data.js')
let login = require('./login.js');
let register = require('./register.js')
app.use('/login',login)
app.use('/register',register)
app.use('/data',data)
app.get('/',(req,res)=>{
    res.send('hello kalyan')
})

mongoose.connect("mongodb+srv://venkatasubbamma990:sudha1454@cluster0.mn1ypvv.mongodb.net/?retryWrites=true&w=majority")
app.listen(port,()=>{
    console.log(`express server started at http://localhost:${port}`)
})



