const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcrypt')

const userSchema = new Schema({
    username:{
        type: String,
        required:true,
        lowercase: true,
        unique: true
    },
    password: {
        type: String,
        required: true,

    },
    memberSince:{
        type: Date,
        default: Date.now
    },
    isAdmin:{
        type:Boolean,
        default:false
    }
})

// pre save hook that will encrypt user and password on signup
userSchema.pre("save", function(next){
    const user = this
    if(!user.isModified("password")) return next()
    bcrypt.hash(user.password, 10, (err,hash)=>{
        if(err) return next(err)
        user.password = hash
        next()
    })
})

// method to check ency password on login
userSchema.methods.checkPassword = function(passwordAttempt, callback){
    bcrypt.compare(passwordAttempt, this.password, (err, isMatch)=>{
        if(err) return callback(err)
        return callback(null,isMatch)
    })
}
//method to remove password for  token sending response
userSchema.methods.withoutPassword = function(){
    //setting to an object so we have access to everything and remove what we want before returning it
    const user = this.toObject()
    delete user.password
    return user

}

module.exports = mongoose.model("User", userSchema)