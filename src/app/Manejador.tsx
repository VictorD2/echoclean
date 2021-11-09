import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "../pages/Home";
import InterfaceUsuario from "../pages/InterfaceUsuario";
import ManejadorRegistroUsuario from "../pages/ManejadorRegistroUsuario";
import Profile from "../pages/Profile";
import { UsuarioProvider } from "../context-user/UsuarioProvider";

import DashBoard from "../pages/DashBoard/DashBoard";
import InterfaceProductos from "../pages/DashBoard/Productos/InterfaceProductos";
import VentasDash from "../pages/DashBoard/Ventas/VentasDash";
import InterfacePedidos from "../pages/DashBoard/Pedidos/InterfacePedidos";
import InterfaceCarrito from "../pages/InterfaceCarrito";
import Distrito from "../pages/Distrito";
import Municipalidad from "../pages/Municipalidad";
import Geografia from "../pages/Geografia";
import Foro from "../pages/Foro";
import Recoleccion from "../pages/Recoleccion";
import Historia from "../pages/Historia";

function Manejador() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/Historia" component={Historia} />
        <Route exact path="/Distrito" component={Distrito} />
        <Route exact path="/Recoleccion" component={Recoleccion} />
        <Route exact path="/Foro" component={Foro} />
        <Route exact path="/Geografia" component={Geografia} />
        <Route exact path="/Municipalidad" component={Municipalidad} />
        <Route exact path="/Dashboard" component={DashBoard} />
        <Route exact path="/Dashboard/Productos" component={InterfaceProductos} />
        <Route exact path="/Dashboard/Ventas" component={VentasDash} />
        <Route exact path="/Dashboard/Pedidos" component={InterfacePedidos} />
        <Route exact path="/iniciar-sesion" component={InterfaceUsuario} />
        <Route exact path="/registrarme" component={ManejadorRegistroUsuario} />
        <Route exact path="/mi-carrito" component={InterfaceCarrito} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
}
const prev = () => (
  <UsuarioProvider>
    <Manejador></Manejador>
  </UsuarioProvider>
);
export default prev;
