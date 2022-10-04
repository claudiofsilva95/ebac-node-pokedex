const express = require('express');
const { connect } = require('./models');
const path = require('path');
const expressLayouts = require('express-ejs-layouts');

const pokemonRouter = require('./routes/pokemon');

const app = express();


// configurando ejs

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(expressLayouts);




//declarando rotas
app.use('/pokemons', pokemonRouter);


const porta = 3000
app.listen(porta, () => {
  connect();

  console.log(`Servidor rodando na porta ${porta}`);
})