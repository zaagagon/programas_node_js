const express = require("express");
const os = require('os')

const IP = os.networkInterfaces().en1[1].address

const app = express();

const port = 3000;

app.get('/', (req, res) => {
    res.send('hola mi server en express')
})

app.listen(port, () => {
    console.log(`http://${IP}:${port}/`)
});