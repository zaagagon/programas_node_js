const express = require('express')
const mysql=require('mysql2');

const app = express()
const port = 3009
//configuration database mysql
const db=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'123456789',
    database:'prueba4'
});

//ruta mysql
app.get('/mensaje',(req,res)=>{

});

app.get('/practicando',(req,res)=>{

    db.query('select * FROM personas',(err,result)=>{
        res.json(result);
    });
});


app.get('/consulta', (req, res) => {

    db.query('select * FROM personas',(err,result)=>{

    res.json(result);

   });
})

app.get('/', (req, res) => {

    db.query('select * FROM personas',(err,result)=>{

        res.json(result)
    });
})
















app.get('/', (req, res) => res.send('Hello Supermundo!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))