import React from 'react';
import logo from './logoprueba.png'
import './header.css'
import Categorias from './Categorias'
import Cards from './Cards'
import Formulario from './Formulario'

function Header (){
    return(
        <div>
    <header className='header pt-4'>
      <div className='container'>
        <div className='row justify-content-between'>
          <div className='col-md-4'>
            <img className='logo' src={logo}></img>
          </div>
          <div className='col-md-4'></div>
          <nav className='nav d-flex justify-content-end flex-column flex-md-row'>
              <a href="#" className="nav-link">Inicio</a>
              <a href='#' className="nav-link">Registrar tu negocio </a>
              <a href='#' className="btn btn-outline-light text-light">Acceder</a>
          </nav>
        </div>
    </div>
    <div className="container">
        <div className="row justify-content-center buscador align-items-center">
            <div className="col-md-8 text-light text-center">
                <h1 className="display-4 titulo">Saber que comer, a solo un click</h1>
                <p>Opiniones de los mejores restaurantes de Monterrey</p>

                <form action="#" className="busqueda mt-5">
                    <div className="input-group">
                        <input type="text" className="form-control" placeholder="¿Que te gustaria comer?" required/>

                        <div className="input-group-append">
                            <input type="submit" value="Buscar" className="btn btn-success" value='Buscar'/>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
    </header>
    <Categorias/>
  
  </div>
)
}

export default Header;