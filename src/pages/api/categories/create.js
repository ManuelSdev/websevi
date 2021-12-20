import Category from '../../../models/Category'
import dbConnect from '../../../lib/dbConnect'
import { toPlainString } from '../../../lib/utils/stringTools'
import { nameToUrl } from '../../../lib/utils/stringTools'
//import titleCase from '../../../lib/utils/titleCase'
export default async function handler(req, res) {
    console.log("REQ EN CREATE", req.body)
    /*
    const c1 = titleCase(categorie_1)
    const c2 = titleCase(categorie_2)
    const c3 = titleCase(categorie_3)
    */
    try {
        await dbConnect()
        const { category_1, category_2, category_3, categ_1_isNew: c1New, categ_2_isNew: c2New } = req.body
        console.log('category_2 -------------------', category_2)
        const nameCateg_1 = category_1.trim()
        const nameCateg_2 = category_2.trim()
        const nameCateg_3 = category_3.trim()
        console.log('nameCateg_2 -------------------', nameCateg_2)
        const idCateg_1 = toPlainString(nameCateg_1)
        //slice(1) suprime le guion inicial que añade el replace (no uso)
        const idCateg_2 = category_2 && toPlainString(nameCateg_2)
        console.log('idCateg_2 -------------------', idCateg_2)
        const idCateg_3 = category_3 && toPlainString(nameCateg_3)
        // const check = await Category.ex(category_1)
        // console.log('cehck cat', check)
        //throw new Error('El ')
        if (c1New && await Category.exists({ _id: idCateg_1 })) {
            const error = new Error(`Ya existe una categoría de nivel 1 llamada "${category_1}"`);
            error.status = 409
            throw error

        } else if (c2New && await Category.exists({ _id: idCateg_2 })) {
            const error = new Error(`Ya existe una categoría de nivel 2 llamada "${category_2}"`);
            error.status = 409
            throw error
        } else if (await Category.exists({ _id: idCateg_3 })) {
            const error = new Error(`Ya existe una categoría de nivel 3 llamada "${category_3}"`);
            error.status = 409
            throw error
        }
        //TODO: Mete más errores para controlar el envio de campos vacíos
        //console.log('hola', await Categorie.exists({ _id: categorie_1 }))
        //await Categorie.exists({ categorie_1 }) && new Error('El email ')
        /*
         const newCateg = await new Product(req.body)
         const saved = await newCateg.save()
         res.status(201).json({ result: saved })
         */
        if (c1New) {
            const c_1 =
            {
                _id: idCateg_1,
                name: nameCateg_1,
                level: 1,
                path: ',Root,',
            }
            c_1.childs = category_2 ? [idCateg_2] : []
            const newCateg_1 = await new Category(c_1)
            const saved_1 = await newCateg_1.save()
        }
        else if (!c1New && category_2) {
            //Busca documento con ese _id y hace push  en el array del campo "childs"
            await Category.findByIdAndUpdate(idCateg_1, { '$push': { "childs": idCateg_1 } }, {
                new: true,
                useFindAndModify: false
            })
        }

        if (c2New && category_2) {
            console.log('c2New && category_2')
            const c_2 =
            {
                _id: idCateg_2,
                name: nameCateg_2,
                level: 2,
                path: `,${idCateg_1},`,
            }
            c_2.childs = category_3 ? [idCateg_3] : []
            const newCateg_2 = await new Category(c_2)
            const saved_2 = await newCateg_2.save()
        } else if (!c2New) {

        }
        else if (!c2New && category_3) {
            console.log('!c2New && category_3')
            //Busca documento con ese _id y hace push  en el array del campo "childs"
            await Category.findByIdAndUpdate(idCateg_2, { '$push': { "childs": idCateg_3 } }, {
                new: true,
                useFindAndModify: false
            })
        }
        //TODO: if(!c2New)
        if (category_3) {
            const newCateg_3 = await new Category({
                _id: category_3,
                name: nameCateg_3,
                level: 3,
                path: `,${idCateg_1},${idCateg_2}`,
            })
            const saved_3 = await newCateg_3.save()
        }

        res.status(201)
            .json({ message: `El árbol de categorías /${nameCateg_1}/${nameCateg_2 && nameCateg_2}/${nameCateg_3 && nameCateg_3} se ha creado correctamente` })
        // throw new Error('uff')
    } catch (err) {
        console.log("ERROR Category CREATE", err.message)
        res.status(err.status ? 409 : 500)
            .send(err.message)
    }
}
