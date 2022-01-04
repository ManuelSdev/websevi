
import Product from '../../../models/Product'
import dbConnect from '../../../lib/dbConnect'

export async function getProducts(...filters) {
    console.log('********************************************getProducts FILTERS', [...filters])

    //Crea una estructura de busqueda similar a db.collection.find( { $text: { $search: "coffee" } } )
    /*
    const filters = {}
    filters.$text = {}
    filters.$text.$search = keys
    */
    await dbConnect()

    const products = await Product.find(...filters)
    // console.log('PRODS DE LA QUERY GET', products)
    //return JSON.parse(JSON.stringify(products))
    return products
}
export default async function handler(req, res) {
    console.log('HOLAAAA')
    /*
    const filters = {};
    filters.$text = {}
    filters.$text.$search = req.query.searchKeys
*/
    console.log("FILTERRSSSS", req.query)
    //console.log("req body init", filters)
    try {
        const result = await getProducts(filters)
        res.status(201).json({ result })

    } catch (err) {
        console.log("ERROR PRODUCT GET", err.message)
        res.status(500)
    }
}
