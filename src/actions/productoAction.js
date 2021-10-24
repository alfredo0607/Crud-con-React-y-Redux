import clienteAxios from "../config/axios";
import {
  AGREGAR_PRODUCTO,
  AGREGAR_PRODUCTO_ERROR,
  AGREGAR_PRODUCTO_EXITO,
  EDITAR_PRODUCTO,
  EDITAR_PRODUCTO_ERROR,
  EDITAR_PRODUCTO_EXITO,
  EDITAR_PRODUCTO_OBTENER,
  ELIMINAR_PRODUCTO,
  ELIMINAR_PRODUCTO_ERROR,
  ELIMINAR_PRODUCTO_EXITO,
  OBTENER_PRODUCTO,
  OBTENER_PRODUCTO_ERROR,
  OBTENER_PRODUCTO_EXITO,
} from "../types";

export function crearNuevoProductoAction(producto) {
  return async (Dispatch) => {
    Dispatch({ type: AGREGAR_PRODUCTO, payload: true });
    try {
      await clienteAxios.post("/productos", producto);
      Dispatch({ type: AGREGAR_PRODUCTO_EXITO, payload: producto });
    } catch (error) {
      console.log(error);
      Dispatch({ type: AGREGAR_PRODUCTO_ERROR, payload: true });
    }
  };
}
export function obtenerProductos() {
  return async (Dispatch) => {
    Dispatch({ type: OBTENER_PRODUCTO, payload: true });
    try {
      const consulta = await clienteAxios.get("/productos");

      Dispatch({ type: OBTENER_PRODUCTO_EXITO, payload: consulta.data });
    } catch (error) {
      console.log(error);
      Dispatch({ type: OBTENER_PRODUCTO_ERROR, payload: true });
    }
  };
}

export function eliminarProducto(id) {
  return async (Dispatch) => {
    Dispatch({ type: ELIMINAR_PRODUCTO, payload: id });
    try {
      await clienteAxios.delete(`/productos/${id}`);
      Dispatch({ type: ELIMINAR_PRODUCTO_EXITO });
    } catch (error) {
      console.log(error);
      Dispatch({ type: ELIMINAR_PRODUCTO_ERROR, payload: true });
    }
  };
}

export function obtenerProductoEditar(producto) {
  return (Dispatch) => {
    Dispatch({ type: EDITAR_PRODUCTO_OBTENER, payload: producto });
  };
}

export function editarProducto(producto) {
  return async (Dispatch) => {
    Dispatch({ type: EDITAR_PRODUCTO });
    try {
      await clienteAxios.put(`/productos/${producto.id}`, producto);
      Dispatch({ type: EDITAR_PRODUCTO_EXITO, payload: producto });
    } catch (error) {
      Dispatch({ type: EDITAR_PRODUCTO_ERROR, payload: true });
    }
  };
}
