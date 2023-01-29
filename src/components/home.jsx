import React from 'react'
import Navegacion from './navbar';

import '../styles/home.css';
import {ScrollContainer, ScrollPage, Animator} from 'react-scroll-motion';
// funcion Alerta para las ventanas en reformas...
import {Alerta, InObserver} from './functions';
import i1 from '../img/image-1.jpg'


const Home = () => {
  InObserver();

  return (
    <>
    <Navegacion className='prueba1' id='color'></Navegacion>
    <div className='pagina-principal' id='pagina-principal'>
      <div id='alerta'></div>
      
      <div id='cuerpo'>
        
        <img src={i1} id='i1' alt='sopsue' className='caja' />
        <p>Un texto es una composición de signos codificados en un sistema de escritura que forma una unidad de sentido. También es una composición de caracteres imprimibles generados por un algoritmo de cifrado que, aunque no tienen sentido para cualquier persona, sí puede ser descifrado por su destinatario originalUn texto es una composición de signos codificados en un sistema de escritura que forma una unidad de sentido. También es una composición de caracteres imprimibles generados por un algoritmo de cifrado que, aunque no tienen sentido para cualquier persona, sí puede ser descifrado por su destinatario originalUn texto es una composición de signos codificados en un sistema de escritura que forma una unidad de sentido. También es una composición de caracteres imprimibles generados por un algoritmo de cifrado que, aunque no tienen sentido para cualquier persona, sí puede ser descifrado por su destinatario originalUn texto es una composición de signos codificados en un sistema de escritura que forma una unidad de sentido. También es una composición de caracteres imprimibles generados por un algoritmo de cifrado que, aunque no tienen sentido para cualquier persona, sí puede ser descifrado por su destinatario originalUn texto es una composición de signos codificados en un sistema de escritura que forma una unidad de sentido. También es una composición de caracteres imprimibles generados por un algoritmo de cifrado que, aunque no tienen sentido para cualquier persona, sí puede ser descifrado por su destinatario original</p>
        <img src={i1} id='i2' alt='sopsue2' className='caja' />
      </div>
    </div>
    </>
  )
}

export default Home;
