import React from "react";


function Cuadro_1(){
    return(
        <div className='contenedorTexto'>
            <img classname='contenedorImagen' src={require('../imagenes/imagen1.jpg')} alt='imagen1'/>
            <h5 className="contenedorTitulo">Un gato inteligente dice</h5>
            <p className="contenedorParrafo">Bombardeen Talca</p>
            <button className="boton">Ver Más....</button>
        </div>
);
}

export default Cuadro_1;