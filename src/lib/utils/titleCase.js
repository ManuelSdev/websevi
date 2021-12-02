/**
 * Este método convierte en mayúscula la primera letra de una palabra
 * y en mínusculas el resto de letras
 */

export default function titleCase(string) {
    return string[0].toUpperCase() + string.slice(1).toLowerCase();
}
console.log(titleCase('Download Price History'));