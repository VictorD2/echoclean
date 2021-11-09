import React from "react";
import Footer from "../partials/Footer";
import Navbar from "../partials/Navbar";
import organigrama from "../img/organigrama.jpg";
import municipalidad from "../img/BANNER2OK.jpg";
const Municipalidad = () => {
  return (
    <>
      <Navbar />
      <div className="container show" style={{ padding: "5rem 3rem" }}>
        <div className="row justify-content-between">
          <div className="row flex-row-reverse flex-lg-row">
            <div className="col-lg-12 mb-4">
              <h2>MUNICIPALIDAD</h2>
              <img className="img-fluid w-100" src={municipalidad} alt="" />
            </div>
            <div className="col-lg-12">
              <p className="text-justify">
                Dirección: Independencia 210, Distrito de Víctor Larco Herrera 13009 Teléfono: (044) 481548 Alcalde: César Juárez Castillo Misión Institucional La Municipalidad de Víctor es el órgano de Gobierno Local que representa y gestiona los intereses de los vecinos victor larco en especifico San Andres 5ta etapa, promoviendo una fuerte gobernabilidad democrática, asegurando la mayor participación ciudadana en la formulación de las políticas locales, desarrollando al máximo sus capacidades
                para brindar bienes y servicios públicos locales de alta calidad. Visión Institucional El Gobierno local de la Municipalidad de Víctor Larco Herrera generará condiciones y clima de oportunidades para que los vecinos del Distrito alcancen el más alto nivel en la calidad de vida, con en una ciudad moderna, confortable, saludable y sobre todo segura, donde el desarrollo se promueva de manera integral y sustentable; aprovechando permanentemente las potencialidades locales para el
                comercio y turismo de alta calidad.
              </p>
              <h2>ORGANIGRAMA DE LA MUNICIPALIDAD</h2>
              <img className="img-fluid w-100" src={organigrama} alt="" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Municipalidad;
