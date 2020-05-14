const express = require("express")
const finderRouter = express()
const uuid = require('uuid')

//fake data
const finders =[
    {
        type: "banana",
        brand: "chiquita",
        price: 0.5,
        _id: uuid.v4()
    },
    {
        type: "apple",
        brand: "gala",
        price: 0.5,
        _id: uuid.v4()
    },
    {
        type: "orange",
        brand: "naval",
        price: 0.75,
        _id: uuid.v4()
    },
    {
        type: "banana",
        brand: "dole",
        price: 0.75,
        _id: uuid.v4()
    }
]

//GET ALL
finderRouter.get("/",(req,res)=>{
    res.send(finders)
})

//GET ONE BY ID
finderRouter.get("/:finderID", (req,res)=>{
    const finderID = req.params.finderID
    const foundFinder = finders.find(finder => finder._id === finderID)
    res.send(foundFinder)
})
// get by type
finderRouter.get("/search/type", (req,res,next)=>{
    const type = req.query.type
    if (!type){
        const error = new Error("You must provide a Type")
        return next(error)
    }
    const filteredFinder = finders.filter(finder => finder.type === type)
    res.send(filteredFinder)
})
//ADD one
finderRouter.post("/", (req,res)=>{
    const newFinder = req.body
    newFinder._id = uuid.v4()
    finders.push(newFinder)
    res.send(`Awesome, you just added ${newFinder.type} to the bountys array (DB)`)
})

module.exports = finderRouter