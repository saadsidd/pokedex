const express = require('express');
const morgan = require('morgan');

const app = express();
const PORT = 8080;
const types = require('./data/types.json');
const pokedex = require('./data/pokedex.json');

// Logs all http requests to console to help development
app.use(morgan('dev'));
// Making thumbnails folder static
app.use(express.static('./public'));


// Filter pokedex.json by matching type and return sliced 10 results
const getPokemonByTypeAndTotalPages = (type, page) => {
  const pageNum = parseInt(page);
  const start = (pageNum - 1) * 10;
  const end = pageNum * 10;

  const filtered = pokedex.filter(pokemon => pokemon.type.includes(type));
  const tenPokemon = filtered.slice(start, end);
  const totalPages = Math.ceil(filtered.length / 10);
  return {tenPokemon, totalPages};
}

// Sends all of types.json to populate drop-down menu
app.get('/types', (req, res) => {
  res.send(types);
});

// Sends filtered array of pokemon objects based on given type and page number
app.get('/types/:type/:page', (req, res) => {
  const { type, page } = req.params;
  const results = getPokemonByTypeAndTotalPages(type, page);
  res.send(results);
});

app.listen(PORT, () => console.log(`Server started. Listening on port ${PORT}`));