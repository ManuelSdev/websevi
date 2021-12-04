
import Categories from '../../../models/Categorie'
import dbConnect from '../../../lib/dbConnect'
//import categs from '../../../assets/categories'

export default async function handler(req, res) {
    await dbConnect()
    //console.log("req body init", req.body)

    try {
        console.log("req body init", req.body)

        const { deletedCount } = await Categories.deleteMany();
        console.log(`Eliminadas ${deletedCount} categorias.`);

        const result = await Categories.insertMany(req.body)

        res.status(201).json({ result: result })

    } catch (err) {
        console.log("ERROR CATEGORIES INIT", err.message)
        res.status(500)
    }
}
