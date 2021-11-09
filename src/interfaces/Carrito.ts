import Producto from "./Producto";
import * as PedidosServices from "../services/PedidosServices";
import Usuario from "./Usuario";
import swal from "sweetalert";
import ListaProductos from "./ListaProductos";
class Carrito {
  listaProductos: ListaProductos[] = [];

  constructor() {
    this.listaProductos = [];
  }

  private verificarRepetido = (producto: Producto): boolean => {
    for (let i = 0; i < this.listaProductos.length; i++) {
      if (this.listaProductos[i].id_producto === producto.id_producto) return true;
    }
    return false;
  };

  agregarProducto = (producto: Producto) => {
    if (this.verificarRepetido(producto)) return swal({ title: "Ups!", text: "El producto ya está en el carrito", icon: "warning" });
    const listaProducto: ListaProductos = {
      cantidad_lista_producto: 1,
      id_producto: producto.id_producto,
      precio: producto.precio,
      url_foto_producto: producto.url_foto_producto,
      nombre_producto: producto.nombre_producto,
    };
    this.listaProductos.push(listaProducto);
    return swal({ title: "¡Producto Agregado!", text: "El producto agregado al carrito", icon: "success" });
  };

  eliminarProducto = (producto: ListaProductos) => this.listaProductos.splice(this.listaProductos.indexOf(producto), 1);

  modificarCantidad = (producto: ListaProductos, cantidad: number) => {
    this.listaProductos[this.listaProductos.indexOf(producto)].cantidad_lista_producto = cantidad;
  };

  vaciarCarrito = () => (this.listaProductos = []);

  enviarDatos = async (usuario: Usuario) => {
    if (this.listaProductos.length === 0) return swal({ title: "Ups!", text: "El carrito está vacío", icon: "warning" });
    const pedido = {
      listaProductos: this.listaProductos,
      usuario: usuario,
      fecha: new Date(),
    };
    return await PedidosServices.crearPedido(pedido);
  };
}

export default new Carrito();
