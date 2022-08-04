//DEPENDENCIES SETUP
const express = require('express');
const cors = require('cors');
const animesController = require('./controllers/animesController');

//CONFIGURATION SETUP
const app = express();
//const app = require('express')();

//MIDDLEWARE SETUP
app.use(cors());
app.use(express.json());
app.use('/animes', animesController);

//ROUTES SETUP
app.get('/', (req, res) => {
  res.send('Welcome to our AnimeReview');
});

//HANDLE 404 Error Route
app.get('*', (req, res) => {
  res.status(404).send('These are not the Animes you are looking for!');
});

module.exports = app;
