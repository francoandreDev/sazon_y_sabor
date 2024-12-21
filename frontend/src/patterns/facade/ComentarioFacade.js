import {
  ObtenerTodosCommand,
  ObtenerUnoCommand,
  CrearCommand,
  ReemplazarCommand,
  ActualizarCommand,
  EliminarCommand,
} from "../command/exports.js";
import { ComentarioService } from "../factory/exports.js";

export default class ComentarioFacade {
  constructor() {
    this.services = {
      comentarios: new ComentarioService(),
    };
  }

  // Crear comando para obtener todos los comentario
  async obtenerTodosComentario() {
    const command = new ObtenerTodosCommand(this.services.comentarios);
    return await command.execute();
  }

  // Crear comando para obtener un comentario por ID
  async obtenerComentarioPorId(id) {
    const command = new ObtenerUnoCommand(this.services.comentarios, id);
    return await command.execute();
  }

  // Crear comando para crear un nuevo comentario
  async crearComentario(body) {
    const command = new CrearCommand(this.services.comentarios, body);
    return await command.execute();
  }

  // Crear comando para reemplazar un comentario por ID
  async reemplazarComentario(id, body) {
    const command = new ReemplazarCommand(this.services.comentarios, id, body);
    return await command.execute();
  }

  // Crear comando para actualizar un comentario por ID
  async actualizarComentario(id, body) {
    const command = new ActualizarCommand(this.services.comentarios, id, body);
    return await command.execute();
  }

  // Crear comando para eliminar un comentario por ID
  async eliminarComentario(id) {
    const command = new EliminarCommand(this.services.comentarios, id);
    return await command.execute();
  }
}
