const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send("Levantando un servidor con Express")
});

app.listen(8000, () => console.log("Levantando un verdadero servidor"));