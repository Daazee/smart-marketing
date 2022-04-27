
const express = require('express');
const path = require('path');
const { engine } = require('express-edge');

const bodyParser = require('body-parser');
const PORT = process.env.PORT || 5000

const app = new express();

app.use(express.static('public'));
app.use(engine);

app.set('views', `${__dirname}/views`);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', async (req, res) => {
    res.render('index');
})

app.listen(PORT, (req, res) => {
    console.log("App is listening on port " +   PORT);
})