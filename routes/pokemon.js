const express = require('express');


const { Pokemon } = require('../models');
const router = express.Router();

router('/', (res) => {
  Pokemon.find().then( pokemons => {
    res.render('paginas/pokemon/index', {
      pokemons
    });
  });
});



module.exports = router;