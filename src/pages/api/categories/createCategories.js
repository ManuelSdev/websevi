import Category from '../../../models/Category'
import dbConnect from '../../../lib/dbConnect'
import { toPlainString } from '../../../lib/utils/stringTools'


//Los siguientes métodos, ejecutados mediante el pipe en el método final strToFiltersStructure , 
//Adaptan el string fields de tipo  'Marca:marca1/marca2, Color:color1/color2'
//a la estructura del campo fields [{Marca:[marca1,marca2]}, Color:[color1,color2]]

const pipe = (...fns) => arg => fns.reduce((acc, fn) => fn(acc), arg)
const mySplit = text => str => str.split(text)
const a = array => array.map(str => str.split(':'))
const b = array => array.map(subArray => subArray.map(str => str.split('/')))
const c = array => array.map(subArray => {
    const [key, values] = subArray
    return { [key]: values }
})
const strToFiltersStructure = str => pipe(
    mySplit(','),
    a,
    b,
    c
)(str)

export default async function handler(req, res) {
    console.log("REQ EN CREATE", req.body)

    try {
        await dbConnect()
        const { category_1, category_2, category_1_isNew: c1New, fields: str } = req.body
        const nameCategory_1 = category_1.trim()
        const nameCategory_2 = category_2.trim()

        const pathCategory_1 = toPlainString(nameCategory_1)
        const pathCategory_2 = category_2 && toPlainString(nameCategory_2)

        const fields = strToFiltersStructure(str)

        //Comprueba si las categorías introducidas ya existen en la bdd
        if (c1New && await Category.exists({ path: pathCategory_1 })) {
            const error = new Error(`Ya existe una categoría de nivel 1 llamada "${category_1}"`);
            error.status = 409
            throw error
        } else if (await Category.exists({ path: pathCategory_2 })) {
            const error = new Error(`Ya existe una categoría de nivel 2 llamada "${category_2}"`);
            error.status = 409
            throw error
        }
        //TODO: Mete más errores para controlar el envio de campos vacíos
        //valida desde el front tb
        if (c1New) {
            console.log('sNEWWWWWWWWWWWW *******************')
            const c_1 =
            {
                name: nameCategory_1,
                level: 1,
                path: pathCategory_1,
                parent: 'root'
            }
            c_1.childs = category_2 ? [nameCategory_2] : []
            const newCategory_1 = await new Category(c_1)
            const saved_1 = await newCategory_1.save()
            console.log('saveddddddddddddddddddddddddddd********************', saved_1)
        }
        else if (!c1New && category_2) {
            //Busca documento con ese _id y hace push  en el array del campo "childs"
            /**
             * Si category_1 ya existe, busca la categoría con ese path y hace push 
             *  en el array del campo "childs" para introducir el name de category_2
             */
            await Category.findOneAndUpdate({ path: pathCategory_1 }, { '$push': { "childs": nameCategory_2 } }, {
                new: true,
                useFindAndModify: false
            })
        }

        if (category_2) {
            const newCategory_2 = await new Category({
                name: nameCategory_2,
                level: 2,
                path: pathCategory_2,
                parent: pathCategory_1,
                fields
            })
            const saved_2 = await newCategory_2.save()
        }

        res.status(201)
            .json({ message: `El árbol de categorías /${nameCategory_1}/${nameCategory_2 && nameCategory_2} se ha creado correctamente` })
        // throw new Error('uff')
    } catch (err) {
        console.log("ERROR Category CREATE", err.message)
        res.status(err.status ? 409 : 500)
            .send(err.message)
    }
}
