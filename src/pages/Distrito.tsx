import React from "react";
import Footer from "../partials/Footer";
import Navbar from "../partials/Navbar";

import fotoVictorLarco from "../img/hvlh.jpg";

const Distrito = () => {
  return (
    <>
      <Navbar />
      <div className="container show" style={{ padding: "5rem 3rem" }}>
        <div className="row justify-content-between">
          <div className="row flex-row-reverse flex-lg-row">
            <div className="col-lg-12 mb-4">
              <h2>Distrito de Victor Larco</h2>
              <img className="img-fluid w-100" src={fotoVictorLarco} alt="" />
            </div>
            <div className="col-lg-12">
              <p className="text-justify">
                Distrito Víctor Larco Herrera El distrito de Víctor Larco Herrera, originalmente y hasta 1955 llamado distrito de Buenos Aires, es uno de los once que conforman la provincia de Trujillo, ubicada en el departamento de La Libertad en el norte del Perú. Se ubica sobre una planicie a orillas del océano Pacífico y se encuentra dentro de la conurbación de la ciudad de Trujillo como uno de los nueve distritos que conforman el área conocida como Trujillo Metropolitano.​Víctor Larco es el
                distrito con mayor índice de desarrollo humano (IDH) de la ciudad de Trujillo, según estudio publicado por el Programa de las Naciones Unidas para el Desarrollo. El distrito integra al balneario de Buenos Aires y a las localidades de Santiago de Huamán y Vista Alegre. El 16 de marzo de 1955 se modificó su nombre por el de Víctor Larco Herrera en memoria del ilustre filántropo trujillano quien fue un benefactor del distrito que está mayoritariamente habitado por familias de clase
                media-alta y clase alta. En la actualidad Víctor Larco es un centro urbano comercial y residencial que aún conserva gran parte de áreas verdes; posee zonas comerciales como la avenida Larco, la avenida Fátima, etc., zonas residenciales en crecimiento, centros de educación de todo nivel que reúne estudiantes y docentes de diferentes partes del país, atractivos turísticos entre los que destacan el Túnel de los Deseos en el Paseo de las Aguas, la iglesia de Huamán que data de la
                época colonial, el balneario de Buenos Aires, el Mural de Caballos de Paso, entre otros. Hacia la parte sur del distrito aún se conserva parte de su campiña en la zona cercana al río Moche y su desembocadura en el océano Pacífico.
              </p>
              <h2>POBLACIÓN</h2>
              <p className="text-justify">Según los resultados del censo de población y vivienda del año 2007; la población total censada del distrito Víctor Larco para ese año era de 55 781 habitantes, existiendo una población urbana de 55.738 habitantes y una población rural de 43 habitantes. Para el año 2014 el INEI estima una población de 63 317 habitantes​ distribuidos mayormente en zonas urbanas del distrito.</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Distrito;
