const express = require('express');
const morgan = require('morgan');

const app = express();
app.use(morgan('dev'));
const PORT = 8080;

const types = require('./data/types.json');
// pokedex-test contains only 10 results
const pokedex = require('./data/pokedex-test.json');

app.get('/types', (req, res) => {
  res.send(types);
});

app.listen(PORT, () => console.log(`Server started. Listening on port ${PORT}`));