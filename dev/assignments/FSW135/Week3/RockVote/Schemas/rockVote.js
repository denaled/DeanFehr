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
    Comments: {
        type:String,
        required: true
    },
    user: { // seting up a one to many relation or tieing another table
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
})

module.exports = mongoose.model("RockVote", rockVoteSchema)