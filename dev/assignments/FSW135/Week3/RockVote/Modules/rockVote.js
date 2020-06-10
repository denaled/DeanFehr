const mongoose = require('mongoose')
const Schema = mongoose.Schema


//RockVoteBluePritn
const rockVoteSchema = new Schema({
    User: {
        type:String,
        required: true
    },
    Issue: {
        type:String,
        required: true
    },
    Comment: {
        type:String,
        required: true
    }
})

module.exports = mongoose.model("RockVote", rockVoteSchema)