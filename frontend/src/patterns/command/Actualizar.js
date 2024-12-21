import ApiCommand from "./ApiCommnand.js";

export default class ActualizarCommand extends ApiCommand {
  constructor(apiService, id, body) {
    super(apiService);
    this.id = id;
    this.body = body;
  }

  execute() {
    return this.apiService.patch(this.id, this.body);
  }
}
