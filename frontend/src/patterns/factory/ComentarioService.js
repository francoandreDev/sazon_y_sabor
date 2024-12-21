import ApiService from "./ApiService.js";
import { ENDPOINTS } from "./constantes.js";

export default class ComentarioService extends ApiService {
  constructor() {
    super(ENDPOINTS.COMENTARIOS);
  }

  // Métodos adicionales específicos para reservas (opcional)
}
