const express = require("express")
const morgan = require('morgan')
const mysql =require('mysql')
const app = express()

//middleware
app.use(morgan('combined'))
app.use(express.json())

//create MySQL DB string
const db = mysql.createConnection({
    host:'localhost',
    user: 'dbconnect',
    password: '',
   database:'Caps_DB'
})
db.connect((err)=>{
    if(err){
        throw err;
    }
    console.log("Established Connection to MySQL DB")
})

//ROUTES (Not using for this program)
// app.use("/cap", require("./Routes/capRouter.js"))


//GET ALL
app.get('/getAll', (req,res)=>{
    // Get All SQL Statement
     let sql ="SELECT * FROM caps";
     // Run Query Statement
     let query = db.query(sql, (err,result)=>{
         if (err){
             throw err;
         }
         res.send(result)
     })
 })

 //ADD DATA
 app.post('/addData', (req,res)=>{
    //console.log("I AM IN THE ADD DATA-->" + req[0])
    let post = {firstName: req.body.firstName, lastName: req.body.lastName , hatNum: req.body.hatNum}
    //hardCode for Testing
    //let post = {firstname:'This Does', lastname: 'Works', hatNum: 14}
    // ADD sql statement
    let sql ="INSERT INTO caps SET ?";
   // Run Query Statement
    let query = db.query(sql,post, (err,result)=>{
        if (err){
            throw err;
        }
        console.log("IN SERVER--addData-->" + result)
        res.send(result)
    })
})

//UPDATE STatment
app.put('/editCap/:id', (req,res)=>{
    console.log("I--AM--IN--SERVER---Update" + req)
    let post = {firstName: req.body.firstName, lastName: req.body.lastName , hatNum: req.body.hatNum}
    //hardCode For testing
    //let post = {firstname:'Update', lastname: 'Works', hatNum: 14}
    let sql =`UPDATE caps SET ? WHERE _id = ${req.params.id}`;
    // Run Query Statement
    let query = db.query(sql,post, (err,result)=>{
        if (err){
            throw err;
        }
        res.send(result)
    })
})

//DELETE 
app.get('/removeCap/:id', (req,res)=>{
    //console.log(`I AM IN SERVER deleteCap--> `+ id)
   // DELETE sql statement
    let sql =`DELETE FROM caps  WHERE _id = ${req.params.id}`;
    // Run Query Statement
    let query = db.query(sql, (err,result)=>{
        if (err){
            throw err;
        }
        res.send(result)
    })
})


//server Lstions
app.listen(8485, () =>{
    console.log("This NEW SERVER is running on PORT: 8485")
})