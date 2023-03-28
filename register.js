let express = require('express');
let imports = require('./schema');
let bcrypt = require('bcrypt')
let User = imports.User
let jwt = require('jsonwebtoken')
let bodyParser = require('body-parser');
route=express.Router();
route.use(express.json())
route.use(bodyParser.json())
route.use(bodyParser.urlencoded());
route.post('/register', async (req,res)=>{
    try{
        let {email,password,confirmpassword} = req.body;
    let userdata = await User.findOne({email:email})
    if(userdata){
       return res.status(400).json({
            status:'failed',
            message:'User already exists with the email'
        })
    }
    if(password !== confirmpassword){
        return res.status(400).send('password are not matching')
    }
    bcrypt.hash(password,10,async function(err,hash){
        if(err){
            return res.status(500).json({
                status:'failure',
                message:err.message
            })
        }
        userdata = await User.create({
            email:email,
            password:hash
        });
        res.json({
            status:'ok',
            userdata:userdata
        })
    })
    }
    catch(err){
        res.json({
            status:'failed',
            message:err.message
        })
    }

});
module.exports = route


