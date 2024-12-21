import ApiCommand from "./ApiCommnand.js";

export default class ObtenerUnoCommand extends ApiCommand {
  constructor(apiService, id) {
    super(apiService);
    this.id = id;
  }

  execute() {
    return this.apiService.obtenerUno(this.id);
  }
}
