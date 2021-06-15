import React, { Fragment, useState } from "react";
import {Label, Select} from '../components/StyleComponents'

const useMoneda = (label, stateInicial, opciones) => {
  const [state, actualizarState] = useState(stateInicial);

  const Seleccionar = () => {
    return(
        <Fragment>
            <Label>{label}</Label>
            <Select
                onChange={e => actualizarState(e.target.value)}
                value={state}
            >
                <option value="">SELECCIONE</option>
                {   //Recuerda dar el return por implicito xdxdxdxdxdxdxdxdx
                    opciones.map((opcion) => (
                        <option key={opcion.codigo} value={opcion.codigo}>{opcion.nombre}</option>
                    ))
                }
            </Select>
        </Fragment>
    )
  };

  return [state, Seleccionar, actualizarState];
}

export default useMoneda;
