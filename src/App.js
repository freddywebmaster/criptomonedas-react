import React, { useState, useEffect } from 'react';
import Formulario from './components/Formulario';
import {Contenedor,Imagen, Heading} from './components/StyleComponents';
import ilustracion from './images/back.svg';
import axios from 'axios';
import Cotizacion from './components/Cotizacion';
import Spinner from './components/Spinner';


function App() {
  const [monedaSeleccionada, GuardarmonedaSeleccionada] = useState('');
  const [criptoSeleccionada, GuardarCriptoSeleccionada] = useState('');
  const [resultado, guardarResultado] = useState({});
  const [cargando, GuardarCargando] = useState(false);
  useEffect(() => {
    if(monedaSeleccionada==='') return;

      const consultarValor = async () => {
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptoSeleccionada}&tsyms=${monedaSeleccionada}`;
        const resultado = await axios.get(url);
        guardarResultado(resultado.data.DISPLAY[criptoSeleccionada][monedaSeleccionada]);
      }
      consultarValor();
    
  },[monedaSeleccionada,criptoSeleccionada])

  return (
    <Contenedor>
      <div>
        <Imagen src={ilustracion} alt="back" />
      </div>
      <div>
        <Heading>Cotiza CriptoMonedas Al Instante</Heading>
        <Formulario
          GuardarmonedaSeleccionada={GuardarmonedaSeleccionada}
          GuardarCriptoSeleccionada={GuardarCriptoSeleccionada}
          GuardarCargando={GuardarCargando}
        />
        {cargando?<Spinner/>:<Cotizacion resultado={resultado} />}
      </div>
    </Contenedor>
  );
}

export default App;
