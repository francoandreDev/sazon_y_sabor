import ApiService from "./ApiService.js";
import { ENDPOINTS } from "./constantes.js";

export default class MesaService extends ApiService {
  constructor() {
    super(ENDPOINTS.MESAS);
  }

  // Métodos adicionales específicos para mesas (opcional)
}
