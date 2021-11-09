/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import Producto from "../../../interfaces/Producto";
import * as ProductoServices from "../../../services/ProductosServices";
import ManejadorProductos from "./ManejadorProductos";
interface Props {
  productoModal: Producto;
  setProductoModal: (producto: Producto) => void;
  filtro: string;
}

const ManejadorListaProductos = (props: Props) => {
  const [productos, setProductos] = useState<Producto[]>([]);
  const [loadProducts, setLoadProducts] = useState<boolean>(false);

  const [cantidad, setCantidad] = useState<number>(0);
  const [cantidadPaginas, setCantidadPaginas] = useState<number>(0);
  const [page, setPage] = useState<number>(1);
  const [trigguer, setTrigguer] = useState<number>(0);

  useEffect(() => {
    cargarProductos();
    return () => limpieza();
  }, [page, props.filtro, trigguer]);

  useEffect(() => {
    setPage(1);
    setCantidadPaginas(0);
    getCantidad();
    return () => {
      setCantidad(0);
      setCantidadPaginas(0);
      setPage(1);
    };
  }, [props.filtro, trigguer]);

  const getCantidad = async () => {
    const res = await ProductoServices.getCount(props.filtro);
    setCantidad(res.data);
    setCantidadPaginas(Math.ceil(res.data / 12));
  };
  const cargarProductos = async () => {
    const res = await ProductoServices.getAll(page, props.filtro);
    setProductos(res.data);
    setLoadProducts(true);
  };
  const paginaSiguiente = () => {
    if (page === cantidadPaginas) return;
    setPage(page + 1);
  };

  const paginaAnterior = () => {
    if (page === 1) return;
    setPage(page - 1);
  };

  const limpieza = () => {
    setProductos([]);
    setLoadProducts(false);
  };
  return (
    <div className="table-responsive show">
      <table className="table table-dark table-striped table-hover">
        <caption>Cantidad de productos: {cantidad}</caption>
        <thead>
          <tr>
            <th>#</th>
            <th>Nombre</th>
            <th>S/. Precio</th>
            <th>Cantidad</th>
            <th className="text-center col-2">
              <i className="fas fa-edit me-3"></i> Editar
            </th>
            <th className="text-center col-2">
              <i className="fas fa-times me-3"></i> Inhabilitar
            </th>
          </tr>
        </thead>
        <tbody>
          {!loadProducts ? (
            <>
              <tr>
                <th>Cargando datos...</th>
              </tr>
            </>
          ) : (
            <>
              {productos.length === 0 ? (
                <>
                  <tr>
                    <th>No hay productos registrados...</th>
                  </tr>
                </>
              ) : (
                <>
                  {productos.map((producto, i) => {
                    return (
                      <tr key={producto.id_producto}>
                        <th>{i + 1}</th>
                        <td>{producto.nombre_producto}</td>
                        <td>{producto.precio}</td>
                        <td>{producto.cantidad_producto}</td>
                        <td className="text-center">
                          <button onClick={() => props.setProductoModal(producto)} data-bs-toggle="modal" data-bs-target="#crearProducto" className="btn btn-warning">
                            <i className="fas fa-edit"></i>
                          </button>
                        </td>
                        <td className="text-center">
                          <button className="btn btn-secondary">
                            <i className="fas fa-times"></i>
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </>
              )}
            </>
          )}
        </tbody>
      </table>
      <div className="d-flex justify-content-between">
        {page === 1 ? (
          <></>
        ) : (
          <>
            <button
              onClick={() => {
                paginaAnterior();
              }}
              className="btn boton-primario"
            >
              <span aria-hidden="true">&laquo; Página Anterior</span>
            </button>
          </>
        )}
        {page === cantidadPaginas ? (
          <></>
        ) : (
          <>
            <button
              onClick={() => {
                paginaSiguiente();
              }}
              className="btn boton-primario ms-auto"
            >
              <span aria-hidden="true">Página Siguiente &raquo;</span>
            </button>
          </>
        )}
      </div>
      <ManejadorProductos trigguer={trigguer} setTrigguer={setTrigguer} productoModal={props.productoModal} setProductoModal={props.setProductoModal} />
    </div>
  );
};

export default ManejadorListaProductos;
