const express = require("express")
const morgan = require('morgan')
const app = express()

//middleware
app.use(morgan('combined'))
app.use(express.json())

//ROUTES
app.use("/cap", require("./Routes/capRouter.js"))


//server Lstions
app.listen(8485, () =>{
    console.log("This server is running on PORT: 8485")
})