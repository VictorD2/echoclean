import React from "react";
import { HiOutlineShoppingCart } from "react-icons/hi";
import Producto from "../interfaces/Producto";
import carrito from "../interfaces/Carrito";
interface Props {
  producto: Producto;
}
const CardProducto = (props: Props) => {

  const agregarProducto = () => {
    carrito.agregarProducto(props.producto);
  };

  return (
    <div className="card w-25">
      <div className="card-body">
        <img className="img-fluid" style={{ width: "100%" }} src={props.producto.url_foto_producto} alt="producto" />
        <p className="mb-2 mt-4 d-block text-center fw-bold fs-3">S/. {props.producto.precio}</p>
        <span className="d-block text-center">{props.producto.nombre_producto}</span>
      </div>
      <div className="card-footer">
        <div className="d-grid gap-1">
          <button onClick={() => agregarProducto()} className="btn boton-primario fw-bold">
            Agregar
            <HiOutlineShoppingCart className="fs-5 ms-2" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardProducto;
