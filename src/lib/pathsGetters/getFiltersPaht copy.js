import { toPlainString } from "../utils/stringTools";

/**
 * Este método extrae uno o más padres del
 * campo path del una categoría
 */



const pathToArray = path => numberOfParents => path.split(',').slice(1, 1 + numberOfParents)

/**
    * como estamos en la ruta /pages/categories/[...categoriesId].js,
    * getStaticPaths define las rutas dinámicas a partir de un ARRAY de este tipo
    * paths= [
    * { params: { categoriesId: ["id1"] } },
    * { params: { categoriesId: ["id2"] } },
    * { params: { categoriesId: ["padre1", "id3"] } }
    * ],
    * creaando las siguientes rutas
    *     caegories/id1
    *     categories/id2
    *     /categories/padre1/id3
    *  Cuando la categoría es de nivel 2, su ruta será como el último ejemplo
    *  const deepPath genera un array cuyos elementos son uno o más 
    *  padres del campo "path" de una categoría + el id de la propia categoría
    *  si el path=",padre1,padre2,", indicamos cuantos padres queremos 
    *  extraer del path con pathToArray(path)(númeroDePadres)
    *  En este caso, como solo usaremos rutas de nivel 2, extraemos solo el primer padre
    */
//console.log('*********************************', categories)
//TODO: refactoriza y crea modulo en lib con esto

/**
 * Recibe una categoria que tiene un campo filters
 * filters es un array de objetos
 * cada objeto contiene una clave es un array con los nombres de filtros asociados al nombre de la clave
 * Este método fusiona los filtros de todas las claves, de manera ordenada, en un único array
 * Devuelve un array con todos los filtros formateados para usarlos como urls
 * ej 'Nombre A' -> 'nombre-a'
 */
const categoryFiltersInOneArray = category => {
    const arrayOfFiltersArrays = category.filters.map(filter => {
        const key = Object.keys(filter)
        return filter[`${key}`]

    })
    const merged = [].concat.apply([], arrayOfFiltersArrays);
    const mergedFormated = merged.length > 0 ?
        merged.map(filter => toPlainString(filter))
        :
        ['1', '2']
    return mergedFormated
}




/**
 * El ARRAY path de  /pages/[categoryPath]/[...filters].js tiene esta estructura 
 * paths=[
 * { params: { categoryPath: 'placas-base', filters: ['msi'...TODOS los filtros] } },
 * { params: { categoryPath: 'procesadores', filters: ['msi'...TODOS los filtros] } }
 * ]
 * Es decir, por cada categoría/categorí path, hay que añadir todos los filter correspondientes
 * a esa categoría para generar las posibles combinaciones de url
 * ++++La url establece los filters /msi/asus/etc en mismo orden del array filters
 */

const getFiltersPath = (categories) => categories.map(category => {
    //obtiene un solo array con todos los valores de sus filtros
    const arrayOfFilters = categoryFiltersInOneArray(category)
    //genero el path de esta categoría
    const path = { params: { categoryPath: `${category.path}`, filters: [...arrayOfFilters] } }
    return path
})



export default getFiltersPath