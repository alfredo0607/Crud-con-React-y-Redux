import React from "react";
import { useDispatch } from "react-redux";
import {
  eliminarProducto,
  obtenerProductoEditar,
} from "../actions/productoAction";
import { useHistory } from "react-router-dom";
import Swal from "sweetalert2";

export default function MostrarProducto({ producto }) {
  const { nombre, precio, id } = producto;

  const dispatch = useDispatch();
  const history = useHistory(); // sirve para redireccionar a una pagina

  const redireccionarEdicion = (producto) => {
    dispatch(obtenerProductoEditar(producto));
    history.push(`/productos/editar/${producto.id}`);
  };

  const eliminar = (id) => {
    Swal.fire({
      title: "¿Estas seguro?",
      text: "Un producto que se elimina no se puede recuperar",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, eliminar!!",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.value) {
        // pasarlo al action
        dispatch(eliminarProducto(id));
      }
    });
  };

  return (
    <tr>
      <td>{nombre}</td>
      <td>
        <span className="font-weight-bold"> ${precio}</span>
      </td>
      <td className="acciones">
        <button
          type="button"
          className="btn btn-primary mr-2"
          onClick={() => redireccionarEdicion(producto)}
        >
          Editar
        </button>
        <button
          type="button"
          className="btn btn-danger"
          onClick={() => eliminar(id)}
        >
          Eliminar
        </button>
      </td>
    </tr>
  );
}
