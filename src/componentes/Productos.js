import React, { useEffect } from "react";
import { Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import { obtenerProductos } from "../actions/productoAction";
import MostrarProducto from "./MostrarProducto";

export default function Productos() {
  const dispatch = useDispatch();

  useEffect(() => {
    const cargarProductos = () => dispatch(obtenerProductos());
    cargarProductos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const productos = useSelector((state) => state.productos.productos);
  const error = useSelector((state) => state.productos.error);
  const cargando = useSelector((state) => state.productos.loading);

  return (
    <Fragment>
      <h2 className="text-center my-5">Listado de Productos</h2>
      {error ? (
        <p className="font-weight-bold alert alert-danger text-center mt-4">
          Hubo un error
        </p>
      ) : null}

      {cargando ? <p className="text-center">Cargando....</p> : null}

      <table className="table table-striped">
        <thead className="bg-primary table-dark">
          <tr>
            <th scope="col">Nombre</th>
            <th scope="col">Precio</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {productos.lenth === 0
            ? "No hay productos "
            : productos.map((producto) => (
                <MostrarProducto key={producto.id} producto={producto} />
              ))}
        </tbody>
      </table>
    </Fragment>
  );
}
