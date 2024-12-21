export default class ApiCommand {
  constructor(apiService) {
    this.apiService = apiService;
  }

  execute() {
    throw new Error("Este método debe ser implementado");
  }
}
