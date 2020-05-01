
const express = require("express")
const app = express()

//middleware
app.use(express.json())

//ROUTES
app.use("/bounty", require("./routes/bountyRouter.js"))


//server Lstions
app.listen(8585, () =>{
    console.log("This server is running on PORT: 8585")
})