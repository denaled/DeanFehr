const express = require("express")
const app = express()

//middleware
app.use(express.json())

//ROUTES
app.use("/todo", require("./Routes/toDoRouter"))

//Server Listen
app.listen(8484,() =>{
    console.log("This SERVER is running on PORT: 8484")
})