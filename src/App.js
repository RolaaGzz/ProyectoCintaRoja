import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import logo from './logo.svg';
import './App.css';
import Header from './Header'
import Categorias from './Categorias'
import Axios from 'axios';
import React, { useEffect, useState} from 'react';
import Cards from './Cards'



function App() {

  const [locales, setLocal] = useState([]);

  useEffect(() => {
    Axios.get('http://localhost:3001/locales')
    .then((result) => {
      console.log(result.data);
      setLocal(result.data)
    }).catch((err) => {
      console.log(err);
    })
  }, []);

  const render = () => {
    if (locales.length == 0){
      return <h1>Cargando...</h1>
    } else{
      const listCardLocales = locales.map((locales) =>{
        return <Cards nombre={locales.nombre}
                      celular={locales.celular}
                      giro={locales.giro}
                      calificacion={locales.calificacion}
                      comentario={locales.comentario}
                      codigopostal={locales.codigopostal}
                      direccion={locales.direccion}
                      imagen={locales.imagen}/>
          });
      return listCardLocales
    }
  }

  return (
    <div>
    <Header/>
    {render()}
    </div>
  )
}

export default App;
