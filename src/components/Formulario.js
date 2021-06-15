import React, {useState,useEffect} from 'react';
import {BtnSubmit, ErrorStyle} from '../components/StyleComponents';
import useMoneda from '../hooks/useMoneda';
import useCripto from '../hooks/useCriptomoneda';
import axios from 'axios';

const Formulario = ({GuardarmonedaSeleccionada, GuardarCriptoSeleccionada, GuardarCargando}) => {
    const [listaCripto, ActualizarListaCripto] = useState([]);
    const [error, guardarError] = useState(false);

    const MONEDAS = [
        { codigo: 'USD', nombre: 'Dolar Estado Unidense'},
        { codigo: 'MXN', nombre: 'Peso Mexicano'},
        { codigo: 'EUR', nombre: 'Euro Europeo'},
        { codigo: 'GTQ', nombre: 'Quetzales Guatemala'}
    ];
    //HOOK DE MONEDAS
    const [state, Seleccionar] = useMoneda('Selecciona tu Moneda', '',MONEDAS);
    //HOOK DE CRIPTOMONEDAS
    const [criptomoneda, SelectCripto ] = useCripto('eligue tu criptomoneda', '',listaCripto);

    //lamar api
    useEffect(()=>{
        const consultarApi = async () =>{
            const url = 'https://min-api.cryptocompare.com/data/top/totalvolfull?limit=10&tsym=USD';
            const resultado = await axios.get(url);
            ActualizarListaCripto(resultado.data.Data);
        }
        consultarApi();
    },[]);
    //on submit
    const cotizarMoneda = e =>{
        e.preventDefault();
        if(state === '' | criptomoneda === ''){
            guardarError(true);
            return;
        }
        GuardarCargando(true);
        guardarError(false);

        GuardarmonedaSeleccionada(state);
        GuardarCriptoSeleccionada(criptomoneda);
        setTimeout(()=>{
            GuardarCargando(false);
            window.scroll({
                top: 1000,
                left: 0,
                behavior: 'smooth'
              });
        },2000)
    }

    return ( 
        <form onSubmit={cotizarMoneda}>
            {error ? <ErrorStyle>Seleciona todos los campos </ErrorStyle> : null}
            <Seleccionar/>
            <SelectCripto/>
            <BtnSubmit type="submit" value="Calcular"/>
        </form>
     );
}
 
export default Formulario;