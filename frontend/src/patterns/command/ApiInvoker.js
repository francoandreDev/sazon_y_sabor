export default class ApiInvoker {
  constructor() {
    this.commands = [];
  }

  addCommand(command) {
    this.commands.push(command);
  }

  executeCommands() {
    return Promise.all(this.commands.map((command) => command.execute()));
  }
}


/*
? Ejemplo de uso:

import { UsuariosService } from "./services";

// Instanciamos el servicio
const usuariosService = new UsuariosService();

// Creamos los comandos
const obtenerTodosUsuariosCommand = new ObtenerTodosCommand(usuariosService);
const obtenerUsuarioPorIdCommand = new ObtenerUnoCommand(usuariosService, 1);
const crearUsuarioCommand = new CrearCommand(usuariosService, { nombre: "Juan", email: "juan@example.com" });
const reemplazarUsuarioCommand = new ReemplazarCommand(usuariosService, 1, { nombre: "Juan Actualizado", email: "juanActualizado@example.com" });
const actualizarUsuarioCommand = new ActualizarCommand(usuariosService, 1, { nombre: "Juan Actual" });
const eliminarUsuarioCommand = new EliminarCommand(usuariosService, 1);

// Instanciamos el invocador
const invocador = new ApiInvoker();

// Agregamos los comandos al invocador
invocador.addCommand(obtenerTodosUsuariosCommand);
invocador.addCommand(obtenerUsuarioPorIdCommand);
invocador.addCommand(crearUsuarioCommand);
invocador.addCommand(reemplazarUsuarioCommand);
invocador.addCommand(actualizarUsuarioCommand);
invocador.addCommand(eliminarUsuarioCommand);

// Ejecutamos los comandos
(async () => {
  try {
    const resultados = await invocador.executeCommands();
    console.log(resultados); // Muestra los resultados de todas las operaciones
  } catch (error) {
    console.error("Error al ejecutar los comandos:", error);
  }
})();

*/ 