import React, { useEffect } from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import ScrollReveal from "scrollreveal";
const Footer = () => {
  useEffect(() => {
    const config = {
      duration: 1000,
      delay: 150,
      easing: "ease",
    };
    ScrollReveal().reveal(".show", config);
    return () => {};
  }, []);
  return (
    <footer className="row m-0 show" style={{ width: "100%" }}>
      <div className="col-md-4">
        <h3 className="fs-6">© 2021 EcoClean</h3>
        <br />
        <span className="d-block fw-bold">Av. Los Horizontes Mz N Lt 7</span>
        <span className="d-block fw-bold">Urb. Los Huertos de Villa</span>
        <span className="d-block fw-bold">Chorrillos - Lima</span>
        <br />
        <span className="d-block fw-bold">(+511) 4177300</span>
        <span className="d-block fw-bold">atencionalcliente@lacalera.com.pe</span>
      </div>
      <div className="col-md-4 mt-4 mt-lg-0" style={{ lineHeight: "1.7" }}>
        <h3 className="fs-6">Más</h3>
        <br />
        <a href="https://www.lacalera.com.pe/" className="fw-bold text-white">
          La Calera Agriculture
        </a>
        <br />
        <a href="https://www.fundacionlacalera.org/" className="fw-bold text-white">
          Fundación La Calera
        </a>
        <br />
        <a href="mailto:seleccion@lacalera.com.pe?subject=Trabaja%20con%20Nosotros%20(Web%20-%20La%20Calera%20Huevos)" className="fw-bold text-white">
          Trabaja con Nosotros
        </a>
        <br />
        <a href="https://www.lacalera.pe/contacto" className="fw-bold text-white">
          Contacto
        </a>
        <br />
        <a href="https://edoc.lacalera.pe/" className="fw-bold text-white">
          Comprobantes Eléctronicos
        </a>
      </div>
      <div className="col-md-4 mt-4 mt-lg-0">
        <a href="https://www.instagram.com/huevoslacalera/" className="text-white" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="fs-3" />
        </a>
        <a href="https://www.facebook.com/HuevosLaCaleraPeru/" className="ms-3 text-white" target="_blank" rel="noopener noreferrer">
          <FaFacebook className="fs-3" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
