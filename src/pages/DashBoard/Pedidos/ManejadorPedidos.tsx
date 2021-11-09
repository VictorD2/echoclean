/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import ListaProductos from "../../../interfaces/ListaProductos";
import Pedido from "../../../interfaces/Pedido";
import * as ListaProductosServices from "../../../services/ListaProductosServices";
import ListaProductoItem from "./ListaProductoItem";
interface Props {
  trigguer: number;
  setTrigguer: (trigguer: number) => void;
  pedidoModal: Pedido;
  setPedidoModal: (pedido: Pedido) => void;
}
const initialStatePedido: Pedido = {
  estado: 0,
  fecha_pedido: "",
  id_usuario: 0,
};
const ManejadorPedidos = (props: Props) => {
  const [pedido, setProducto] = useState<Pedido>(initialStatePedido);
  const [listaProductos, setListaProductos] = useState<ListaProductos[]>([]);
  useEffect(() => {
    setProducto(props.pedidoModal);
    getListaProductos();
    return () => {
      setProducto(initialStatePedido);
    };
  }, [props.pedidoModal]);

  const getListaProductos = async () => {
    const res = await ListaProductosServices.getAllByPedidoId(props.pedidoModal.id_pedido);
    setListaProductos(res.data);
  };

  return (
    <div className="modal fade" id="verPedido" aria-hidden="true" aria-labelledby="verPedido" tabIndex={-1}>
      <div className="modal-dialog modal-xl">
        <div className="modal-content">
          <div className="modal-header boton-primario">
            <h5 className="modal-title" id="staticBackdropLabel">
              <i className="fas fa-eye me-2"></i>
              Detalles del Pedido
            </h5>
            <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close" />
          </div>

          <div className="modal-body">
            <div className="row">
              <div className="col-sm-6 overflow-scroll" style={{ maxHeight: "510px",minHeight: "510px"}}>
                {listaProductos.map((listaProducto) => {
                  return <ListaProductoItem key={listaProducto.id_lista_producto} listaProducto={listaProducto} />;
                })}
              </div>
              <div className="col-sm-6">
                <div className="w-100 d-flex flex-column p-2">
                  <p>
                    Nombre del Cliente: {pedido.nombre_usuario} {pedido.apellido_usuario}
                  </p>
                  <p>Correo del Cliente: {pedido.correo_usuario}</p>
                  <p>Fecha del pedido {pedido.fecha_pedido} </p>
                  <p>
                    Estado del pedido:
                    {pedido.estado === 1 ? (
                      <>
                        <i className="fas fa-check ms-2 text-success"></i>
                      </>
                    ) : (
                      <>
                        <i className="fas fa-sync ms-2 text-danger"></i>
                      </>
                    )}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
              Cerrar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManejadorPedidos;
