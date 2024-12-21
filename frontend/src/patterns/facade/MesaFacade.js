import {
  ObtenerTodosCommand,
  ObtenerUnoCommand,
  CrearCommand,
  ReemplazarCommand,
  ActualizarCommand,
  EliminarCommand,
} from "../command/exports.js";
import { MesaService } from "../factory/exports.js";

export default class MesaFacade {
  constructor() {
    this.services = {
      mesas: new MesaService(),
    };
  }

  // Crear comando para obtener todos las Mesas
  async obtenerTodosMesa() {
    const command = new ObtenerTodosCommand(this.services.mesas);
    return await command.execute();
  }

  // Crear comando para obtener una mesa por ID
  async obtenerMesaPorId(id) {
    const command = new ObtenerUnoCommand(this.services.mesas, id);
    return await command.execute();
  }

  // Crear comando para crear una nueva mesa
  async crearMesa(body) {
    const command = new CrearCommand(this.services.mesas, body);
    return await command.execute();
  }

  // Crear comando para reemplazar una mesa por ID
  async reemplazarMesa(id, body) {
    const command = new ReemplazarCommand(this.services.mesas, id, body);
    return await command.execute();
  }

  // Crear comando para actualizar una mesa por ID
  async actualizarMesa(id, body) {
    const command = new ActualizarCommand(this.services.mesas, id, body);
    return await command.execute();
  }

  // Crear comando para eliminar una mesa por ID
  async eliminarMesa(id) {
    const command = new EliminarCommand(this.services.mesas, id);
    return await command.execute();
  }
}
