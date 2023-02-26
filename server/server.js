const express = require('express');
const morgan = require('morgan');

const app = express();
app.use(morgan('dev'));               // Logs all http requests to console to help development
app.use(express.static('./public'));  // Making thumbnails folder static
const PORT = 8080;

const types = require('./data/types.json');
const pokedex = require('./data/pokedex.json');
const pokedexByType = {};

// Populate pokedexByType object on server start for easier access to data and more performant
pokedex.forEach(pokemon => {
  pokemon.type.forEach(type => {
    if (pokedexByType[type] === undefined) pokedexByType[type] = [];
    pokedexByType[type].push(pokemon);
  });
});

// Sends all of types.json to populate drop-down menu
app.get('/types', (req, res) => {
  res.send(types);
});

// Sends all pokemon of a given type
app.get('/types/:type', (req, res) => {
  const { type } = req.params;
  res.send(pokedexByType[type]);
});

// Sends 10 pokemon based on given type/page number, and total pages of that type
app.get('/types/:type/:page', (req, res) => {
  const { type, page } = req.params;

  const pageNum = parseInt(page);
  const start = (pageNum - 1) * 10;
  const end = pageNum * 10;

  const tenPokemon = pokedexByType[type].slice(start, end);
  const totalPages = Math.ceil(pokedexByType[type].length / 10);

  res.send({ tenPokemon, totalPages });
});

app.listen(PORT, () => console.log(`Server started. Listening on port ${PORT}`));