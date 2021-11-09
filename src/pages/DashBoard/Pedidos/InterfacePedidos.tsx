import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import HeaderDash from "../HeaderDash";
import Aside from "../Aside";
import FooterDash from "../FooterDash";
import Buscador from "../../../components/Buscador";
import Pedido from "../../../interfaces/Pedido";
import ManejadorListaPedidos from "./ManejadorListaPedidos";
import ScrollReveal from "scrollreveal";

const initialStatePedido: Pedido = {
  estado: 0,
  fecha_pedido: "",
  id_usuario: 0,
};
const InterfacePedidos = () => {
  const [filtro, setFiltro] = useState<string>("");
  const [pedidoModal, setPedidoModal] = useState<Pedido>(initialStatePedido);
  useEffect(() => {
    const config = {
      duration: 500,
      delay: 100,
      easing: "ease",
    };
    ScrollReveal().reveal(".show", config);
    return () => {};
  }, []);
  return (
    <>
      <HeaderDash />
      <Aside />
      <div className="content-wrapper show" style={{ minHeight: 643 }}>
        {/* Content Header (Page header) */}
        <div className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1 className="m-0 title-normal">
                  <i className="nav-icon fas fa-th me-3" />
                  Pedidos
                </h1>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item">
                    <Link className="link-normal" to="/">
                      Inicio
                    </Link>
                  </li>
                  <li className="breadcrumb-item">
                    <Link className="link-normal" to="/Dashboard">
                      Dashboard
                    </Link>
                  </li>
                  <li className="breadcrumb-item active">Pedidos</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
        {/* /.content-header */}

        {/* Main content */}
        <section className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-4 col-md-6"></div>
              <div className="col-lg-3 col-md-3 ms-auto">
                <Buscador placeholder="Buscar Pedidos" funcion={setFiltro} />
              </div>
            </div>
            <div className="row mt-5">
              <ManejadorListaPedidos pedidoModal={pedidoModal} setPedidoModal={setPedidoModal} filtro={filtro} />
            </div>
          </div>
        </section>
      </div>
      <FooterDash />
    </>
  );
};

export default InterfacePedidos;
