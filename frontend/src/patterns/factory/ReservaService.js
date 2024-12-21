import ApiService from "./ApiService.js";
import { ENDPOINTS } from "./constantes.js";

export default class ReservaService extends ApiService {
  constructor() {
    super(ENDPOINTS.RESERVAS);
  }

  // Métodos adicionales específicos para reservas (opcional)
}
