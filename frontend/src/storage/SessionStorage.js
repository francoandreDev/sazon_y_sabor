export default class SessionStorageHelper {
    /**
     * Guarda un dato en el sessionStorage.
     * @param {string} key - Clave bajo la cual se guardará el valor.
     * @param {any} value - Valor que se desea guardar. Puede ser cualquier tipo.
     */
    static setItem(key, value) {
        try {
            const serializedValue = JSON.stringify(value);
            sessionStorage.setItem(key, serializedValue);
        } catch (error) {
            console.error(`Error al guardar en sessionStorage con clave "${key}":`, error);
        }
    }

    /**
     * Obtiene un dato del sessionStorage.
     * @param {string} key - Clave del dato que se desea obtener.
     * @returns {any} - El valor almacenado o `null` si no existe.
     */
    static getItem(key) {
        try {
            const serializedValue = sessionStorage.getItem(key);
            return serializedValue ? JSON.parse(serializedValue) : null;
        } catch (error) {
            console.error(`Error al obtener de sessionStorage con clave "${key}":`, error);
            return null;
        }
    }

    /**
     * Elimina un dato del sessionStorage.
     * @param {string} key - Clave del dato que se desea eliminar.
     */
    static removeItem(key) {
        try {
            sessionStorage.removeItem(key);
        } catch (error) {
            console.error(`Error al eliminar de sessionStorage con clave "${key}":`, error);
        }
    }

    /**
     * Limpia todos los datos del sessionStorage.
     */
    static clear() {
        try {
            sessionStorage.clear();
        } catch (error) {
            console.error("Error al limpiar sessionStorage:", error);
        }
    }
}
