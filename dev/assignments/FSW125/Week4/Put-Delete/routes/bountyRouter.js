const express = require("express")
const bountyRouter = express()
//UUID
const uuid = require("uuid")
//const { v4: uuidv4 } = require('uuid')

//middleware for every request
//bounty.use(express.json())

//Fake array data
const bountys =[
    {FirstName:"Bob",
    LastName: "Smith",
    Living: true,
    BountyAmount: 25,
    Type: "Sith",
    _id: uuid.v4()},
    
    {FirstName:"Larry",
    LastName: "Smith",
    Living: true,
    BountyAmount: 45,
    Type: "Sith",
    _id: uuid.v4()}
]

//GET ALL
bountyRouter.get("/", (req,res)=>{
    res.send(bountys)
})
//GET ONE
bountyRouter.get("/:bountyID", (req,res)=>{
    const bountyID = req.params.bountyID
    //console.log("the bounty ID = "+ bountyID)
    const foundBounty = bountys.find(bounty => bounty._id === bountyID )
    res.send(foundBounty)
})

//ADD ONE
bountyRouter.post("/", (req,res)=>{
    console.log(req)
    const newBounty = req.body
   newBounty._id = uuid.v4()
    bountys.push(newBounty)
    res.send(`Awesome, you just added ${newBounty.FirstName} to the bountys array (DB)`)
})
//delete one
bountyRouter.delete("/:bountyID", (req,res)=>{
    const bountyID = req.params.bountyID
    const bountyIndex = bountys.findIndex(bounty => bounty._id === bountyID)
    bountys.splice(bountyIndex,1)
    res.send("Removed the bounty")
})
//updateone
bountyRouter.put("/:bountyID", (req,res) => {
    const bountyID =req.params.bountyID
    const bountyIndex = bountys.findIndex(bounty => bounty._id === bountyID)
    const updatedBounty = Object.assign(bountys[bountyIndex],req.body)
    res.send(updatedBounty)
})

module.exports = bountyRouter