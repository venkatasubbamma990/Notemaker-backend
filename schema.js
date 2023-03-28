let mongoose = require('mongoose')
let userSchema = mongoose.Schema({
    email:{type:String},
    password:{type:String}
})
let User = mongoose.model('user',userSchema)
let noteSchema = mongoose.Schema({
    title:{type:String},
    description:{type:String}
})
let Note = mongoose.model('note',noteSchema)

module.exports = {User,Note}
