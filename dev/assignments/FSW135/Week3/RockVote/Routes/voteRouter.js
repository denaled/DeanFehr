const express = require('express')
const rockVoteRouter = express.Router()
const RockVote = require('../Schemas/rockVote')

//get all
rockVoteRouter.get("/", (req,res,next)=>{
    RockVote.find((err,votes)=>{
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(votes.map((v)=>{
             var newV = v;
            // newV.Comment = v.Comment.toUpperCase();
            return newV

        }));
    })
})
// Get rock Vote data by user id
rockVoteRouter.get("/user", (req, res, next)=>{
    RockVote.find({user: req.user._id}, (err,vote)=>{
        if (err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(vote)
    })
})
//get one
rockVoteRouter.get("/:rockVoteID", (req,res,next)=>{
    RockVote.findOne({_id: req.params.rockVoteID}, (err,vote)=>{
        if (err){
            res.status(500)
            return next(err)
        }
        // vote.Comment = vote.Comment.toUpperCase();
        return res.status(200).send(vote)
    })
})
//post one
rockVoteRouter.post("/", (req,res,next)=>{
    // console.log(req.body)
    // console.log(req.user)
    req.body.user = req.user._id
    const newRockVote = new RockVote(req.body)
    newRockVote.save((err,savedVote)=>{
        if (err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedVote)
    })
})

//delete one
rockVoteRouter.delete("/:rockVoteID", (req,res,next)=>{
    RockVote.findOneAndDelete({_id: req.params.rockVoteID, user:req.user._id}, 
        (err,deletedItem)=>{
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
        {_id: req.params.rockVoteID, user:req.user._id},//find this one to update
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