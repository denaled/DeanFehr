
const express = require("express")
const morgan = require('morgan')
const app = express()

//middleware
app.use(morgan('combined'))
app.use(express.json())

//ROUTES
app.use("/finder", require("./routes/finderRouter.js"))
//error handling
app.use((err,req,res,next) => {
    return res.send ({errMsg: err.message})
})

//server Lstions
app.listen(8585, () =>{
    console.log("This server is running on PORT: 8585")
})