const express = require('express')
const mysql = require('mysql')
const app = express();

//create MySQL DB string
const db = mysql.createConnection({
    host:'localhost',
    user: 'dbconnect',
    password: '',
   database:'SQL_Test_DB'
})

db.connect((err)=>{
    if(err){
        throw err;
    }
    console.log("Established Connection to MySQL DB")
})

//create DB
app.get('/createdb', (req,res)=>{
    let sql ="CREATE DATABASE SQL_Test_DB";
    // lets run sql Command
    db.query(sql, (err,result)=>{
        if (err){
            throw err;
        }
        console.log(result)
        res.send("DB Created Successfully!")
    })
})
//create a table
app.get('/createTable', (req,res)=>{
    let sql ="CREATE TABLE testing(ID INT AUTO_INCREMENT, title varChar(100), message varChar(100), PRIMARY KEY(ID))";
    // lets run sql Command
    db.query(sql, (err,result)=>{
        if (err){
            throw err;
        }
        console.log(result)
        res.send("Table Created Successfully!")
    })
})
//Insert Table First
app.get('/addTest1', (req,res)=>{
    let post = {title:'First Post', message: 'First post of table'}
    let sql ="INSERT INTO testing SET ?";
    // lets run sql Command
    let query = db.query(sql,post, (err,result)=>{
        if (err){
            throw err;
        }
        console.log(result)
        res.send("add stuff to table Created Successfully!")
    })
})
//Insert Table Second
app.get('/addTest2', (req,res)=>{
    let post = {title:'Second Post', message: 'Second post of table'}
    let sql ="INSERT INTO testing SET ?";
    // lets run sql Command
    let query = db.query(sql,post, (err,result)=>{
        if (err){
            throw err;
        }
        console.log(result)
        res.send("add stuff to table Created Successfully!")
    })
})
//SELECT Statement
app.get('/gettestings', (req,res)=>{
   // let post = {title:'Second Post', message: 'Second post of table'}
    let sql ="SELECT * FROM testing";
    // lets run sql Command
    let query = db.query(sql, (err,result)=>{
        if (err){
            throw err;
        }
        console.log(result)
        res.send("Select statement ran Successfully!")
    })
})
//SELECT specific row form table...LIKE GET ONE
app.get('/gettesting/:id', (req,res)=>{
    // usign back tick or literals becasue of param passing
    let sql =`SELECT * FROM testing WHERE ID = ${req.params.id}`;
    // lets run sql Command
    let query = db.query(sql, (err,result)=>{
        if (err){
            throw err;
        }
        console.log(result)
        res.send("Select statement with WHERE ran Successfully!")
    })
})
//UPDATE STatment
app.get('/updatetesting/:id', (req,res)=>{
    let newTitle =' Changed back'
    // usign back tick or literals becasue of param passing
    let sql =`UPDATE testing SET title ='${newTitle}' WHERE ID = ${req.params.id}`;
    // lets run sql Command
    let query = db.query(sql, (err,result)=>{
        if (err){
            throw err;
        }
        console.log(result)
        res.send("Update Statement ran Successfully!")
    })
})
//DELETE STatment
app.get('/deletetesting/:id', (req,res)=>{
    
    // usign back tick or literals becasue of param passing
    let sql =`DELETE FROM testing  WHERE ID = ${req.params.id}`;
    // lets run sql Command
    let query = db.query(sql, (err,result)=>{
        if (err){
            throw err;
        }
        console.log(result)
        res.send("DELETE Statement ran Successfully!")
    })
})

app.listen('3535', ()=>{
    console.log("Local Web Server on port 3535 Intitialized")
})