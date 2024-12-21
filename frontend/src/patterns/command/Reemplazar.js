import ApiCommand from "./ApiCommnand.js";

export default class ReemplazarCommand extends ApiCommand {
  constructor(apiService, id, body) {
    super(apiService);
    this.id = id;
    this.body = body;
  }

  execute() {
    return this.apiService.put(this.id, this.body);
  }
}
