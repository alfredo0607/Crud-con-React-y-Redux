import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { mostrarError, ocultarError } from "../actions/alertaActions";
import { crearNuevoProductoAction } from "../actions/productoAction";

export default function NuevoProducto({ history }) {
  const dispatch = useDispatch();

  const agregarProducto = (producto) =>
    dispatch(crearNuevoProductoAction(producto));

  const [nombre, setnombre] = useState("");

  const [precio, setprecio] = useState(0);

  const enviarDatos = (e) => {
    e.preventDefault();

    if (nombre.trim() === "" || precio <= 0) {
      const alerta = {
        msg: "Ambos campos son obligatorios",
        classes: "alert alert-danger text-center text-uppercase p3",
      };
      dispatch(mostrarError(alerta));
      return;
    }
    dispatch(ocultarError());

    agregarProducto({ nombre, precio });
    history.push("/");
  };

  const alerta = useSelector((state) => state.alerta.alerta);
  return (
    <div className="row justify-content-center">
      <div className="col-md-8">
        <div className="card">
          <div className="card-body">
            <h2 className="text-center mb-4 font-weight-bold">
              Agregar Nuevo Producto
            </h2>
            {alerta ? <p className={alerta.classes}> {alerta.msg} </p> : null}
            <form onSubmit={enviarDatos}>
              <div className="form-group">
                <label>Nombre Producto</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nombre Producto"
                  name="nombre"
                  value={nombre}
                  onChange={(e) => setnombre(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label>Precio Producto</label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Precio Producto"
                  name="precio"
                  value={precio}
                  onChange={(e) => setprecio(Number(e.target.value))}
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
              >
                Agregar
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
