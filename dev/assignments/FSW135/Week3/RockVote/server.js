const express = require('express')
const app = express()
require('dotenv').config()
const morgan = require('morgan')
const mongoose = require('mongoose')
const expressJwt = require('express-jwt')

//process.env.SECRET

// Middleware (for every request) //
app.use(express.json()) 
app.use(morgan('dev')) 
//Connect to DB
mongoose.connect('mongodb://localhost:27017/RockVoteDB',
{
  useNewUrlParser:true,
  useUnifiedTopology:true,
  useCreateIndex:true,
  useFindAndModify:false
},
()=> console.log("Connected to ROCK VOTE DB")
)

//Routes

app.use("/auth", require("./Routes/authRouter"))
app.use("/api", expressJwt({secret: process.env.SECRET}))//req.user
app.use("/api/rockVote", require("./Routes/voteRouter"))

// Error handler
app.use((err, req, res, next) => {
    console.log(err)
    if(err.name === "UnauthorizedError"){
      res.status(err.status)
    }
    return res.send({errMsg: err.message})
  })

  // Server Listen //
app.listen(9000, () => {
    console.log("The server is running on Port 9000")
  })