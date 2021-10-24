import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editarProducto } from "../actions/productoAction";
import { useHistory } from "react-router-dom";

export default function EditarProducto() {
  const dispatch = useDispatch();
  const history = useHistory();

  const [producto, setproducto] = useState({
    nombre: "",
    precio: "",
  });

  const produtoeditar = useSelector((state) => state.productos.productoeditar);

  useEffect(() => {
    setproducto(produtoeditar);
  }, [produtoeditar]);

  const tomarDatos = (e) => {
    setproducto({
      ...producto,
      [e.target.name]: e.target.value,
    });
  };

  const { nombre, precio } = producto;

  const enviarDatos = (e) => {
    e.preventDefault();

    dispatch(editarProducto(producto));

    history.push("/");
  };

  return (
    <div className="row justify-content-center">
      <div className="col-md-8">
        <div className="card">
          <div className="card-body">
            <h2 className="text-center mb-4 font-weight-bold">
              Editar Producto
            </h2>

            <form onSubmit={enviarDatos}>
              <div className="form-group">
                <label>Nombre Producto</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nombre Producto"
                  name="nombre"
                  value={nombre}
                  onChange={tomarDatos}
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
                  onChange={tomarDatos}
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
              >
                Guardar Cambios
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
