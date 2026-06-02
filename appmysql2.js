const express = require('express');
const mysql = require('mysql2');
const app = express()
const port = 3007

//configuracion servidor base datos
const db = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'123456789',
    database:'prueba4'
});

//conexion base datos
db.connect((err)=>{
    if(err){
    console.error('no conecta',err.message);
    return;
    }
    console.log('servidor mysql okis');
    
});

app.get('/', (req, res) => res.send('Hello Mundito!'))

//ruta mysql
app.get('/usuarios', (req, res) => {

    db.query('select * FROM personas',(err,result)=>{

    res.json(result);

   });
})
app.listen(port, () => console.log(`Ejemplo app listening on port ${port}!`))