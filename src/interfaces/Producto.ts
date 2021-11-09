export default interface Producto {
  id_producto?: number;
  nombre_producto: string;
  precio: number;
  cantidad_producto: number;
  url_foto_producto: string;
  foto_producto?: File[];
}
