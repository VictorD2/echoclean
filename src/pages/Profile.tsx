// eslint-disable-next-line react-hooks/exhaustive-deps
import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import Boton from "../components/Boton";
import { useUsuario } from "../context-user/UsuarioProvider";
import Usuario from "../interfaces/Usuario";
import auth from "../context-user/auth";
import React from "react";
import { API } from "../config/config";
import axios from "axios";
import * as usuarioServices from "../services/UsuarioServices";
import swal from "sweetalert";
import Footer from "../partials/Footer";
import Navbar from "../partials/Navbar";

const initialState: Usuario = {
  id_usuario: 0,
  name: "",
  surname: "",
  email: "",
  documentNumber: "",
  phone: "",
  birthday: "",
  id_tipo_documento: 1,
  documentType: "",
  id_rango: 1,
  rango: "",
  gender: 1,
  sexo: "",
  authenticate: false,
};
const Profile = () => {
  // State
  const { setUsuario, usuario } = useUsuario();
  const [userData, setUserData] = useState<any>({
    birthday: "",
    documentNumber: "",
    documentType: "",
    email: "",
    gender: "",
    name: "",
    phone: "",
    surname: "",
  });

  // History
  const history = useHistory();

  // Destructuring User Profile Data
  const { birthday, documentNumber, documentType, email, gender, name, phone, surname } = userData;

  const getProfile = async () => {
    const res = await axios.get(`${API}/api/v0/usuario/whoami`);
    if (!res.data.user) return history.push("/");
    setUserData(res.data.user);
  };

  useEffect(() => {
    getProfile();
    return () => {};
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await usuarioServices.actualizarUsuario(usuario.id_usuario, userData);
    if (res.data.success) {
      setUsuario(res.data.user);
      return swal({ title: "¡Hecho!", text: res.data.success, icon: "success" });
    }
    if (res.data.error) return swal({ title: "Error", text: res.data.error, icon: "error" });
  };

  const logout = async () => {
    const res = await axios.get(`${API}/logout`);
    if (res.data.success) {
      history.push("/");
      setUsuario(initialState);
      auth.logOut();
      auth.setRango(1);
    }
  };

  return (
    <>
      <Navbar />
      <div className="container show" style={{ padding: "5rem 3rem" }}>
        <h3 className="fw-bold fs-2">Mis datos</h3>
        <form className="mt-4" onSubmit={handleFormSubmit}>
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="mb-3">
                <label htmlFor="registrar-nombre" className="form-label">
                  *Nombre
                </label>
                <input onChange={handleChange} type="text" name="name" value={name} id="registrar-nombre" className="form-control" />
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="mb-3">
                <label htmlFor="apellido" className="form-label">
                  *Apellido
                </label>
                <input onChange={handleChange} type="text" value={surname} name="surname" id="apellido" className="form-control" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="mb-3">
                <label htmlFor="tipo-documento" className="form-label">
                  *Tipo de documento
                </label>
                <select onChange={handleChange} value={documentType} className="form-select" name="documentType" id="tipo-documento">
                  <option value="1">DNI</option>
                  <option value="2">RUC</option>
                  <option value="3">CE</option>
                  <option value="4">PASS</option>
                </select>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="mb-3">
                <label htmlFor="numero-documento" className="form-label">
                  *Número de documento
                </label>
                <input onChange={handleChange} type="text" value={documentNumber} name="documentNumber" id="numero-documento" className="form-control" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="mb-3">
                <label htmlFor="registrar-correo" className="form-label">
                  *Correo electrónico
                </label>
                <input onChange={handleChange} type="email" value={email} name="email" id="registrar-correo" className="form-control" placeholder="Ejemplo: usuario@correo.com" />
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="mb-3">
                <label htmlFor="telefono" className="form-label">
                  *Teléfono
                </label>
                <input onChange={handleChange} value={phone} type="text" name="phone" id="telefono" className="form-control" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="mb-3">
                <label htmlFor="sexo" className="form-label">
                  Sexo
                </label>
                <select onChange={handleChange} className="form-select" value={gender} name="gender" id="sexo">
                  <option value="1">Mujer</option>
                  <option value="2">Hombre</option>
                </select>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="mb-3">
                <label htmlFor="fechaNacimiento" className="form-label">
                  Fecha de nacimiento (dd/mm/yyyy)
                </label>
                <input onChange={handleChange} type="date" value={birthday} name="birthday" id="fechaNacimiento" className="form-control" />
              </div>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-lg-4 col-md-6">
              <div className="mb-3">
                <Boton onClick={logout} className="btn btn-secondary fw-bold btn-size" type="button" btnName="Cerrar sesión" />
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="mb-3">
                <Boton className="btn boton-primario fw-bold btn-size" type="submit" btnName="Actualizar" />
              </div>
            </div>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default Profile;
