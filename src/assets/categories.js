
const initialCategories = [

    {
        path: null,
        ids: ['Root'],
        level: 0
    },
    {
        path: ',Root,',
        ids: ['Componentes', 'Períféricos', 'Ordenadores'],
        level: 1
    },

    {
        path: ',Componentes,',
        ids: ['Placas base', 'Procesadores', 'Tarjetas gráficas', 'Memoria RAM', 'Almacenamiento', 'Refrigeración', 'Otros componentes'],
        level: 2
    },
    {
        path: ',Períféricos,',
        ids: ['Teclados', 'Ratones', 'Alfombrillas', 'Monitores', 'Auriculares', 'Altavoces', 'Micrófonos', 'Webcams', 'Almacenamiento externo', 'Redes'],

        level: 2
    },
    {
        path: ',Ordenadores,',
        ids: ['Portátiles', 'Sobremesa'],
        level: 2
    },
    {
        path: ',Componentes,Procesadores,',
        ids: ['Procesadores INTEL', 'Procesadores AMD'],
        level: 3
    },

    {
        path: ',Componentes,Placas base,',
        ids: ['Placas base INTEL', 'Placas base AMD'],
        level: 3
    },
    {
        path: ',Componentes,Tarjetas gráficas,',
        ids: ['Tarjetas gráficas NVIDIA', 'Tarjetas gráficas AMD'],
        level: 3
    },
    {
        path: ',Componentes,Memoria RAM,',
        ids: ['DIMM', 'SODIMM'],
        level: 3
    },
    {
        path: ',Componentes,Almacenamiento,',
        ids: ['HDD', 'SSD'],
        level: 3
    },
    {
        path: ',Componentes,Refrigeración,',
        ids: ['Aire', 'Líquida'],
        level: 3
    },
    {
        path: ',Componentes,Otros componentes,',
        ids: ['Cajas de ordenador', 'Fuentes de alimentación', 'Tarjetas de sonido', 'Capturadoras', 'Unidades ópticas'],
        level: 3
    },

    {
        path: ',Periféricos,Almacenamiento externo,',
        ids: ['Discos externos', 'Memorias USB', 'Tarjetas de memoria'],
        level: 3
    },
    {
        path: ',Periféricos,Redes,',
        ids: ['Adaptadores de red', 'Cables', 'Antenas', 'Routers', 'Repetidores', 'Switches'],
        level: 3
    },
    {
        path: ',Ordenadores,Portátiles,',
        ids: ['MSI', 'Asus', 'Gigabyte', 'Lenovo', 'Dell', 'HP'],
        level: 3
    },
    {
        path: ',Ordenadores,Sobremesa,',
        ids: ['Gaming', 'Workstation', 'All-in-one', 'Básico', 'A medida'],
        level: 3
    },
]

const allCategsOnArray = () => {
    const a = initialCategories.map(elem =>
        elem.ids.map(id => {
            return {
                _id: id,
                path: elem.path,
                level: elem.level

            }
        })
    )
    var merged = [].concat.apply([], a);
    return merged
}


export default allCategsOnArray