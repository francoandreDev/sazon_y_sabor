import { UsuarioService } from "../factory/exports.js";
import {
  ObtenerTodosCommand,
  ObtenerUnoCommand,
  CrearCommand,
  ReemplazarCommand,
  ActualizarCommand,
  EliminarCommand,
} from "../command/exports.js";

export default class UsuarioFacade {
  constructor() {
    this.services = {
      usuarios: new UsuarioService(),
    };
  }

  // Crear comando para obtener todos los usuarios
  async obtenerTodosUsuarios() {
    const command = new ObtenerTodosCommand(this.services.usuarios);
    return await command.execute();
  }

  // Crear comando para obtener un usuario por ID
  async obtenerUsuarioPorId(id) {
    const command = new ObtenerUnoCommand(this.services.usuarios, id);
    return await command.execute();
  }

  // Crear comando para crear un nuevo usuario
  async crearUsuario(body) {
    const command = new CrearCommand(this.services.usuarios, body);
    return await command.execute();
  }

  // Crear comando para reemplazar un usuario por ID
  async reemplazarUsuario(id, body) {
    const command = new ReemplazarCommand(this.services.usuarios, id, body);
    return await command.execute();
  }

  // Crear comando para actualizar un usuario por ID
  async actualizarUsuario(id, body) {
    const command = new ActualizarCommand(this.services.usuarios, id, body);
    return await command.execute();
  }

  // Crear comando para eliminar un usuario por ID
  async eliminarUsuario(id) {
    const command = new EliminarCommand(this.services.usuarios, id);
    return await command.execute();
  }
}

/* 
? Ejemplo de uso:

import {UsuarioFacade} from "./facade/exports.js";

// Instanciamos el Facade
const usuarioFacade = new UsuarioFacade();

// Operaciones sobre los usuarios
(async () => {
  try {
    // Obtener todos los usuarios
    const usuarios = await usuarioFacade.obtenerTodosUsuarios();
    console.log("Usuarios:", usuarios);

    // Obtener un usuario por ID
    const usuario = await usuarioFacade.obtenerUsuarioPorId(1);
    console.log("Usuario con ID 1:", usuario);

    // Crear un nuevo usuario
    const nuevoUsuario = await usuarioFacade.crearUsuario({ nombre: "Juan", email: "juan@example.com" });
    console.log("Usuario creado:", nuevoUsuario);

    // Actualizar un usuario
    const usuarioActualizado = await usuarioFacade.actualizarUsuario(1, { nombre: "Juan Actualizado" });
    console.log("Usuario actualizado:", usuarioActualizado);

    // Eliminar un usuario
    const usuarioEliminado = await usuarioFacade.eliminarUsuario(1);
    console.log("Usuario eliminado:", usuarioEliminado);
  } catch (error) {
    console.error("Error en la operación:", error);
  }
})();

*/ 