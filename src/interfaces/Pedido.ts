export default interface Pedido {
  id_pedido?: number;
  estado: number;
  fecha_pedido: string;
  id_usuario: number;
  nombre_usuario?: string;
  apellido_usuario?: string;
  correo_usuario?: string;
}
