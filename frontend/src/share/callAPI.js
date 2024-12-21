import {
  UsuarioFacade,
  ComentarioFacade,
  MesaFacade,
  ReservaFacade,
  PagoFacade,
} from "../patterns/facade/exports.js";

export async function obtenerTodosUsuarios() {
  const facade = new UsuarioFacade();
  return await facade.obtenerTodosUsuarios();
}

export async function obtenerTodosComentarios() {
  const facade = new ComentarioFacade();
  return await facade.obtenerTodosComentario();
}

export async function obtenerTodosMesas() {
  const facade = new MesaFacade();
  return await facade.obtenerTodosMesa();
}

export async function obtenerTodosReservas() {
  const facade = new ReservaFacade();
  return await facade.obtenerTodosReserva();
}

export async function obtenerTodosPagos() {
  const facade = new PagoFacade();
  return await facade.obtenerTodosPago();
}

export async function obtenerUnaMesa(id) {
  const facade = new MesaFacade();
  return await facade.obtenerMesaPorId(id);
}

export async function actualizarMesa(id, body) {
  const facade = new MesaFacade();
  return await facade.actualizarMesa(id, body);
}

export async function reservarMesa(body) {
  const facade = new ReservaFacade();
  return await facade.crearReserva(body);
}

export async function crearComentario(body) {
  const facade = new ComentarioFacade();
  return await facade.crearComentario(body);
}

export async function obtenerUnUsuario(id) {
  const facade = new UsuarioFacade();
  return await facade.obtenerUsuarioPorId(id);
}
