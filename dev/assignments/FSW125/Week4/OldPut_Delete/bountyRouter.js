const express = require("express")
const bounty = express()



const uuid = require("uuid")

//middleware for every request
bounty.use(express.json())

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

//routes
bounty.get("/bountys", (req,res)=>{
    res.send(bountys)
})

bounty.post("/bountys", (req,res)=>{
    console.log(req)
    const newBounty = req.body
   newBounty._id = uuid.v4()
    bountys.push(newBounty)
    res.send(`Awesome, you just added ${newBounty.FirstName} to the bountys array (DB)`)
})


module.exports = bountyRouter