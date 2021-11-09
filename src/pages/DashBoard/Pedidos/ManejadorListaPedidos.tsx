/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import swal from "sweetalert";
import Pedido from "../../../interfaces/Pedido";
import * as PedidosServices from "../../../services/PedidosServices";
import ManejadorPedidos from "./ManejadorPedidos";

interface Props {
  pedidoModal: Pedido;
  setPedidoModal: (pedidoModal: Pedido) => void;
  filtro: string;
}
const ManejadorListaPedidos = (props: Props) => {
  const [pedidos, setPedidos] = useState<Pedido[]>([]);
  const [loadPedidos, setLoadPedidos] = useState<boolean>(false);

  const [cantidad, setCantidad] = useState<number>(0);
  const [cantidadPaginas, setCantidadPaginas] = useState<number>(0);
  const [page, setPage] = useState<number>(1);
  const [trigguer, setTrigguer] = useState<number>(0);

  useEffect(() => {
    cargarPedidos();
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
    const res = await PedidosServices.getCount(props.filtro);
    setCantidad(res.data);
    setCantidadPaginas(Math.ceil(res.data / 12));
  };
  const cargarPedidos = async () => {
    const res = await PedidosServices.getAll(page, props.filtro);
    res.data.sort((a: any, b: any) => {
      return a.estado - b.estado;
    });
    setPedidos(res.data);
    setLoadPedidos(true);
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
    setPedidos([]);
    setLoadPedidos(false);
  };
  const actualizarEstado = async (id?: number) => {
    const res = await PedidosServices.actualizarPedido(id);
    if (res.data.success) {
      setTrigguer(trigguer + 1);
      return swal({ title: "¡Hecho!", text: res.data.success, icon: "success" });
    }
    if (res.data.error) return swal({ title: "Ups!", text: res.data.error, icon: "error" });
  };
  return (
    <div className="table-responsive">
      <table className="table table-dark table-striped table-hover">
        <caption>Cantidad de pedidos: {cantidad}</caption>
        <thead>
          <tr>
            <th>#</th>
            <th>Nombre del Cliente</th>
            <th>Correo del Cliente</th>
            <th>Fecha del Pedido</th>
            <th className="text-center">Ver Detalles</th>
            <th className="text-center">Culminar</th>
          </tr>
        </thead>
        <tbody>
          {!loadPedidos ? (
            <>
              <tr>
                <th>Cargando datos...</th>
              </tr>
            </>
          ) : (
            <>
              {pedidos.length === 0 ? (
                <>
                  <tr>
                    <th>No hay pedidos registrados...</th>
                  </tr>
                </>
              ) : (
                <>
                  {pedidos.map((pedido, i) => {
                    return (
                      <tr key={pedido.id_pedido}>
                        <td>{i + 1}</td>
                        <td>
                          {pedido.nombre_usuario} {pedido.apellido_usuario}
                        </td>
                        <td>{pedido.correo_usuario}</td>
                        <td>{pedido.fecha_pedido}</td>
                        <td className="text-center">
                          <button onClick={() => props.setPedidoModal(pedido)} data-bs-toggle="modal" data-bs-target="#verPedido" className="btn boton-primario">
                            <i className="fas fa-eye"></i>
                          </button>
                        </td>
                        <td className="text-center">
                          <div className="form-check form-switch">
                            {pedido.estado === 1 ? (
                              <>
                                <input
                                  onChange={(e) => {
                                    actualizarEstado(pedido.id_pedido);
                                  }}
                                  className="form-check-input"
                                  type="checkbox"
                                  checked
                                />
                              </>
                            ) : (
                              <>
                                <input
                                  onChange={(e) => {
                                    actualizarEstado(pedido.id_pedido);
                                  }}
                                  className="form-check-input"
                                  type="checkbox"
                                />
                              </>
                            )}
                          </div>
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
      <ManejadorPedidos trigguer={trigguer} setTrigguer={setTrigguer} pedidoModal={props.pedidoModal} setPedidoModal={props.setPedidoModal} />
    </div>
  );
};

export default ManejadorListaPedidos;
