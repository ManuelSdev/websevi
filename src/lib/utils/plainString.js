/**
 * Este método convierte un string en minúsculas y elimina los diacríticos
 * Usado principalmente para generar nombres de rutas dinámicas
 * a partir de los nombres usados en las categorías
 */
const toPlainString = str => str.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")

export default toPlainString