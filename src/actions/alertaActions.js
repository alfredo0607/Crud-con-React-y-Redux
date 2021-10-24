import { MOSTRAR_ALERTA_ERROR, OCULTAR_ALERTA_ERROR } from "../types";

export function mostrarError(alerta) {
  return (Dispatch) => {
    Dispatch({ type: MOSTRAR_ALERTA_ERROR, payload: alerta });
  };
}

export function ocultarError() {
  return (Dispatch) => {
    Dispatch({ type: OCULTAR_ALERTA_ERROR });
  };
}
