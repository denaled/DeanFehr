const express = require('express')
const rockVoteRouter = express.Router()
const RockVote = require('../Modules/rockVote')

//get all
rockVoteRouter.get("/", (req,res,next)=>{
    RockVote.find((err,rockVote)=>{
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(rockVote)
    })
})
//get one
rockVoteRouter.get("/:rockVoteID", (req,res,next)=>{
    RockVote.findOne({_id: req.params.rockVoteID}, (err,rockVote)=>{
        if (err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(rockVote)
    })
})
//post one
rockVoteRouter.post("/", (req,res,next)=>{
    const newRockVote = new RockVote(req.body)
    newRockVote.save((err,savedRockedVote)=>{
        if (err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedRockedVote)
    })
})

//delete one
rockVoteRouter.delete("/:rockVoteID", (req,res,next)=>{
    RockVote.findOneAndDelete({_id: req.params.rockVoteID}, (err,deletedItem)=>{
        if (err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(`Successfully deleted item ${deletedItem.User} From Database`)
    })
})
//update one
rockVoteRouter.put("/:rockVoteID", (req,res,next)=>{
    RockVote.findOneAndUpdate(
        {_id: req.params.rockVoteID},//find this one to update
        req.body,// update the object with this data
        {new:true},//send back the updated version please
        (err,updatedRockVote)=>{
            if (err){
                res.status(500)
                return next(err)
            }
            return res.status(201).send(updatedRockVote)
        }
        )
})
module.exports = rockVoteRouter