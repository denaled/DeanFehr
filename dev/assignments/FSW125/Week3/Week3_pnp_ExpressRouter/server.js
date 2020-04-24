const express = require("express")
const app = express()
const uuid = require("uuid")

//middleware for every request
app.use(express.json())

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
app.get("/bountys", (req,res)=>{
    res.send(bountys)
})

app.post("/bountys", (req,res)=>{
    const newBounty = req.body
    newBounty._id = uuid.v4()
    bountys.push(newBounty)
    res.send(`Awesome, you just added ${newBountys.FirstName} to the bountys array (DB)`)
})

app.listen(8585,()=>{
    console.log("Bounty server running on port 8585")
})