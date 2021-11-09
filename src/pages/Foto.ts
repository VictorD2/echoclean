interface Comentario {
  foto: string;
  texto: string;
  foto_url: File[];
}
class Foro {
  comentarios: Comentario[];
  constructor() {
    this.comentarios = [];
  }
  agregarComentario(comentario: Comentario) {
    this.comentarios.push(comentario);
  }
  getComentarios(): Comentario[] {
    return this.comentarios;
  }
}
export default new Foro();
