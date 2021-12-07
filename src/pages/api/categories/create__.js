import Categorie from '../../../models/Categorie'
import dbConnect from '../../../lib/dbConnect'
//import titleCase from '../../../lib/utils/titleCase'
export default async function handler(req, res) {
    console.log("cat 1 mod", req.body)
    /*
    const c1 = titleCase(categorie_1)
    const c2 = titleCase(categorie_2)
    const c3 = titleCase(categorie_3)
    */
    console.log("cat 1 mod", req.body)
    try {
        const { categorie_1, categorie_2, categorie_3, categ_1_isNew: c1New, categ_1_isNew: c2New } = req.body
        await dbConnect()
        // const check = await Categorie.ex(categorie_1)
        // console.log('cehck cat', check)
        //throw new Error('El ')
        if (c1New && await Categorie.exists({ _id: categorie_1 })) {
            const error = new Error(`Ya existe una categoría de nivel 1 llamada "${categorie_1}"`);
            error.status = 409
            throw error

        } else if (c2New && await Categorie.exists({ _id: categorie_2 })) {
            const error = new Error(`Ya existe una categoría de nivel 2 llamada "${categorie_2}"`);
            error.status = 409
            throw error
        } else if (await Categorie.exists({ _id: categorie_3 })) {
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
            const newCateg_1 = await new Categorie({
                _id: categorie_1,
                level: 1,
                path: ',Root,',
            })
            const saved_1 = await newCateg_1.save()
        }
        if (c2New && categorie_2) {
            const newCateg_2 = await new Categorie({
                _id: categorie_2,
                level: 2,
                path: `,${categorie_1},`,
            })
            const saved_2 = await newCateg_2.save()
        }
        if (categorie_3) {
            const newCateg_3 = await new Categorie({
                _id: categorie_3,
                level: 3,
                path: `,${categorie_1},${categorie_2}`,
            })
            const saved_3 = await newCateg_3.save()
        }

        res.status(201)
            .json({ message: `El árbol de categorías /${categorie_1}${categorie_2 && categorie_2}/${categorie_3 && categorie_3} se ha creado correctamente` })
        // throw new Error('uff')
    } catch (err) {
        console.log("ERROR CATEGORIE CREATE", err.message)
        res.status(err.status ? 409 : 500)
            .send(err.message)
    }
}
