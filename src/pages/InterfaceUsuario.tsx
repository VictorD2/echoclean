import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import Boton from "../components/Boton";
import Enlace from "../components/Enlace";
import { API } from "../config/config";
import axios from "axios";
import swal from "sweetalert";
import auth from "../context-user/auth";
import "sweetalert/dist/sweetalert.min.js";
import { useUsuario } from "../context-user/UsuarioProvider";
import Navbar from "../partials/Navbar";
import Footer from "../partials/Footer";

const InterfaceUsuario = () => {
  const history = useHistory();
  const { setUsuario } = useUsuario();
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  const Login = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await axios.post(`${API}/signin`, login);
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
        <div className="row">
          <div className="col-md-4">
            <h3 className="fw-bold fs-2">Iniciar Sesión</h3>
            <form className="mt-4" onSubmit={Login}>
              <div className="mb-3">
                <label htmlFor="email" className="form-label fw-bold">
                  Correo electrónico
                </label>
                <input onChange={handleChange} type="email" name="email" id="email" placeholder="Ejemplo: usuario@correo.com" className="form-control" />
              </div>
              <div className="mb-4">
                <label htmlFor="password" className="form-label fw-bold">
                  Contraseña
                </label>
                <input onChange={handleChange} type="password" name="password" id="password" placeholder="Ingrese su contraseña" className="form-control" />
              </div>
              <div className="mb-4">
                <Link to="/olvide-contrasena" className="link-normal fw-bold">
                  ¿Olvidaste contraseña?
                </Link>
              </div>
              <Boton className="btn boton-primario fw-bold" style={{ width: "13rem" }} type="submit" btnName="Iniciar sesión" />
            </form>
          </div>
          <div className="col-md-5 offset-lg-2 mt-5 mt-lg-0">
            <h3 className="fw-bold fs-2">¿Eres nuevo? Crea una cuenta</h3>
            <p>¿Aún no tienes una cuenta?</p>
            <Enlace className="btn boton-primario fw-bold" style={{ width: "13rem" }} role="button" url="/registrarme" linkName="Crear una cuenta" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default InterfaceUsuario;
