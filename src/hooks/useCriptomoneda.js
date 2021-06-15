import React, { Fragment, useState } from "react";
import {Label, Select} from '../components/StyleComponents'

const useCriptomoneda = (label, stateInicial, opciones) => {
  const [state, actualizarState] = useState(stateInicial);

  const SelectCripto = () => {
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
                        <option key={opcion.CoinInfo.Id} value={opcion.CoinInfo.Name}>{opcion.CoinInfo.FullName} ({opcion.CoinInfo.Name})</option>
                    ))
                }
            </Select>
        </Fragment>
    )
  };

  return [state, SelectCripto, actualizarState];
}

export default useCriptomoneda;
