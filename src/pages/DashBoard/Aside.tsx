/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { Link, useHistory } from "react-router-dom";

import logo from "../../img/logo.png";
import photoUser from "../../img/ASSET-USER-ADMIN-300x300.png";
import { useUsuario } from "../../context-user/UsuarioProvider";
import axios from "axios";
import { API } from "../../config/config";
import auth from "../../context-user/auth";
import Usuario from "../../interfaces/Usuario";

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

const Aside = () => {
  const history = useHistory();
  const { usuario, setUsuario } = useUsuario();

  useEffect(() => {
    if (usuario.id_usuario === 0) return history.push("/");
    return () => {};
  }, []);

  const logOut = async () => {
    const res = await axios.get(`${API}/logout`);
    if (res.data.success) {
      auth.logOut();
      auth.setRango(1);
      setUsuario(initialState);
      history.push("/");
    }
  };

  return (
    <aside className="main-sidebar position-fixed sidebar-dark-primary elevation-4" style={{ background: "#212529" }}>
      {/* Brand Logo */}
      <Link to="/" className="brand-link text-center">
        <img src={logo} alt="La Calera Logo" className="w-75" style={{ opacity: ".8" }} />
        {/* <span className="brand-text font-weight-light">La Calera</span> */}
      </Link>
      {/* Sidebar */}
      <div className="sidebar os-host os-theme-light os-host-overflow os-host-overflow-y os-host-resize-disabled os-host-scrollbar-horizontal-hidden os-host-transition">
        <div className="os-resize-observer-host observed">
          <div className="os-resize-observer" style={{ left: 0, right: "auto" }} />
        </div>
        <div className="os-size-auto-observer observed" style={{ height: "calc(100% + 1px)", float: "left" }}>
          <div className="os-resize-observer" />
        </div>
        <div className="os-content-glue" style={{ margin: "0px -8px" }} />
        <div className="os-padding">
          <div className="os-viewport os-viewport-native-scrollbars-invisible" style={{ overflowY: "scroll" }}>
            <div className="os-content" style={{ padding: "0px 8px", height: "100%", width: "100%" }}>
              {/* Sidebar user panel (optional) */}
              <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                <div className="image">
                  <img src={photoUser} alt="Foto de Perfil" className="img-circle elevation-2" />
                </div>
                <div className="info">
                  <Link to="/profile" className="d-block">
                    {usuario.name} {usuario.surname}
                  </Link>
                </div>
              </div>
              {/* Sidebar Menu */}
              <nav className="mt-2 h-100">
                <ul className="nav nav-pills nav-sidebar flex-column h-100" data-widget="treeview" role="menu" data-accordion="false">
                  <li className="nav-item">
                    <Link to="/Dashboard/Productos" className="nav-link">
                      <i className="nav-icon fas fa-egg " />
                      <p>Productos</p>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/Dashboard/Pedidos" className="nav-link">
                      <i className="nav-icon fas fa-th" />
                      <p>Pedidos</p>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/Dashboard/Ventas" className="nav-link">
                      <i className="nav-icon fas fa-cash-register"></i>
                      <p>Ventas</p>
                    </Link>
                  </li>
                  <li className="nav-item justify-self-end align-self-auto">
                    <Link onClick={() => logOut()} to="#" className="nav-link">
                      <i className="nav-icon fas fa-door-open" />
                      <p>Cerrar Sesión</p>
                    </Link>
                  </li>
                </ul>
              </nav>
              {/* /.sidebar-menu */}
            </div>
          </div>
        </div>
        <div className="os-scrollbar os-scrollbar-horizontal os-scrollbar-unusable os-scrollbar-auto-hidden">
          <div className="os-scrollbar-track">
            <div className="os-scrollbar-handle" style={{ width: "100%", transform: "translate(0px, 0px)" }} />
          </div>
        </div>
        <div className="os-scrollbar os-scrollbar-vertical os-scrollbar-auto-hidden">
          <div className="os-scrollbar-track">
            <div className="os-scrollbar-handle" style={{ height: "51.5844%", transform: "translate(0px, 0px)" }} />
          </div>
        </div>
        <div className="os-scrollbar-corner" />
      </div>
      {/* /.sidebar */}
    </aside>
  );
};

export default Aside;
