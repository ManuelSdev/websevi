/**
 * Este método extrae uno o más padres del
 * campo path del una categoría
 */



const pathToArray = path => numberOfParents => path.split(',').slice(1, 1 + numberOfParents)

/**
    * como estamos en la ruta /pages/categories/[...cid].js,
    * getStaticPaths define las rutas dinámicas a partir de un objeto de este tipo
    * paths: [
    * { params: { cid: ["id1"] } },
    * { params: { cid: ["id2"] } },
    * { params: { cid: ["padre1", "id3"] } }
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
export const getCategsPath = categories => categories.map(categ => {
    console.log('****************************,categories')
    const deepPath = Array.from(
        [
            ...pathToArray(categ.path)(1)
            , categ._id
        ]
    )

    return categ.level === 1 ?
        console.log('-------------------------', categ._id) || { params: { cid: [categ._id] } }
        :
        console.log('+++++++++++++++++', deepPath) || { params: { cid: deepPath } }
})
