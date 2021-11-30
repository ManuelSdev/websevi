
import Categorie from '../../../models/Categorie'
import dbConnect from '../../../lib/dbConnect'
//import categs from '../../../assets/categories'

export default async function handler(req, res) {
    await dbConnect()
    const filters = req.query
    //console.log("req body init", req.body)
    console.log("req body init", filters)
    try {
        const result = filters.path ?
            //const result = await Categorie.find({ path: /,Componentes,/ })
            //await Categorie.find({ path: /,Componentes,[^,]+,$/ })
            //await Categorie.find({ path: /,Placas base,$/ })
            await Categorie.find({ path: new RegExp(`,${filters.path},$`) })
            :
            await Categorie.find(filters, '_id').exec()


        res.status(201).json(result)

    } catch (err) {
        console.log("ERROR CATEGORIES GET", err.message)
        res.status(500)
    }
}
