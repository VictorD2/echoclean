import React from "react";
import ListaProductos from "../../../interfaces/ListaProductos";
interface Props {
  listaProducto: ListaProductos;
}
const ListaProductoItem = (props: Props) => {
  return (
    <div className="card">
      <div className="card-header boton-primario">{props.listaProducto.nombre_producto} </div>
      <div className="card-body">
        <div className="row">
          <div className="col-sm-6 col-lg-6 col-12">
            <img className="img-fluid" src={props.listaProducto.url_foto_producto} alt={props.listaProducto.nombre_producto} />
          </div>
          <div className="col-sm-6 col-lg-6 col-12">
            <div className="d-flex flex-column">
              <p>Cantidad Comprada: {props.listaProducto.cantidad_lista_producto}</p>
              <p>Precio del producto: S/. {props.listaProducto.precio}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="card-footer" style={{ background: "#212529" }}>
        <p className="text-white w-100 text-end m-0">Total: S/. {props.listaProducto.precio * props.listaProducto.cantidad_lista_producto}</p>
      </div>
    </div>
  );
};

export default ListaProductoItem;
