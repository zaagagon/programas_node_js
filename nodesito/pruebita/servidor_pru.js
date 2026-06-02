
const express = require('express');
const app = express();
app.get('/',(req,res)=>
    res.send("hola practicando express con node js"));
app.listen(4004);
console.log("servidor corriendo el puert 4004");
