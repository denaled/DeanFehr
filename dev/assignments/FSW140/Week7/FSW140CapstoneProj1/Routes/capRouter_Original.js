const express = require("express")
const capRouter = express()
//UUID
const uuid = require("uuid")

//fake array data
// First ,last names
//Want a free Cap
//What sports teams you like for ..Football,Baseball
//How many hats do you have?
const caps =[
    {
        firstName:"Jeb",
        lastName:"Jenkins",
        freeCap: false,
        favTeams:["Packers", "Cubs"],
        hatNum:12,
        _id: uuid.v4()
    },
    {
        firstName:"Max",
        lastName:"Millions",
        freeCap: false,
        favTeams:["Steelers", "Braves"],
        hatNum:2,
        _id: uuid.v4()
    },
]
//GET ALL
capRouter.get("/", (req,res)=>{
    console.log("In router at GEt")
    console.log(caps)
    res.send(caps)
})
//GET ONE
capRouter.get("/:capID", (req,res)=>{
    const capID = req.params.capID
    //console.log("the cap ID = "+ capID)
    const foundCap = caps.find(cap => cap._id === capID )
    res.send(foundCap)
})
//ADD ONE
capRouter.post("/", (req,res)=>{
    console.log("STOP")
    console.log(req.body.firstName)
    const newCap = req.body
   newCap._id = uuid.v4()
    caps.push(newCap)
    //res.send(`Awesome, you just added ${newBounty.FirstName} to the bountys array (DB)`)
    res.send(newCap)
})
//DELETE ONE
capRouter.delete("/:capID", (req,res)=>{
    const capID = req.params.capID
    const capIndex = caps.findIndex(cap => cap._id === capID)
    caps.splice(capIndex,1)
    res.send("Removed the cap info")
})
//UPDATE ONE
capRouter.put("/:capID", (req,res) => {
    const capID =req.params.capID
    const capIndex = caps.findIndex(cap => cap._id === capID)
    const updatedCap = Object.assign(caps[capIndex],req.body)
    res.send(updatedCap)
})






module. exports = capRouter