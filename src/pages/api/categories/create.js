import Categorie from '../../../models/Categorie'
import dbConnect from '../../../lib/dbConnect'
import { toPlainString } from '../../../lib/utils/plainString'
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
        const { categorie_1, categorie_2, categorie_3, categ_1_isNew: c1New, categ_2_isNew: c2New } = req.body

        const nameCateg_1 = categorie_1.trim()
        const nameCateg_2 = categorie_2.trim()
        const nameCateg_3 = categorie_3.trim()

        const idCateg_1 = toPlainString(nameCateg_1).replace('', '-')
        const idCateg_2 = categorie_2 && toPlainString(nameCateg_2).replace('', '-')
        const idCateg_3 = categorie_3 && toPlainString(nameCateg_3).replace('', '-')
        // const check = await Categorie.ex(categorie_1)
        // console.log('cehck cat', check)
        //throw new Error('El ')
        if (c1New && await Categorie.exists({ _id: idCateg_1 })) {
            const error = new Error(`Ya existe una categoría de nivel 1 llamada "${categorie_1}"`);
            error.status = 409
            throw error

        } else if (c2New && await Categorie.exists({ _id: idCateg_2 })) {
            const error = new Error(`Ya existe una categoría de nivel 2 llamada "${categorie_2}"`);
            error.status = 409
            throw error
        } else if (await Categorie.exists({ _id: idCateg_3 })) {
            const error = new Error(`Ya existe una categoría de nivel 3 llamada "${categorie_3}"`);
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
            c_1.childs = categorie_2 ? [idCateg_2] : []
            const newCateg_1 = await new Categorie(c_1)
            const saved_1 = await newCateg_1.save()
        }
        else if (!c1New && categorie_2) {
            //Busca documento con ese _id y hace push  en el array del campo "childs"
            await Categorie.findByIdAndUpdate(idCateg_1, { '$push': { "childs": idCateg_1 } }, {
                new: true,
                useFindAndModify: false
            })
        }

        if (c2New && categorie_2) {
            console.log('c2New && categorie_2')
            const c_2 =
            {
                _id: idCateg_2,
                name: nameCateg_2,
                level: 2,
                path: `,${idCateg_1},`,
            }
            c_2.childs = categorie_3 ? [idCateg_3] : []
            const newCateg_2 = await new Categorie(c_2)
            const saved_2 = await newCateg_2.save()
        } else if (!c2New) {

        }
        else if (!c2New && categorie_3) {
            console.log('!c2New && categorie_3')
            //Busca documento con ese _id y hace push  en el array del campo "childs"
            await Categorie.findByIdAndUpdate(idCateg_2, { '$push': { "childs": idCateg_3 } }, {
                new: true,
                useFindAndModify: false
            })
        }
        //TODO: if(!c2New)
        if (categorie_3) {
            const newCateg_3 = await new Categorie({
                _id: categorie_3,
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
        console.log("ERROR CATEGORIE CREATE", err.message)
        res.status(err.status ? 409 : 500)
            .send(err.message)
    }
}
