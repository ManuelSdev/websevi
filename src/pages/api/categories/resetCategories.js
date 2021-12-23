
import Category from '../../../models/Category'
import dbConnect from '../../../lib/dbConnect'
//import categs from '../../../assets/categories'

export default async function handler(req, res) {
    await dbConnect()
    //console.log("req body init", req.body)

    try {
        // console.log("req body FILTERS", req.body.map(obj => obj.filters[1]))

        const { deletedCount } = await Category.deleteMany();
        console.log(`Eliminadas ${deletedCount} categorias.`);

        const result = await Category.insertMany(req.body)
        // console.log('RESULT**********', result.map(obj => obj.filters[1]))
        res.status(201).json({ result: result })

    } catch (err) {
        console.log("ERROR CATEGORIES INIT", err.message)
        res.status(500)
    }
}
