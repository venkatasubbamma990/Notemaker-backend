let express = require('express')
let route = express.Router()
let imports = require('./schema');
let Note = imports.Note
route.use(express.json());
let bodyParser = require('body-parser');
route.use(bodyParser.urlencoded());
route.use(bodyParser.json());
const cors = require("cors");

route.use(cors({
    origin: "*",
}))
/* route.get('/data',(req,res)=>{
    res.send('hellooooooooooooooo')
}) */
route.post('/data', async (req,res)=>{
        try{
            let note = await Note.create(req.body)
        res.status(200).json({
            status:'success',
            note:note
        })
        }
        catch(err){
            res.status(401).json({
                status:'failure',
                message:err.message
            })
        }
})
route.get('/data', async (req,res)=>{
    try{
        let note = await Note.find()
    res.status(200).json({
        status:'success',
        note:note
    })
    }
    catch(err){
        res.status(401).json({
            status:'failure',
            message:err.message
        })
    }
})
route.delete('/data/:id', async (req,res)=>{
    try{
        let note = await Note.deleteOne({_id:req.params.id})
    res.status(200).json({
        status:'success',
        note:note
    })
    }
    catch(err){
        res.status(401).json({
            status:'failure',
            message:err.message
        })
    }
})
module.exports = route