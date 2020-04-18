const mongoose = require('mongoose');
const Locales = require('./models/Locales');

const URL_MONGO = 'mongodb+srv://usuario:usuario123@cintaroja-ltoaw.gcp.mongodb.net/test?retryWrites=true&w=majority'
mongoose.connect(URL_MONGO, {useNewUrlParser: true}, (err) => {
    if (!err) console.log('Conexion exitosa');
    else console.log(err);
});

module.exports = Locales;