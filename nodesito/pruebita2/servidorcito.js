const express = require ('express');

const app = express();

app.get('/',(req,res)=>res.send("dfdsf"));

app.listen(5001);

console.log("servidor pruebita2 funcionando ..");
