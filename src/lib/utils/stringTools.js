/**
 * Este método convierte un string en minúsculas y elimina los diacríticos
 * Usado principalmente para generar nombres de rutas dinámicas
 * a partir de los nombres usados en las categorías
 */
export const toPlainString = str => str.toLowerCase()
    .replace(/\s/g, "-") //Cambia espacios por guiones
    .normalize("NFD").replace(/[\u0300-\u036f]/g, "") //Eliminan diacríticos



//Cambia '' por '-' para evitar que los espacios se conviertan en '%' en las urls dinámicas
export const nameToUrl = str => str.replace(/\s/g, "-")
