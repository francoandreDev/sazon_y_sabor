export default class Fecha {
  static formatearFecha(isoDate) {
    // Convierte la cadena en un objeto Date
    const fecha = new Date(isoDate);

    // Extrae los componentes de la fecha
    const dia = String(fecha.getDate()).padStart(2, "0");
    const mes = String(fecha.getMonth() + 1).padStart(2, "0"); // Los meses son 0-indexados
    const anio = fecha.getFullYear();
    const horas = String(fecha.getHours()).padStart(2, "0");
    const minutos = String(fecha.getMinutes()).padStart(2, "0");
    const segundos = String(fecha.getSeconds()).padStart(2, "0");

    // Devuelve la fecha en formato legible
    return `${dia}/${mes}/${anio} ${horas}:${minutos}:${segundos}`;
  }
}
