import { BASE_URL, allowedMethods } from "./constantes.js";

export default class ApiService {
  constructor(endpoint) {
    this.endpoint = endpoint;
    this.baseUrl = BASE_URL + endpoint;
  }

  async request(method, body = null, params = "") {
    if (!allowedMethods.includes(method)) {
      throw new Error(`Método no permitido: ${method}`);
    }

    const options = {
      method,
      headers: {
        "Content-Type": "application/json",
      },
    };

    if (body) {
      options.body = JSON.stringify(body);
    }

    const url = params ? `${this.baseUrl}${params}` : this.baseUrl;

    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error(
          `Error ${method}: ${response.status} ${response.statusText}`
        );
      }
      return method !== "DELETE" ? await response.json() : { success: true };
    } catch (error) {
      console.error(`Error en ${method}:`, error);
      throw error;
    }
  }

  obtenerTodos() {
    return this.request("GET");
  }

  obtenerUno(id) {
    return this.request("GET", null, `/${id}`);
  }

  crear(body) {
    return this.request("POST", body);
  }

  put(id, body) {
    return this.request("PUT", body, `/${id}`);
  }

  patch(id, body) {
    return this.request("PATCH", body, `/${id}`);
  }

  delete(id) {
    return this.request("DELETE", null, `/${id}`);
  }
}
