//first express server

const express = require('express')
const app = express()

//fake data
const users =[
    {name: "Adam", age: 22},
    {name: "Moe", age: 24},
    {name: "Betty", age: 20},
    {name: "Batman", age: 32}
]

//get(mount path, Call back function)
app.get('/users', (req,res)=>{
    //res.send("Hello World!")
    //res.send({name: "Adam", age: 22})
    res.send(users)
})




//listen(port,CallBack)
app.listen(9000,()=>{
    console.log("Dean sweet server is running on Port 9000")
})