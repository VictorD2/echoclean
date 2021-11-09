import React, { useEffect, useState } from "react";
import swal from "sweetalert";
import Footer from "../partials/Footer";
import Navbar from "../partials/Navbar";
import { AiTwotoneEdit } from "react-icons/ai";
import ForObj from "./Foto";
interface Comentario {
  foto: string;
  texto: string;
  foto_url: File[];
}

const initialState: Comentario = {
  foto: "",
  texto: "",
  foto_url: [new File([""], "filename")],
};

const Foro: React.FC = () => {
  const [comentarios, setComentarios] = useState<Comentario[]>([]);
  const [profileImg, setProfileImg] = useState<string | ArrayBuffer>("");
  const [comentario, setComentario] = useState<Comentario>(initialState);
  const [trigger, setTrigger] = useState<number>(0);
  useEffect(() => {
    setComentarios(ForObj.comentarios);
    return () => setComentarios([]);
  }, [trigger]);

  const handleDrop = async (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    try {
      const tipos = ["image/gif", "image/png", "image/jpeg", "image/bmp", "image/webp"];
      if (!(e.dataTransfer.files instanceof FileList)) return swal({ title: "Error", text: "Archivo no leido", icon: "error" });
      if (!tipos.includes(e.dataTransfer.files[0].type)) return swal({ title: "Advertencia", text: "Subir un formato de imagen", icon: "warning" });
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.readyState === 2) {
          if (reader.result) setProfileImg(reader.result);
        }
      };
      reader.readAsDataURL(e.dataTransfer.files[0]);
      let url = "foto_url";
      setComentario({ ...comentario, [url]: e.dataTransfer.files });
      swal({ title: "¡Hecho!", text: "Foto Adjuntada", icon: "success" });
    } catch (error) {}
  };
  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
  };
  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const tipos = ["image/gif", "image/png", "image/jpeg", "image/bmp", "image/webp"];
    try {
      if (!(e.target.files instanceof FileList)) return swal({ title: "Error", text: "Archivo no leido", icon: "error" });
      if (!tipos.includes(e.target.files[0].type)) return swal({ title: "Advertencia", text: "Subir un formato de imagen", icon: "warning" });

      const reader = new FileReader();
      reader.onload = () => {
        if (reader.readyState === 2) {
          if (reader.result) setProfileImg(reader.result);
        }
      };
      reader.readAsDataURL(e.target.files[0]);
      let url = "foto_url";
      setComentario({ ...comentario, [url]: e.target.files });
      swal({ title: "¡Hecho!", text: "Foto Adjuntada", icon: "success" });
    } catch (error) {}
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setComentario({ ...comentario, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newComentario: Comentario = {
      texto: comentario.texto,
      foto: URL.createObjectURL(comentario.foto_url[0]),
      foto_url: comentario.foto_url,
    };
    ForObj.agregarComentario(newComentario);
    setTrigger(trigger + 1);
    setComentario(initialState);
    swal({ title: "¡Hecho!", text: "Gracias por comunicarlo", icon: "success" });
  };

  return (
    <>
      <Navbar />
      <div className="container show" style={{ padding: "5rem 3rem" }}>
        <div className="row justify-content-between">
          <div className="row flex-row-reverse flex-lg-row">
            <div className="col-lg-12 mb-4">
              <h2>FORO DE DENUNCIAS</h2>
            </div>
            <form onSubmit={handleFormSubmit}>
              <div className="row">
                <div className="col-12 col-lg-6">
                  <div draggable="true" className="cuadroEditPerfil h-100 d-flex flex-column align-items-center justify-content-center" onDragOver={handleDragOver} onDrop={handleDrop}>
                    <figure className="editProfile-img">
                      <img id="avatar" src={profileImg.toString()} className="loadPerfil img-fluid" alt="Mi evidencia" width="200" height="200" />
                    </figure>
                    <div className="w-100" style={{ color: "#696969" }}>
                      <input type="file" id="inputFile" style={{ display: "none" }} onChange={handleChange} />
                      Arrastra aquí tu imagen de evidencia
                      <br /> o
                      <a href="/" className="ms-1" role="button">
                        <label htmlFor="inputFile" style={{ cursor: "pointer" }}>
                          Sube una foto
                        </label>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-lg-6">
                  <textarea value={comentario.texto} name="texto" onChange={handleInputChange} placeholder={"Descripción de la denuncia"} className="form-control" cols={30} rows={10} defaultValue={""} />
                </div>
                <div className="col-12 text-center mt-4">
                  <button type="submit" className="btn btn-secondary w-50">
                    <AiTwotoneEdit /> Registrar Denuncia
                  </button>
                </div>
              </div>
            </form>
            <div className="row mt-5">
              {comentarios.map((comentario, index) => {
                return (
                  <div key={index} className="col-12 col-lg-6 mb-5">
                    <img src={comentario.foto} className="w-100 img-fluid" alt="" />
                    <div>
                      <p className="m-0 text-justify">{comentario.texto}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Foro;
