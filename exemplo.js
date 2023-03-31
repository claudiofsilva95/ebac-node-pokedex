const jwt = require('jsonwebtoken');

const primeiroJwt = jwt.sign(
    {
        nome: 'Claudio',
        sobrenome: 'Silva',
        exp: Math.floor(Date.now() / 1000) + 2
    },
    "chave-super-secreta"

)

console.log("🚀 ~ file: exemplo.js:9 ~ primeiroJwt:", primeiroJwt);

setTimeout(() => {
    console.log(jwt.verify(primeiroJwt, "chave-super-secreta"));
}, 1000);




