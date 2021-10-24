import { MOSTRAR_ALERTA_ERROR, OCULTAR_ALERTA_ERROR } from "../types";

/* eslint-disable import/no-anonymous-default-export */
const initialState = {
  alerta: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case MOSTRAR_ALERTA_ERROR:
      return {
        ...state,
        alerta: action.payload,
      };

    case OCULTAR_ALERTA_ERROR:
      return {
        ...state,
        alerta: null,
      };

    default:
      return state;
  }
}
