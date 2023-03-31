require('dotenv').config();

const mongoose   = require('mongoose');
const bcrypt     = require('bcrypt');

const { connect, Pokemon, Usuario } = require('./models');


const populaBancoDeDados = async () => {
    connect();

    await Pokemon.create({
        id: 7,
        nome: 'squirtle',
        altura: 5,
        peso: 90,
        imagem: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png',
        ataques: 'torrent, rain-dish',
        estatisticas : {
            hp: 44,
            attack: 48,
            defense: 65,
            'special-attack': 50,
            'especial-defense': 64,
            speed: 43
        }
    });

    await Usuario.create({
        email: 'claudio@hotmail.com',
        nome: 'Claudio Silva',
        senha: await bcrypt.hash('123456', 10)
    })

    await mongoose.disconnect();

};

populaBancoDeDados();