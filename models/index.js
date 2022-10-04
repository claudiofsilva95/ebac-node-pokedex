const mongoose = require('mongoose');

const pokemonSchema = require('./pokemon');

const Pokemon = mongoose.model('Pokemon', pokemonSchema);

const connect = () => {
  mongoose.connect('mongodb://localhost:27017/pokedex');
}

module.exports = {
  connect,
  Pokemon,
}

