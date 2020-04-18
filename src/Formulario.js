import React from 'react';
import {useState} from 'react';
import axios from 'axios';


function Formulario () {
    
    const [nombre,setNombre] = useState('');
    const [celular,setCelular] = useState('');
    const [giro,setGiro] = useState('');
    const [direccion,setDireccion] = useState('0');
    const [codigopostal,setCodigoPostal] = useState('M');
    const [imagen,setImagen] = useState('M');

    const onChangeInput = (event) =>{
        console.log(event.target.value);
        console.log(event.target.id);
        const id = event.target.id;
        switch (id) {
            case 'nombre':
                setNombre(event.target.value);
                break;
            case 'celular':
                setCelular(event.target.value);
                break;
            case 'giro':
                setGiro(event.target.value);
                break;
            case 'direccion':
                setDireccion(event.target.value);
                break;
            case 'gender':
                setCodigoPostal(event.target.value);
                break;
            case 'imagen':
                setImagen(event.target.value);    
            default:
                break;
        }
        
    }

const onSubmitHandler = (e) =>{
    e.preventDefault();
    console.log('Se mando la informacion');
    const body = {
        nombre: nombre,
        celular: celular,
        giro: giro,
        calificacion: 0,
        direccion: direccion,
        codigopostal: codigopostal,
        imagen: imagen
    }

    axios.post('http://localhost:3001/locales/', body)
    .then((result) => {
        console.log(result.data)
        alert('Ya se creo el local');
    }).catch((err) => {
        console.log(err.response.data);
        alert('No funciono');
    });
}
    return(
        <div className='modal'>
            <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header text-center">
        <form className='m-5' onSubmit={onSubmitHandler}>
            <div className='form-group'>
                <label>Nombre</label>
                <input type='text' className='form-control' id='nombre' onChange={onChangeInput} value={nombre}/>
            </div>

            <div className='form-group'>
                <label>Celular</label>
                <input type='text' className='form-control' id='celular' onChange={onChangeInput} value={celular}/>
            </div>

            <div className='form-group'>
                <label>Giro</label>
                <input type='text' className='form-control' id='giro' onChange={onChangeInput} value={giro}/>
            </div>

            <div className='form-group'>
                <label>Direccion</label>
                <input type='text' className='form-control' id='direccion' onChange={onChangeInput} value={direccion}/>
            </div>

            <div className='form-group'>
                <label>Codigo Postal</label>
                <input type='number' className='form-control' id='codigopostal' onChange={onChangeInput} value={codigopostal}/>
            </div>
            
            <div className='form-group'>
                <label>URL Imagen</label>
                <input type='text' className='form-control' id='codigopostal' onChange={onChangeInput} value={imagen}/>
            </div>

            <button type="submit">Publicar</button>

        </form>
        </div> 
    </div>
    </div>
    </div>
    )
}

export default Formulario;