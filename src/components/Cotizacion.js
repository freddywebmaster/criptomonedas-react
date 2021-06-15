import React from 'react';
import styled from '@emotion/styled';


const DivCotizacion = styled.div`
    color: #fff;
    font-family: Arial, Helvetica, sans-serif;
    text-align: center;
    background-color: #66a2fe;
    border-radius: 1rem;
`;


const ParrafoCotizacion = styled.p`
    font-size: 18px;
    span{
        font-weight:bold;
    }
`;

const PrecioCotizacion = styled.p`
    font-size: 30px;
    span{
        font-weight:bold;
    }
`;
const Cotizacion = ({resultado}) => {
    if(Object.keys(resultado).length === 0) return null;
    return ( 
        <DivCotizacion>
            <PrecioCotizacion>El precio es: <span>{resultado.PRICE}</span></PrecioCotizacion>
            <ParrafoCotizacion>Precio Mas alto del dia: <span>{resultado.HIGHDAY}</span></ParrafoCotizacion>
            <ParrafoCotizacion>Precio Mas Bajo del dia: <span>{resultado.LOWDAY}</span></ParrafoCotizacion>
            <ParrafoCotizacion>Cambio ultimas 24H: <span>{resultado.CHANGEPCT24HOUR}</span></ParrafoCotizacion>
            <ParrafoCotizacion>Ultima Actualizacion: <span>{resultado.LASTUPDATE}</span></ParrafoCotizacion>
        </DivCotizacion>
     );
}
 
export default Cotizacion;