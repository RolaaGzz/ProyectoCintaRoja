import React from 'react';
import './header.css'
import iconoRestaurante from "./iconorestaurante.jpg"
import iconoBar from "./iconobar.png"
import iconoPostres from "./iconopostre.png"
import iconoCafe from "./iconocafe.png"

function Categorias(){
  return( 
<div>
    <section className="categorias mt-5">
    <h2 className="text-center">Explora lo que prefieras</h2>
    <p className='text-center'>¿Donde se te antoja comer hoy?</p>
    <div className="container-fluid mt-5">
        <div className="row">
            <div className="col-6 col-md-3 text-center categoria">
                <img src={iconoRestaurante} className='img-fluid iconos'/>   
                <h3 className= 'mt-2'>Restaurantes</h3>
            </div>

            <div className="col-6 col-md-3 text-center categoria">
                <img src={iconoBar} className='img-fluid iconos'/>   
                <h3 className= 'mt-2'>Bares y pubs</h3>
            </div>

            <div className="col-6 col-md-3 text-center categoria">
                <img src={iconoPostres} className='img-fluid iconos'/>   
                <h3 className='mt-2'>Postres</h3>
            </div>

            <div className="col-6 col-md-3 text-center categoria">
                <img src={iconoCafe} className='img-fluid iconos'/>   
                <h3 className= 'mt-2'>Café y té</h3>
            </div>
        </div>
    </div>
</section>
</div> 
)
}

export default Categorias