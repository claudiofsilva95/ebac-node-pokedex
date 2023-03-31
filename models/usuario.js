const { Schema } = require('mongoose');

const Usuario = new Schema({
    nome: {
        type: String,
        required: true,
        min: 4
    },
    email: {
        type: String,
        required: true,
        min: 4,
        unique: true,
        validade: {
            validator: function(v) {
                return v.match('@');
            },
            message: props => `${props.value} não é um email válido`
        }
    },
    senha: {
        type: String,
        required: true
    }, 
});


module.exports = Usuario;