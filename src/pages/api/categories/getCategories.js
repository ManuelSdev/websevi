
import Category from '../../../models/Category'
import dbConnect from '../../../lib/dbConnect'
//import categs from '../../../assets/categories'

export async function getCategories(filters) {
    //console.log('********************************************getCategories')
    await dbConnect()

    const categories = await Category.find(filters)
    // console.log('PRODS DE LA QUERY GET', cat)
    return categories
}

export default async function handler(req, res) {

    const filters = req.query
    //console.log("req body init", req.body)
    console.log("req body init", filters)
    try {
        await dbConnect()
        const result = await getCategories(filters)

        res.status(201).json(result)

    } catch (err) {
        console.log("ERROR CATEGORIES GET", err.message)
        res.status(500)
    }
}











/*
export async function getCategories(filters) {
    console.log('HOLA')
    await dbConnect()
    console.log("req body init", filters)
    const result = filters.path ?
        //const result = await Categorie.find({ path: /,Componentes,/ })
        //await Categorie.find({ path: /,Componentes,[^,]+,$/ })
        //await Categorie.find({ path: /,Placas base,$/ })
        await Categorie.find({ path: new RegExp(`,${filters.path},$`) })
        :
        await Categorie.find(filters).exec()
    return result
}


export default async function handler(req, res) {

    try {

        const result = getCategories()

        res.status(201).json(result)

    } catch (err) {
        console.log("ERROR CATEGORIES GET", err.message)
        res.status(500)
    }
}
*/