import ApiService from "./ApiService.js";
import { ENDPOINTS } from "./constantes.js";

export default class UsuarioService extends ApiService {
  constructor() {
    super(ENDPOINTS.USUARIOS);
  }

  // Métodos adicionales específicos para usuarios (opcional)
}
