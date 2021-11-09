import React from "react";
import Footer from "../partials/Footer";
import Navbar from "../partials/Navbar";
import foto from "../img/motoTacho.jpeg";

import slider1 from "../img/slider1.png";
import slider2 from "../img/slider2.jpg";
import slider3 from "../img/slider3.png";
import slider4 from "../img/slider4.png";
import slider5 from "../img/slider5.png";
import slider6 from "../img/slider6.png";
import slider7 from "../img/slider7.png";
import slider8 from "../img/slider8.jpg";
import slider9 from "../img/slider9.png";
import slider10 from "../img/slider10.png";
import slider11 from "../img/slider11.jpg";

const Recoleccion: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className="show container" style={{ padding: "5rem 3rem" }}>
        <img src={foto} className="img-fluid w-100" alt="" />
        <h4 className="mt-3">¿CÓMO PARTICIPAR EN EL PROGRAMA?</h4>
        <h4>Etapa 1:</h4>
        <p>Nuestros promotores visitarán su hogar a fin de informarle de la importancia de segregar nuestros residuos y le brindará información de como participar en el programa.</p>
        <h4>Etapa 2:</h4>
        <p>El día de la visita se entregará una bolsa verde para que pueda disponer sus residuos previamente separados.</p>
        <h4>Etapa 3:</h4>
        <p>El día de la recolección en horas de la mañana deberá colocar la bolsa verde bien cerrada, en la puerta de su vivienda.</p>
        <h4>Etapa 4:</h4>
        <p>Las bolsas verdes serán recogidas casa por casa por los operarios de la recolección a partir de las 9 am. Se empleará un camión baranda debidamente identificado.</p>
      </div>
      <div className="container mb-5">
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={1} aria-label="Slide 2" />
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={2} aria-label="Slide 3" />
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={3} aria-label="Slide 4" />
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={4} aria-label="Slide 5" />
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={5} aria-label="Slide 6" />
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={6} aria-label="Slide 7" />
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={7} aria-label="Slide 8" />
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={8} aria-label="Slide 9" />
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={9} aria-label="Slide 10" />
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={10} aria-label="Slide 11" />
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={slider1} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={slider2} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={slider3} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={slider4} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={slider5} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={slider6} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={slider7} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={slider8} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={slider9} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={slider10} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={slider11} className="d-block w-100" alt="..." />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Recoleccion;
