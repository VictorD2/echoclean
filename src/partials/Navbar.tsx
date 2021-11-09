import React from "react";
import { Link, useHistory } from "react-router-dom";
import { FaUser, FaShoppingCart } from "react-icons/fa";
import { RiDashboardLine } from "react-icons/ri";
import Logo from "../img/logo (3).jpeg";
import { useUsuario } from "../context-user/UsuarioProvider";
import axios from "axios";
import { API } from "../config/config";
import Usuario from "../interfaces/Usuario";
import auth from "../context-user/auth";

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

const Navbar = () => {
  const history = useHistory();
  const logout = async () => {
    const res = await axios.get(`${API}/logout`);
    if (res.data.success) {
      setUsuario(initialState);
      auth.logOut();
      auth.setRango(1);
      history.push("/");
    }
  };

  const { usuario, loadUser, setUsuario } = useUsuario();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark" style={{ background: "#363636" }}>
      <div className="container px-lg-5 py-3">
        <Link to="/" style={{ width: "10.5rem" }}>
          <img className="img-fluid" src={Logo} alt="La Calera" />
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse d-flex flex-column ps-3" id="navbarNav">
          <ul className="navbar-nav text-center w-100">
            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle text-uppercase" to="/Distrito" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Distrito
              </Link>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <Link className="dropdown-item" to="/Distrito">
                    Distrito
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/Geografia">
                    Geografia
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/Historia">
                    Historia
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link to="/Municipalidad" className="nav-link">
                <p className="mb-0 text-uppercase">Municipalidad</p>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/Recoleccion" className="nav-link">
                <p className="mb-0 text-uppercase">Puntos de Recolección</p>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/Foro" className="nav-link">
                <p className="mb-0 text-uppercase">Foro de Denuncias</p>
              </Link>
            </li>
          </ul>
          <ul className="navbar-nav text-center w-100 border-top">
            {/* <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle text-uppercase" to="/#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Administraciones Públicas
              </Link>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <Link className="dropdown-item" to="/profile">
                    Mi perfil
                  </Link>
                </li>
                <li>
                  <span className="dropdown-item" role="button" onClick={logout}>
                    Cerrar sesión
                  </span>
                </li>
              </ul>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
