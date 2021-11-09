import React from "react";
import ListaProductos from "../interfaces/ListaProductos";
interface Props {
  listaProductos: ListaProductos[];
}
const TablaProductos = (props: Props) => {
  return (
    <div className="table-responsive">
      <table className="table table-dark table-striped table-hover">
        <thead>
          <tr>
            <th>#</th>
            <th>Producto</th>
            <th>Precio</th>
            <th>Cantidad</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {props.listaProductos.map((producto, i) => {
            return (
              <tr key={producto.id_producto}>
                <td>{i + 1}</td>
                <td>{producto.nombre_producto}</td>
                <td>{producto.precio}</td>
                <td>{producto.cantidad_lista_producto}</td>
                <td>{producto.cantidad_lista_producto * producto.precio}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TablaProductos;
