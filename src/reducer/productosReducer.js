/* eslint-disable import/no-anonymous-default-export */

import {
  AGREGAR_PRODUCTO,
  AGREGAR_PRODUCTO_ERROR,
  AGREGAR_PRODUCTO_EXITO,
  EDITAR_PRODUCTO_EXITO,
  EDITAR_PRODUCTO_OBTENER,
  ELIMINAR_PRODUCTO,
  ELIMINAR_PRODUCTO_ERROR,
  ELIMINAR_PRODUCTO_EXITO,
  OBTENER_PRODUCTO,
  OBTENER_PRODUCTO_ERROR,
  OBTENER_PRODUCTO_EXITO,
} from "../types";

//cada reducer tiene su propio state
const initialState = {
  productos: [],
  error: null,
  loading: null,
  productoeliminar: null,
  productoeditar: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case OBTENER_PRODUCTO:
    case AGREGAR_PRODUCTO:
      return {
        ...state,
        loading: action.payload,
      };
    case AGREGAR_PRODUCTO_EXITO:
      return {
        ...state,
        loading: false,
        productos: [...state.productos, action.payload],
      };

    case ELIMINAR_PRODUCTO_ERROR:
    case OBTENER_PRODUCTO_ERROR:
    case AGREGAR_PRODUCTO_ERROR:
      return {
        ...state,
        error: action.payload,
      };

    case OBTENER_PRODUCTO_EXITO:
      return {
        ...state,
        loading: false,
        error: false,
        productos: action.payload,
      };

    case ELIMINAR_PRODUCTO:
      return {
        ...state,
        productoeliminar: action.payload,
      };

    case ELIMINAR_PRODUCTO_EXITO:
      return {
        ...state,
        productos: state.productos.filter(
          (data) => data.id !== state.productoeliminar
        ),
        productoeliminar: null,
      };

    case EDITAR_PRODUCTO_OBTENER:
      return {
        ...state,
        productoeditar: action.payload,
      };

    case EDITAR_PRODUCTO_EXITO:
      return {
        ...state,
        productoeditar: null,
        productos: state.productos.map((producto) =>
          producto.id === action.payload.id
            ? producto = action.payload
            : producto
        ),
      };

    default:
      return state;
  }
}
