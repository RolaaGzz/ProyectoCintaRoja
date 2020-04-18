import React from 'react';
import './header.css'
import imagenprueba from './fondo2.jpeg'


function Cards (props){
    
    return(
<div>
    <section className='clases mt-5 py-5'> 
        
        <div className="container mt-5">
            <div className="card">
                <div className="row">
                    <div className="col-md-4">
                        <img src={props.imagen} className="img-fluid"/>
                    </div>
                    <div className="col-md-8">
                  
                        <h3 className='card-title mt-2'>{props.nombre}</h3> 
                        <span>
                            
                            {props.calificacion} Opiniones
                        </span>
                        <span className='ml-5 badge badge-secondary'>
                           {props.giro}
                        </span>
                        <p className='card-subtitle mt-2'>
                            <img className='iconocard' src='https://imageog.flaticon.com/icons/png/512/32/32371.png?size=1200x630f&pad=10,10,10,10&ext=png&bg=FFFFFFFF'></img>    
                            {props.comentario}
                        </p>
                        
                        <p className='card-subtitle mt-3'>
                        <img className='iconocard' src='https://i.pinimg.com/474x/9f/36/09/9f3609f7eca8226f9e82da99ce8e7ef3.jpg'></img>
                            {props.celular}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}  
    </section>     
</div>    
    )
}

export default Cards;