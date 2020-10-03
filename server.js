const express = require('express');
const app = express();
const port = 3000;

app.use('/', express.static('public'));

var fs = require('fs');

let rawdata = fs.readFileSync('budget-data.json');
let myBudget = JSON.parse(rawdata);
console.log(myBudget);

app.get('/hello' , (req, res) => {
    res.send('Hello World ');
});

app.get('/budget' , (req, res) => {
    res.json(myBudget);
});

app.listen(port, () => {
    console.log('Example app listening at http://localhost:${port}');
});