import React from "react";
import Footer from "../partials/Footer";
import Navbar from "../partials/Navbar";

const Geografia = () => {
  return (
    <>
      <Navbar />
      <div className="container show" style={{ padding: "5rem 3rem" }}>
        <div className="row justify-content-between">
          <div className="row flex-row-reverse flex-lg-row">
            <div className="col-lg-12 mb-4">
              <h2>GEOGRAFÍA</h2>
              <img className="img-fluid w-100" src={""} alt="" />
            </div>
            <div className="col-lg-12">
              <p className="text-justify">
                El distrito de Víctor Larco Herrera es uno de los 11 distritos de la provincia de Trujillo. Está situado en la parte suroeste de la provincia de Trujillo a la margen derecha del río Moche el cual es la referencia del límite hacia el sur con Moche. Hacia el oeste limita con el océano Pacífico. Limita hacia el norte con los distritos de Huanchaco y distrito de Trujillo y hacia el este limita también con el distrito de Trujillo. Con una extensión de 40 kilómetros cuadrados y cuenta
                con 14 sectores.
              </p>
              <iframe className="w-100" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22342.86087416207!2d-79.04776827038347!3d-8.132287008119665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91ad3d47a075c8c1%3A0xde43bc697ca8d038!2sDistrito%20de%20V%C3%ADctor%20Larco%20Herrera!5e0!3m2!1ses!2spe!4v1636354884730!5m2!1ses!2spe" width={600} height={450} style={{ border: 0 }} allowFullScreen loading="lazy" />
              <table className="table table-bordered table-light">
                <tbody>
                  <tr>
                    <td style={{ height: 20, padding: 0, background: "#1e73be" }} colSpan={4}>
                      &nbsp;
                    </td>
                  </tr>
                  <tr>
                    <td>Departamento</td>
                    <td>La Libertad</td>
                  </tr>
                  <tr>
                    <td>Provincia</td>
                    <td>Trujillo</td>
                  </tr>
                  <tr>
                    <td>Distrito</td>
                    <td>Víctor Larco Herrera</td>
                  </tr>
                  <tr>
                    <td>Altura Capital (m.s.n.m.)</td>
                    <td>0</td>
                  </tr>
                  <tr>
                    <td>Clima</td>
                    <td>12º C – 30º C</td>
                  </tr>
                  <tr>
                    <td>Latitud</td>
                    <td>O 79°2’44.38″</td>
                  </tr>
                  <tr>
                    <td>Longitud</td>
                    <td>S 8°8’22.2″</td>
                  </tr>
                  <tr>
                    <td>Número de Sectores</td>
                    <td>14</td>
                  </tr>
                  <tr>
                    <td>Número de manzanas</td>
                    <td>883</td>
                  </tr>
                  <tr>
                    <td>Número de lotes (2014)</td>
                    <td>13,307</td>
                  </tr>
                  <tr>
                    <td>Número de establecimientos comerciales (2019)</td>
                    <td>3,481</td>
                  </tr>
                  <tr>
                    <td>Número de predios (2019)</td>
                    <td>25,853</td>
                  </tr>
                  <tr>
                    <td>Número de contribuyentes (2019)</td>
                    <td>20,406</td>
                  </tr>
                  <tr>
                    <td>Superficie Territorial</td>
                    <td>40 km2</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Geografia;
