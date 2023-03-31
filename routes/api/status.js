const express = require('express');

const router = express.Router();

const midleware = (req, res, next) => {
    console.log("Tenho acesso a toda a req")

    res.status(401).send('Faça o Login')
   
}

router.get('/', (_req, res) => {
    console.log('Respondendo ao uruario')
    res.json({
        status: 'ok'
    });
});

module.exports = router;