const express = require("express")
const toDoRouter = express()
//UUID
const uuid =require("uuid")

//Fake ToDo Data
const toDos = [
    {
        name: "Bob Evans",
        description: "Rake leaves",
        imageURL: "http://www.fakeimage.2345",
        completed: false,
        _id: uuid.v4()
    },
    {
        name: "Tiger King",
        description: "Clean Tiger cages",
        imageURL: "http://www.fakeimage.5545",
        completed: false,
        _id: uuid.v4()
    },
    
]

//GET ALL
toDoRouter.get("/", (req,res) => {
    res.send(toDos)
})
//GET ONE
toDoRouter.get("/:toDoID", (req,res) => {
    const toDoID = req.params.toDoID
    const foundToDo = toDos.find(toDo =>toDo._id == toDoID)
    res.send(foundToDo)
})
//ADD ONE
toDoRouter.post("/", (req,res) => {
    const newToDo = req.body
    newToDo._id = uuid.v4()
    toDos.push(newToDo)
    res.send(`Added ${newToDo.name} toDo to the ToDO array(DB)`)
})
//DELETE ONE
toDoRouter.delete("/:toDoID", (req,res) => {
    const toDoID = req.params.toDoID
    const toDoIndex = toDos.findIndex(toDo => toDo._id === toDoID)
    toDos.splice(toDoIndex,1)
    res.send("You Deleted the ToDO")
})
//UPDATE ONE
toDoRouter.put("/:toDoID", (req,res) => {
    const toDoID = req.params.toDoID
    const toDoIndex = toDos.findIndex(toDo => toDo._id === toDoID)
    const updateToDo = Object.assign(toDos[toDoIndex], req.body)
    res.send(updateToDo)
})


module.exports = toDoRouter
