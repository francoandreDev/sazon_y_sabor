import ApiService from "./ApiService.js";
import { ENDPOINTS } from "./constantes.js";

export default class PagoService extends ApiService {
  constructor() {
    super(ENDPOINTS.PAGOS);
  }

  // Métodos adicionales específicos para reservas (opcional)
}
