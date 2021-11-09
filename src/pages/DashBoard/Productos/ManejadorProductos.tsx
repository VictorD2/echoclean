import React, { useEffect, useRef, useState } from "react";
import swal from "sweetalert";
import Producto from "../../../interfaces/Producto";
import * as ProductoServices from "../../../services/ProductosServices";

const initialStateProducto: Producto = {
  id_producto: 0,
  nombre_producto: "",
  precio: 0,
  cantidad_producto: 0,
  url_foto_producto: "",
  foto_producto: [new File([""], "filename")],
};
interface Props {
  trigguer: number;
  setTrigguer: (trigguer: number) => void;
  productoModal: Producto;
  setProductoModal: (producto: Producto) => void;
}

const ManejadorProductos = (props: Props) => {
  const [producto, setProducto] = useState<Producto>(initialStateProducto);
  const refButton = useRef<null | HTMLButtonElement>();
  const refInput = useRef<HTMLInputElement | null>();
  useEffect(() => {
    setProducto(props.productoModal);
    return () => {
      setProducto(initialStateProducto);
    };
  }, [props.productoModal]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProducto({ ...producto, [e.target.name]: e.target.value });
  };
  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) setProducto({ ...producto, [e.target.name]: e.target.files });
  };
  const borrarInputFile = () => {
    if (refInput.current) refInput.current.value = "";
  };
  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("nombre_producto", producto.nombre_producto);
    formData.append("cantidad_producto", producto.cantidad_producto + "");
    formData.append("precio", producto.precio + "");
    if (producto.foto_producto) formData.append("photo", producto.foto_producto[0]);

    if (producto.id_producto === 0) {
      const res = await ProductoServices.crearProducto(formData);
      if (res.data.success) {
        borrarInputFile();
        props.setProductoModal(initialStateProducto);
        if (refButton.current) refButton.current.click();
        props.setTrigguer(props.trigguer + 1);
        return swal({ title: "¡Hecho!", text: res.data.success, icon: "success" });
      }
      if (res.data.error) return swal({ title: "Ups!", text: res.data.error, icon: "error" });
      return;
    }
    
    const res = await ProductoServices.actualizarProducto(producto.id_producto+"",formData);
    if (res.data.success) {
      borrarInputFile();
      props.setProductoModal(initialStateProducto);
      if (refButton.current) refButton.current.click();
      props.setTrigguer(props.trigguer + 1);
      return swal({ title: "¡Hecho!", text: res.data.success, icon: "success" });
    }
    if (res.data.error) return swal({ title: "Ups!", text: res.data.error, icon: "error" });
    return;
  };

  return (
    <div className="modal fade" id="crearProducto" aria-hidden="true" aria-labelledby="crearProducto" tabIndex={-1}>
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          {producto.id_producto === 0 ? (
            <>
              <div className="modal-header boton-primario">
                <h5 className="modal-title" id="staticBackdropLabel">
                  <i className="fas fa-plus me-2"></i>
                  Crear Producto
                </h5>
                <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close" />
              </div>
            </>
          ) : (
            <>
              <div className="modal-header btn-warning">
                <h5 className="modal-title text-dark" id="staticBackdropLabel">
                  <i className="fas fa-edit me-2"></i>
                  Editar Producto
                </h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
              </div>
            </>
          )}

          <form onSubmit={handleFormSubmit}>
            <div className="modal-body">
              <div className="row">
                <div className="col-sm-12 mb-3">
                  <label className="form-label" htmlFor="nombre_producto">
                    Nombre del producto
                  </label>
                  <input value={producto.nombre_producto} onChange={handleChange} type="text" name="nombre_producto" className="form-control" id="nombre_producto" />
                </div>
                <div className="col-sm-12 mb-3">
                  <label className="form-label" htmlFor="precio_producto">
                    Precio del producto
                  </label>
                  <input value={producto.precio} onChange={handleChange} type="text" name="precio" className="form-control" id="precio_producto" />
                </div>
                <div className="col-sm-12 mb-3">
                  <label className="form-label" htmlFor="cantidad_producto">
                    Cantidad del producto
                  </label>
                  <input value={producto.cantidad_producto} onChange={handleChange} type="text" name="cantidad_producto" className="form-control" id="cantidad_producto" />
                </div>
                <div className="col-sm-12 mb-3">
                  <label className="form-label" htmlFor="foto">
                    Foto del producto
                  </label>
                  {producto.id_producto === 0 ? (
                    <>
                      <input ref={(node) => (refInput.current = node)} onChange={handleFile} required type="file" name="foto_producto" className="form-control" id="foto" />
                    </>
                  ) : (
                    <>
                      <input ref={(node) => (refInput.current = node)} onChange={handleFile} type="file" name="foto_producto" className="form-control" id="foto" />
                    </>
                  )}
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button ref={(node) => (refButton.current = node)} type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                Cerrar
              </button>
              {producto.id_producto === 0 ? (
                <>
                  <button type="submit" className="btn boton-primario">
                    <i className="fas fa-plus me-2"></i>
                    Crear Producto
                  </button>
                </>
              ) : (
                <>
                  <button type="submit" className="btn btn-warning">
                    <i className="fas fa-edit me-2"></i>
                    Editar Producto
                  </button>
                </>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ManejadorProductos;
