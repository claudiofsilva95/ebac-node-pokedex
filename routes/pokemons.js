const exppress = require('express');

const { Pokemon } = require('../models')
const router = exppress.router();

router.get('/', (res) => {
    Pokemon.find().then(pokemons => {
        res.render('paginas/pokemons/index', {
            pokemons,
        });
    });
});

module.express = router;