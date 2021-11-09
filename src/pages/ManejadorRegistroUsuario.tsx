import React, { useEffect, useState } from "react";
import axios from "axios";
import { API } from "../config/config";
import { useHistory } from "react-router-dom";
import swal from "sweetalert";
import auth from "../context-user/auth";
import Boton from "../components/Boton";
import { useUsuario } from "../context-user/UsuarioProvider";
import Navbar from "../partials/Navbar";
import Footer from "../partials/Footer";
import ScrollReveal from "scrollreveal";

const ManejadorRegistroUsuario = () => {
  const history = useHistory();
  const { setUsuario } = useUsuario();

  const initialState = {
    email: "",
    name: "",
    documentType: "1",
    phone: "",
    birthday: "",
    surname: "",
    documentNumber: "",
    password: "",
    gender: "1",
  };
  useEffect(() => {
    const config = {
      duration: 1000,
      delay: 150,
      easing: "ease",
    };
    ScrollReveal().reveal(".show", config);
    return () => {};
  }, []);
  const [regData, setRegData] = useState(initialState);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setRegData({ ...regData, [e.target.name]: e.target.value });
  };

  const createAccount = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await axios.post(`${API}/signup`, regData);
    if (res.data.success) {
      setUsuario(res.data.user);
      auth.sigIn();
      auth.setRango(res.data.user.id_rango);
      history.push("/");
    }
    if (res.data.error) return swal({ title: "Error", text: res.data.error, icon: "error" });
  };

  return (
    <>
      <Navbar />
      <div className="container show" style={{ padding: "5rem 3rem" }}>
        <h3 className="fw-bold fs-2">Crear una cuenta</h3>
        <p>Llena el siguiente formulario para crear tu cuenta</p>
        <form className="mt-4" onSubmit={createAccount}>
          <div className="row">
            <div className="col-md-3">
              <div className="mb-3">
                <label htmlFor="registrar-correo" className="form-label">
                  *Correo electrónico
                </label>
                <input onChange={handleChange} value={regData.email} type="email" name="email" id="registrar-correo" className="form-control" placeholder="Ejemplo: usuario@correo.com" />
              </div>
              <div className="mb-3">
                <label htmlFor="registrar-nombre" className="form-label">
                  *Nombre
                </label>
                <input onChange={handleChange} value={regData.name} type="text" name="name" id="registrar-nombre" className="form-control" />
              </div>
              <div className="mb-3">
                <label htmlFor="tipo-documento" className="form-label">
                  *Tipo de documento
                </label>
                <select onChange={handleChange} value={regData.documentType} className="form-select" name="documentType" id="tipo-documento">
                  <option value="1">DNI</option>
                  <option value="2">RUC</option>
                  <option value="3">CE</option>
                  <option value="4">PASS</option>
                </select>
              </div>
              <div className="mb-3">
                <label htmlFor="telefono" className="form-label">
                  *Teléfono
                </label>
                <input onChange={handleChange} value={regData.phone} type="text" name="phone" id="telefono" className="form-control" />
              </div>
              <div className="mb-3">
                <label htmlFor="fechaNacimiento" className="form-label">
                  Fecha de nacimiento (dd/mm/yyyy)
                </label>
                <input onChange={handleChange} value={regData.birthday} type="date" name="birthday" id="fechaNacimiento" className="form-control" />
              </div>
            </div>
            <div className="col-md-3 ms-lg-5">
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  *Contraseña
                </label>
                <input onChange={handleChange} value={regData.password} type="password" name="password" id="password" className="form-control" placeholder="Ingrese su contraseña" />
              </div>
              <div className="mb-3">
                <label htmlFor="apellido" className="form-label">
                  *Apellido
                </label>
                <input onChange={handleChange} value={regData.surname} type="text" name="surname" id="apellido" className="form-control" />
              </div>
              <div className="mb-3">
                <label htmlFor="numero-documento" className="form-label">
                  *Número de documento
                </label>
                <input onChange={handleChange} value={regData.documentNumber} type="text" name="documentNumber" id="numero-documento" className="form-control" />
              </div>
              <div className="mb-3">
                <label htmlFor="sexo" className="form-label">
                  Sexo
                </label>
                <select onChange={handleChange} value={regData.gender} className="form-select" name="gender" id="sexo">
                  <option value="1">Mujer</option>
                  <option value="2"> Hombre</option>
                </select>
              </div>
            </div>
          </div>

          <div className="mt-3 row">
            <div className="col-md-6">
              <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" id="accept-terms" />
                <label className="form-check-label" htmlFor="accept-terms">
                  <span style={{ fontSize: ".9rem" }}>He leído y acepto la Política de Privacidad y Términos y condiciones</span>
                </label>
              </div>
              <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" id="accept-data" />
                <label className="form-check-label" htmlFor="accept-data">
                  <span style={{ fontSize: ".9rem" }}>Acepto el uso de datos personales y quiero recibir ofertas especiales y recetas</span>
                </label>
              </div>
              <Boton className="btn boton-primario fw-bold" type="submit" btnName="Registrarme" style={{ width: "13rem" }} />
            </div>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default ManejadorRegistroUsuario;
