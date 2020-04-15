const express = require('express')
const app = express()

const movies =[
    {id:1, title: 'Blues Brothers', genre:'Comedy' },
    {id:2, title: 'Animal House', genre:'Comedy' },
    {id:3, title: 'The Shining', genre:'Horror' },
    {id:4, title: 'Die Hard', genre:'Action'}
]
const actors = [
    {id:1, firstName: 'John', lastName:'Belushi', gender:'male'},
    {id:2, firstName: 'Dan', lastName:'Akroyd', gender:'male'},
    {id:3, firstName: 'Jack', lastName:'Nicholson', gender:'male'},
    {id:4, firstName: 'Shelly', lastName:'duvall', gender:'female'},
    {id:5, firstName: 'Bruce', lastName:'Willis', gender:'male'}
]
const directors =[
    {id:1, firstName: 'John', lastName:'Landis', gender:'male'},
    {id:2, firstName: 'Stanley', lastName:'Kubrick', gender:'male'},
    {id:3, firstName: 'Mike', lastName:'Flanagon', gender:'male'},
    {id:4, firstName: 'John', lastName:'McTierman', gender:'male'},
]


app.get('/movies',(req,res)=>{
    res.send(movies)
})

app.get('/actors', (req,res)=>{
    res.send(actors)
})

app.get('/directors',(req,res)=>{
    res.send(directors)
})


//listen (port, Call back)
app.listen(8686,()=>{
    console.log("Dean server running on port 8686")
})