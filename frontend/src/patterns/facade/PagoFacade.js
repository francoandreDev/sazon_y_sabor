import {
  ObtenerTodosCommand,
  ObtenerUnoCommand,
  CrearCommand,
  ReemplazarCommand,
  ActualizarCommand,
  EliminarCommand,
} from "../command/exports.js";
import { PagoService } from "../factory/exports.js";

export default class PagoFacade {
  constructor() {
    this.services = {
      pagos: new PagoService(),
    };
  }

  // Crear comando para obtener todos los Pagos
  async obtenerTodosPago() {
    const command = new ObtenerTodosCommand(this.services.pagos);
    return await command.execute();
  }

  // Crear comando para obtener un Pago por ID
  async obtenerPagoPorId(id) {
    const command = new ObtenerUnoCommand(this.services.pagos, id);
    return await command.execute();
  }

  // Crear comando para crear un nuevo Pago
  async crearPago(body) {
    const command = new CrearCommand(this.services.pagos, body);
    return await command.execute();
  }

  // Crear comando para reemplazar un Pago por ID
  async reemplazarPago(id, body) {
    const command = new ReemplazarCommand(this.services.pagos, id, body);
    return await command.execute();
  }

  // Crear comando para actualizar un Pago por ID
  async actualizarPago(id, body) {
    const command = new ActualizarCommand(this.services.Pagos, id, body);
    return await command.execute();
  }

  // Crear comando para eliminar un Pago por ID
  async eliminarPago(id) {
    const command = new EliminarCommand(this.services.pagos, id);
    return await command.execute();
  }
}
