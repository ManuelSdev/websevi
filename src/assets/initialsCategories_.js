import { toPlainString } from "../lib/utils/stringTools"
const initialCategories = [
    {
        path: ',Root,',
        childsNames: ['Componentes', 'Periféricos', 'Ordenadores', 'Móviles', 'Tablets'],
        level: 1

    },

    {
        path: ',Componentes,',
        childsNames: ['Placas base', 'Procesadores', 'Tarjetas gráficas', 'Memoria RAM', 'Almacenamiento', 'Refrigeración', 'Otros componentes'],
        level: 2
    },
    {
        path: ',Periféricos,',
        childsNames: ['Teclados', 'Ratones', 'Alfombrillas', 'Monitores', 'Auriculares', 'Altavoces', 'Micrófonos', 'Webcams', 'Almacenamiento externo', 'Redes'],

        level: 2
    },
    {
        path: ',Ordenadores,',
        childsNames: ['Portátiles', 'Sobremesa'],
        level: 2
    }
]

/**
 * Convierte el array de categorias en un bidimensional.
 * Cada sub array contiene objetos y cada objeto contiene los datos de una categoría
 * Finalmente, aplana el array bidimensional en un array unidimensional con todos
 * los objetos/categorías y lo retorna
 */
const allCategsOnArray = () => {
    /**
     * 
     * @param {array} array - El array de categorías "initialCategories"
     * @param {object} elem 
     * @param {string} childName 
     * @returns {array} - Un array con los childs/subcategorías de la categoría con el nombre del param childName
     * 
     * Este método vuelve a recorrer el array "initialCategories" y devuelve las subcategorías/childNames
     * de cada categoría
     */
    const setSubcategories = (array, elem, childName) => {
        const categsOk = array.filter(object =>
            (elem.level === 1 && object.path === `,${childName},`) ||
            (elem.level === 2 && object.path === `${elem.path}${childName},`)
        )
        const [op] = categsOk.length > 0 ? categsOk : [{ childName: '' }]
        const { childsNames } = op
        return childsNames
    }

    const array2d = initialCategories.map((elem, index, array) =>
        elem.childsNames.map(childName => {
            return {
                _id: toPlainString(childName),
                name: childName,
                childs: setSubcategories(array, elem, childName),
                path: toPlainString(elem.path),
                level: elem.level
            }
        })
    )
    var merged = [].concat.apply([], array2d);

    return merged
}


export default allCategsOnArray

