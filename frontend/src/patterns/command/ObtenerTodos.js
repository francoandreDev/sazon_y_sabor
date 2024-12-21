import ApiCommand from "./ApiCommnand.js";

export default class ObtenerTodosCommand extends ApiCommand {
  execute() {
    return this.apiService.obtenerTodos();
  }
}
