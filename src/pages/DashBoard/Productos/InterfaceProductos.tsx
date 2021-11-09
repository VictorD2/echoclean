import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import HeaderDash from "../HeaderDash";
import Aside from "../Aside";
import FooterDash from "../FooterDash";
import ManejadorListaProductos from "./ManejadorListaProductos";
import Buscador from "../../../components/Buscador";
import Producto from "../../../interfaces/Producto";
import ScrollReveal from 'scrollreveal';
const initialStateProducto: Producto = {
  id_producto: 0,
  nombre_producto: "",
  precio: 0,
  cantidad_producto: 0,
  url_foto_producto: "",
  foto_producto: [new File([""], "filename")],
};
const ProductosDash = () => {
  const [filtro, setFiltro] = useState<string>("");
  const [productoModal, setProductoModal] = useState<Producto>(initialStateProducto);
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
                  <i className="nav-icon fas fa-egg me-3" />
                  Productos
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
                  <li className="breadcrumb-item active">Productos</li>
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
              <div className="col-lg-4 col-md-6">
                <button onClick={() => setProductoModal(initialStateProducto)} data-bs-toggle="modal" data-bs-target="#crearProducto" className="btn boton-primario">
                  <i className="fas fa-plus me-2"></i>
                  Agregar un producto
                </button>
              </div>
              <div className="col-lg-3 col-md-3 ms-auto">
                <Buscador placeholder="Buscar Productos" funcion={setFiltro} />
              </div>
            </div>
            <div className="row mt-5">
              <ManejadorListaProductos productoModal={productoModal} setProductoModal={setProductoModal} filtro={filtro} />
            </div>
          </div>
        </section>
      </div>
      <FooterDash />
    </>
  );
};

export default ProductosDash;
