const express = require('express');
const app = express();
const port = 3000;

app.use('/', express.static('public'));

var fs = require('fs');

let rawdata = fs.readFileSync('budget-data.json');
let myBudget = JSON.parse(rawdata);
console.log(myBudget);


/*const budget = {
    myBudget: [
    {
        title: 'Eat out',
        budget: 25
    },
    {
        title:  'Rent',
        budget: 375
    },
    {
        title: 'Grocery',
        budget: 110
    },
    {
        title:  'Gas',
        budget: 50
    },
    {
        title:  'Utilities',
        budget: 75
    },
    {
        title:  'Wireless',
        budget: 65
    },
    {
        title:  'Misc',
        budget: 150
    },
]
}; */

app.get('/hello' , (req, res) => {
    res.send('Hello World ');
});

app.get('/budget' , (req, res) => {
    res.json(myBudget);
});

app.listen(port, () => {
    console.log('Example app listening at http://localhost:${port}');
});