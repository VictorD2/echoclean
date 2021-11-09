import React, { useEffect, useState } from "react";
import CardProducto from "../components/CardProducto";
import Producto from "../interfaces/Producto";
import Footer from "../partials/Footer";
import Navbar from "../partials/Navbar";
import * as ProductoServices from "../services/ProductosServices";
import ScrollReveal from "scrollreveal";

import slider1 from "../img/sliderA.jpg";
import slider2 from "../img/sliderB.jpg";
import slider3 from "../img/motoTacho.jpeg";

const Home = () => {
  const [productos, setProductos] = useState<Producto[]>([]);
  useEffect(() => {
    getProductos();
    const config = {
      duration: 500,
      delay: 50,
      easing: "ease",
    };
    ScrollReveal().reveal(".show", config);
    return () => {
      setProductos([]);
    };
  }, []);
  const getProductos = async () => {
    const res = await ProductoServices.getAll(1, "");
    setProductos(res.data);
  };
  return (
    <>
      <Navbar />
      <div className="show" style={{ padding: "5rem 3rem" }}>
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
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
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
