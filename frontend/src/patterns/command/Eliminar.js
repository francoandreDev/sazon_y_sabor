import ApiCommand from "./ApiCommnand.js";

export default class EliminarCommand extends ApiCommand {
  constructor(apiService, id) {
    super(apiService);
    this.id = id;
  }

  execute() {
    return this.apiService.delete(this.id);
  }
}
