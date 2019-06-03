const express = require('express');

const app = express();

app.get('', (req, res) => {
    res.send('<h1> Hello express!</h1>')
})

app.get('/help', (req, res) => {
    res.send('Help page')
})

app.get('/about', (req, res) => {
    res.send('About page')
})


app.get('/weather', (req, res) => {
    res.send({
        location: "Toronto",
        temp: 23
    })
})


app.listen(3000, () => {
    console.log('Running...')
})