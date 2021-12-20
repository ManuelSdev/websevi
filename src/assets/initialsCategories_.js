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
        // console.log('#################', childsNames)
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

    console.log(merged)
    /*
        const categsWithFilters = merged.map(elem => {
            elem.filters = elem.level === 1 ?
                [...[1, 2]]
                :
                elem.id === 'procesadores' ?
                    { brand: ['AMD', 'Intel'] }
                    :
                    elem.id === 'placas-base' ?
                        [
                            { brand: ['ASUS', 'Gigabyte', 'AsRock', 'MSI'] },
                            { chipset: ['AMD B550', 'AMD X570', 'Intel z690'] },
                            { size: ['ATX', 'mATX', 'ITX'] }
                        ]
                        :
                        []
        })
    */
    return merged
}


export default allCategsOnArray

/*
,
    {
        path: ',Componentes,Procesadores,',
        childsNames: ['Procesadores INTEL', 'Procesadores AMD'],
        level: 3
    },

    {
        path: ',Componentes,Placas base,',
        childsNames: ['Placas base INTEL', 'Placas base AMD'],
        level: 3
    },
    {
        path: ',Componentes,Tarjetas gráficas,',
        childsNames: ['Tarjetas gráficas NVIDIA', 'Tarjetas gráficas AMD'],
        level: 3
    },
    {
        path: ',Componentes,Memoria RAM,',
        childsNames: ['DIMM', 'SODIMM'],
        level: 3
    },
    {
        path: ',Componentes,Almacenamiento,',
        childsNames: ['HDD', 'SSD'],
        level: 3
    },
    {
        path: ',Componentes,Refrigeración,',
        childsNames: ['Aire', 'Líquida'],
        level: 3
    },
    {
        path: ',Componentes,Otros componentes,',
        childsNames: ['Cajas de ordenador', 'Fuentes de alimentación', 'Tarjetas de sonido', 'Capturadoras', 'Unidades ópticas'],
        level: 3
    },

    {
        path: ',Periféricos,Almacenamiento externo,',
        childsNames: ['Discos externos', 'Memorias USB', 'Tarjetas de memoria'],
        level: 3
    },
    {
        path: ',Periféricos,Redes,',
        childsNames: ['Adaptadores de red', 'Cables', 'Antenas', 'Routers', 'Repetidores', 'Switches'],
        level: 3
    },
    {
        path: ',Ordenadores,Portátiles,',
        childsNames: ['MSI', 'Asus', 'Gigabyte', 'Lenovo', 'Dell', 'HP'],
        level: 3
    },
    {
        path: ',Ordenadores,Sobremesa,',
        childsNames: ['Gaming', 'Workstation', 'All-in-one', 'Básico', 'A medida'],
        level: 3
    },
    */