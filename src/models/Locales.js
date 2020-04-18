const mongoose = require('mongoose')

const schemaLocal = mongoose.Schema({
    nombre: {
        type: String
    },
    celular: {
        type: String
    },
    giro: {
        type: String,
        enum: ['Restaurante', 'Bar', 'Postres', 'Cafe']
    },
    calificacion: {
        type: Number
    },
    comentario: {
        type: [String]
    },
    codigopostal:{
        type: Number
    },
    direccion:{
        type: String
    },
    imagen:{
        type: String
    }
});

const Locales = mongoose.model('Locales',schemaLocal);

module.exports = Locales;