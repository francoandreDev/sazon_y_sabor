import {
  ObtenerTodosCommand,
  ObtenerUnoCommand,
  CrearCommand,
  ReemplazarCommand,
  ActualizarCommand,
  EliminarCommand,
} from "../command/exports.js";
import { ReservaService } from "../factory/exports.js";

export default class ReservaFacade {
  constructor() {
    this.services = {
      reservas: new ReservaService(),
    };
  }

  // Crear comando para obtener todos las reservas
  async obtenerTodosReserva() {
    const command = new ObtenerTodosCommand(this.services.reservas);
    return await command.execute();
  }

  // Crear comando para obtener una reserva por ID
  async obtenerReservaPorId(id) {
    const command = new ObtenerUnoCommand(this.services.reservas, id);
    return await command.execute();
  }

  // Crear comando para crear una nueva reserva
  async crearReserva(body) {
    const command = new CrearCommand(this.services.reservas, body);
    return await command.execute();
  }

  // Crear comando para reemplazar una reserva por ID
  async reemplazarReserva(id, body) {
    const command = new ReemplazarCommand(this.services.reservas, id, body);
    return await command.execute();
  }

  // Crear comando para actualizar una reserva por ID
  async actualizarReserva(id, body) {
    const command = new  ActualizarCommand(this.services.reservas, id, body);
    return await command.execute();
  }

  // Crear comando para eliminar una reserva por ID
  async eliminarReserva(id) {
    const command = new EliminarCommand(this.services.reservas, id);
    return await command.execute();
  }
}
