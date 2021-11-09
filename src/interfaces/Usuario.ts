export default interface Usuario {
  id_usuario: number;
  name: string;
  surname: string;
  email: string;
  documentNumber: string;
  phone: string;
  birthday: string;
  id_tipo_documento?: number;
  documentType?: string;
  id_rango?: number;
  rango?: string;
  gender?: number;
  sexo?: string;
  authenticate?:boolean;
}
