import ApiCommand from "./ApiCommnand.js";

export default class CrearCommand extends ApiCommand {
  constructor(apiService, body) {
    super(apiService);
    this.body = body;
  }

  execute() {
    return this.apiService.crear(this.body);
  }
}
