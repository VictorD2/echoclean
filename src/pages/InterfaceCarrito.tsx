/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../partials/Footer";
import Navbar from "../partials/Navbar";
import carrito from "../interfaces/Carrito";
import ManejadorCarritoItem from "./ManejadorCarritoItem";
import TablaProductos from "../components/TablaProductos";
import { useUsuario } from "../context-user/UsuarioProvider";
import swal from "sweetalert";

const InterfaceCarrito = () => {
  const { usuario } = useUsuario();
  const [listaProductos, setListaProductos] = useState(carrito.listaProductos);
  const [trigguer, setTrigguer] = useState<number>(0);
  
  useEffect(() => {
    setListaProductos(carrito.listaProductos);
    return () => {
      setListaProductos([]);
    };
  }, [trigguer]);

  const enviarPedido = async () => {
    const res = await carrito.enviarDatos(usuario);
    if (res.data.success) {
      carrito.vaciarCarrito();
      setTrigguer(trigguer + 1);
      return swal({ title: "Pedido Realizado!", text: "El pedido se ha realizado correctamente", icon: "success" });
    }
  };

  return (
    <>
      <Navbar />
      <div className="container show" style={{ padding: "5rem 3rem" }}>
        <div className="row ">
          <div className="col-12 col-sm-6 col-md-6 col-lg-6">
            <h4 className="title-normal border-bottom border-2 border-success mb-3">Productos</h4>
            <div className="overflow-scroll px-3" style={{ maxHeight: "530px", minHeight: "530px" }}>
              {listaProductos.length === 0 ? (
                <>
                  <div className="w-100 h-100 d-flex justify-content-center" style={{ maxHeight: "510px", minHeight: "510px" }}>
                    <div className="align-self-center my-auto text-center">
                      <i className="fas fa-egg fs-1 my-auto"></i>
                      <p className="m-0 mt-2">No hay productos en el carrito</p>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  {listaProductos.map((listaProducto) => {
                    return <ManejadorCarritoItem trigguer={trigguer} setTrigguer={setTrigguer} listaProducto={listaProducto} key={listaProducto.id_producto} />;
                  })}
                </>
              )}
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-6 col-lg-6">
            <h4 className="title-normal border-bottom border-2 border-success mb-3">Resumen</h4>
            <TablaProductos listaProductos={listaProductos} />
          </div>
          <div className="d-flex flex-column flex-lg-row col-12 col-sm-6 col-lg-6 mt-3 justify-content-between">
            <Link to="/">
              <button className="btn btn-secondary mt-3 mt-lg-0">
                <i className="fas fa-chevron-circle-left"></i> Seguir Comprando
              </button>
            </Link>
            {carrito.listaProductos.length === 0 ? (
              <></>
            ) : (
              <>
                <button
                  onClick={() => {
                    enviarPedido();
                  }}
                  className="btn boton-primario mt-3 mt-lg-0"
                >
                  Continuar <i className="fas fa-chevron-circle-right"></i>
                </button>
              </>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default InterfaceCarrito;
