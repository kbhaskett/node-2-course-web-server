const express = require('express');
const hbs = require('hbs');

var app = express();

app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.send({
        name: 'Kevin',
        likes: ['Golf', 'Basketball']
    });
    console.log(__dirname);
});

app.get('/help', (req, res) => {
    res.send('<H1>This is the Help Page.</H1>');
});

app.get('/about', (req, res) => {
    res.render('about.hbs');
});

app.get('/bad', (req, res) => {
    res.send("Bad things happened.")
});

app.listen(3000);
