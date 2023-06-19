import React from "react";


function Cuadro_2(){
    return(
        <div className='contenedorTexto'>
            <img classname='contenedorImagen' src={require('../imagenes/imagen2.jpg')} alt='imagen2'/>
            <h5 className="contenedorTitulo">gato abogado</h5>
            <p className="contenedorParrafo">gato abogado</p>
            <button className="boton">Ver Más....</button>
        </div>
);
}

export default Cuadro_2;