
import { toPlainString } from "../lib/utils/stringTools"

const initialsCategories = [
    {
        level: 1,
        name: 'Componentes',
        parent: 'root',
        childs: ['Placas base', 'Procesadores', 'Tarjetas gráficas', 'Memoria RAM', 'Almacenamiento', 'Refrigeración', 'Otros componentes'],


    },
    {
        level: 1,
        name: 'Periféricos',
        parent: 'root',
        childs: ['Teclados', 'Ratones', 'Alfombrillas', 'Monitores', 'Auriculares', 'Altavoces', 'Micrófonos', 'Webcams', 'Almacenamiento externo', 'Redes'],


    },
    {
        level: 1,
        name: 'Ordenadores',
        parent: 'root',
        childs: ['Portátiles', 'Sobremesa'],


    },
    {
        level: 2,
        name: 'Procesadores',
        parent: 'componentes',
        filters:
            [
                { brand: ['AMD', 'Intel'] }
            ]

    },
    {
        level: 2,
        name: 'Placas base',
        parent: 'componentes',
        filters:
            [
                { brand: ['ASUS', 'Gigabyte', 'Asrock', 'MSI'] },
                { chipset: ['AMD B550', 'AMD X570', 'Intel Z690'] },
                { size: ['ATX', 'mATX', 'ITX'] }
            ]

    },
    {
        level: 2,
        name: 'Tarjetas gráficas',
        parent: 'componentes',

    },
    {
        level: 2,
        name: 'Memoria RAM',
        parent: 'componentes',

    },
    {
        level: 2,
        name: 'Almacenamiento',
        parent: 'componentes',

    },
    {
        level: 2,
        name: 'Refrigeración',
        parent: 'componentes',

    },
    {
        level: 2,
        name: 'Otros componentes',
        parent: 'componentes',

    },
    {
        level: 2,
        name: 'Teclados',
        parent: 'Periféricos',

    },
    {
        level: 2,
        name: 'Ratones',
        parent: 'Periféricos',

    },
    {
        level: 2,
        name: 'Alfombrillas',
        parent: 'Periféricos',


    },
    {
        level: 2,
        name: 'Monitores',
        parent: 'Periféricos',


    },
    {
        level: 2,
        name: 'Auriculares',
        parent: 'Periféricos',


    },
    {
        level: 2,
        name: 'Altavoces',
        parent: 'Periféricos',


    },
    {
        level: 2,
        name: 'Micrófonos',
        parent: 'Periféricos',


    },
    {
        level: 2,
        name: 'Webcams',
        parent: 'Periféricos',


    },
    {
        level: 2,
        name: 'Almacenamiento externo',
        parent: 'Periféricos',


    },
    {
        level: 2,
        name: 'Redes',
        parent: 'Periféricos',


    },

    {
        level: 2,
        name: 'Sobremesa',
        parent: 'Ordenadores',


    },
    {
        level: 2,
        name: 'Portátiles',
        parent: 'Ordenadores',


    },

]

const addElements = (categories) => categories.map(categ => {
    categ.path = toPlainString(categ.name)

    categ.parent = toPlainString(categ.parent)
    return categ
})




const modCategories = addElements(initialsCategories)
//console.log('hiodsjs//////////////', modCategories)
export default modCategories

/*
{ brand: ['ASUS', 'Gigabyte', 'AsRock', 'MSI'] },
                { chipset: ['AMD B550', 'AMD X570', 'Intel Z690'] },
                { size: ['ATX', 'mATX', 'ITX'] }

                */