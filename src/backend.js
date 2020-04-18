const express = require('express');

const Locales = require('./backendindex');

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/' , (req,res) => {
    res.send({ mensaje: 'Hola desde express'});
});

app.post('/locales', (req, res) => {
   
    const local = {
        nombre: req.body.nombre,
        celular: req.body.celular,
        giro: req.body.giro,
        calificacion: req.body.calificacion,
        comentario: req.body.comentario,
        codigopostal: req.body.codigopostal,
        direccion: req.body.direccion,
        imagen: req.body.imagen
    };
    
 
    const newLocal = Locales(local);
    
   newLocal.save((err,local) => {
      if (err) res.status(400).send(err)
        else res.send(local);
        res.setHeader('Access-Control-Allow-Origin', '*')
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE,OPTIONS');
        res.setHeader('Access-Control-Allow-Headers', 'Authorization');
        
});
    
});

app.get('/locales', (req, res) => {
    Locales.find().exec()
    .then((respuesta) => {
        res.send(respuesta);
    })
    .catch(() => {
        res.status(400).send(err);
    });
    res.setHeader('Access-Control-Allow-Origin', '*')
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE,OPTIONS');
        res.setHeader('Access-Control-Allow-Headers', 'Authorization');
    
});

//http://localhost:3000/local/5e8e87fac3e2a15d48bd205b
app.get('/locales/:id', (req, res) => {
    const idLocal = req.params.id;
    Locales.findOne({_id: idLocal}).exec()
    .then((result) => {
        res.send(result);
    }).catch((err) => {
        res.status(400).send(err);
    })
    res.setHeader('Access-Control-Allow-Origin', '*')
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE,OPTIONS');
        res.setHeader('Access-Control-Allow-Headers', 'Authorization');
});

app.patch('/locales/:id',(req, res) => {
        const idLocal = req.params.id
        const keysToUpdate = req.body //Que le voy a modificar
        //findOneAndUpdate(Aquien voy a modificar, que voy a modificar, devolver el update)
        Locales.findOneAndUpdate({ _id: idLocal }, {$set: keysToUpdate}, {new: true}).exec()
            .then((result) => {
                res.send(result)
            }).catch((err) => {
                res.status(400).send(err)
            });
    });
    
    //Borrar
app.delete('/locales/:id', (req, res) => {
        const idLocal = req.params.id
        Locales.findOneAndDelete({ _id:idLocal }).exec()
            .then(() => {
                res.send({ message: 'Local Borrado' });
            }).catch((err) => {
                res.status(400).send(err)
            });
    })
   

app.listen(3001, () => {
    console.log('Server on');
})
