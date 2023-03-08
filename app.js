const express = require('express');
const path = require('path');
const expressLayouts = require('express-ejs-layouts');

const { connect } = require('./models');

const pokemonsRouter = require('./routes/pokemons');
const batalhaRouter = require('./routes/batalha');


const app = express();

// configurando ejs
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(expressLayouts);

// Configurando arquivos staticos
app.use(express.static(path.join(__dirname, 'public')));

// declarando rotas

app.use('/pokemons', pokemonsRouter);
app.use('/batalha', batalhaRouter);

const porta = 3000;
app.listen(porta, () => {
    connect();
    console.log(`Servidor ouvindo na porta ${porta}`)
});