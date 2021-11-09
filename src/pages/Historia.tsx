import React from "react";
import Footer from "../partials/Footer";
import Navbar from "../partials/Navbar";
import foto from "../img/VL.png";

const Historia: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className="show container" style={{ padding: "5rem 3rem" }}>
        <div className="w-100 contenedor__video">
          <iframe className="w-100 bg-white d-flex align-items-center video__reproductor" title={" "} src={`https://player.vimeo.com/video/349521849`} frameBorder={0} allowFullScreen />
        </div>
        <div className="mt-5" style={{ padding: "0rem 4.9rem" }}>
          <p className="text-justify">
            El distrito de Víctor Larco Herrera, originalmente llamado distrito de Buenos Aires, es uno de los once que conforman la provincia de Trujillo, ubicada en el departamento de La Libertad en el Norte del Perú. Se ubica sobre una planicie a orillas del océano Pacífico y se encuentra dentro de la conurbación de la ciudad de Trujillo como uno de los nueve distritos que conforman el área conocida como Trujillo Metropolitano. Víctor Larco es el distrito con mayor índice de desarrollo humano
            (IDH) de la ciudad de Trujillo, según estudio publicado por el Programa de las Naciones Unidas para el Desarrollo.
          </p>
          <p className="text-justify">El distrito integra al balneario de Buenos Aires y a las localidades de Santiago de Huamán y Vista Alegre. En 1945, dos años después de su fundación, se modificó su nombre por el de Víctor Larco Herrera en memoria del ilustre filántropo trujillano quien fue un benefactor del distrito que está mayoritariamente habitado por familias de clase media-alta y clase alta.</p>
          <p className="text-justify">
            En la actualidad Víctor Larco es un centro urbano comercial y residencial que aún conserva gran parte de áreas verdes; posee zonas comerciales como la avenida Larco, la avenida Fátima, etc., zonas residenciales en crecimiento, centros de educación de todo nivel que reúne estudiantes y docentes de diferentes partes del país, atractivos turísticos entre los que destacan el Túnel de los Deseos en el Paseo de las Aguas, la iglesia de Huamán que data de la época colonial, el balneario de
            Buenos Aires, el Mural de Caballos de Paso, entre otros. Hacia la parte sur del distrito aún se conserva parte de su campiña en la zona cercana al río Moche y su desembocadura en el océano Pacífico.
          </p>

          <img src={foto} className="img-fluid w-100 mt-2" alt="" />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Historia;
