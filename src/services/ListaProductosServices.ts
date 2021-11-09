import axios from "axios";
import { API } from "../config/config";
const api = `${API}/api/v0/lista-producto`;

export const getAllByPedidoId = async (idPedido?: number) => {
  return await axios.get(`${api}/${idPedido}`);
};

export const getCount = async (idPedido: number) => {
  return await axios.get(`${api}/${idPedido}`);
};

export const crearPedido = async (formData: FormData) => {
  return await axios.post(`${api}`, formData);
};

export const getPedidoById = async (id: string) => {
  return await axios.get(`${api}/${id}`);
};

export const actualizarPedido = async (id: number) => {
  return await axios.put(`${api}/${id}`);
};

export const eliminarPedido = async (id: string | undefined) => {
  return await axios.delete(`${api}/${id}`);
};
