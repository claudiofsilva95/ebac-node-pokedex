const express = require('express');
const { connect } = require('./models');

const pokemonRouter = require('./routes/pokemon');

const app = express();


//declarando rotas
app.use('/pokemons', pokemonRouter);

app.listen(3000, () => {
  connect();

  console.log(`Servidor rodando na porta ${porta}`);
})