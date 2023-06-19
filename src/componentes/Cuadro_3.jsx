import React from "react";


function Cuadro_3(){
    return(
        <div className='contenedorTexto'>
            <img classname='contenedorImagen' src={require('../imagenes/imagen3.jpg')} alt='imagen3'/>
            <h5 className="contenedorTitulo">gato traje</h5>
            <p className="contenedorParrafo">gato traje</p>
            <button className="boton">Ver Más....</button>
        </div>
);
}

export default Cuadro_3;