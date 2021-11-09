import React, { useState } from "react";
import ListaProductos from "../interfaces/ListaProductos";
import carrito from "../interfaces/Carrito";
import foto from "../img/image-asset.png";
interface Props {
  listaProducto: ListaProductos;
  trigguer: number;
  setTrigguer: (trigguer: number) => void;
}
const ManejadorCarritoItem = (props: Props) => {
  const [cantidad, setCantidad] = useState<number>(props.listaProducto.cantidad_lista_producto);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (parseInt(e.target.value) <= 0) return;
    setCantidad(parseInt(e.target.value));
    carrito.modificarCantidad(props.listaProducto, parseInt(e.target.value));
    props.setTrigguer(props.trigguer + 1);
  };

  const eliminarProducto = () => {
    carrito.eliminarProducto(props.listaProducto);
    props.setTrigguer(props.trigguer + 1);
  };

  return (
    <div className="card">
      <div className="card-header boton-primario d-flex justify-content-end">
        <button
          onClick={() => {
            eliminarProducto();
          }}
          type="button"
          className="btn-close"
        />
      </div>
      <div className="card-body">
        <div className="row">
          <div className="col-12 col-sm-6 col-md-6 col-lg-6">
            {/* <img src={props.listaProductos.url_foto_producto} alt={props.listaProductos.nombre_producto} /> */}
            <img src={props.listaProducto.url_foto_producto} className="img-fluid" alt={props.listaProducto.nombre_producto} />
          </div>
          <div className="col-12 col-sm-6 col-md-6 col-lg-6">
            <div className="d-flex flex-column">
              <p>{props.listaProducto.nombre_producto}</p>
              <p>S/. {props.listaProducto.precio}</p>
              <input onChange={handleChange} type="number" name="cantidad" className="form-control" value={cantidad} />
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

export default ManejadorCarritoItem;
