const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

app.get('', (req, res) => {
    res.send('<h1>Julia LOH</h1>')
});

app.get('/help', (req, res) => {
    res.send('Help page')
});

app.get('/about', (req, res) => {
    res.send('About page')
});


app.get('/weather', (req, res) => {
    res.send({
        location: "Toronto",
        temp: 23
    })
});


app.listen(port, () => {
    console.log('Running on port ' + port)
});