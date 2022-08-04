//DEPENDENCIES SETUP
const express = require('express');
const animes = express.Router();
//const favAnimes = require('../models/anime');
const db = require('../db/dbConfig');

const { getAllAnimes, getAnAnime } = require('../queries/animes');

//INDEX ROUTE (SHOWING A LIST OF AL ANIMES)
animes.get('/', async (req, res) => {
  const allAnimes = await getAllAnimes();
  //console.log('we have all animes here:', allAnimes);
  if (allAnimes) {
    res.json({ success: true, payload: allAnimes });
  } else {
    res
      .status(404)
      .json({ success: false, message: 'Oop! Something went wrong!' });
  }
});

//SHOW INDIVIDUAL ANIME
animes.get('/:id', async (req, res) => {
  console.log(req.params.id);
  //const anime = favAnimes[req.params.id];
  const { id } = req.params;
  const anime = await getAnAnime(id);
  if (anime) {
    res.status(200).json({ success: true, payload: anime });
  } else {
    res.status(404).send(`No such anime with id of ${id}`);
  }
});

//CREATE A NEW ROUTE BY USING POST
animes.post('/new', async (req, res) => {
  const newAnime = req.body;
  console.log(newAnime);

  const { name, release } = newAnime;

  //favAnimes.push(newAnime);

  const newAnimes = await db.any(
    'INSERT INTO anime (name, release) VALUES ($1, $2) RETURNING *',
    [name, release]
  );
  res.status(200).json({ success: true, payload: newAnimes });
});

module.exports = animes;
