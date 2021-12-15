
import Product from '../../../models/Product'
import dbConnect from '../../../lib/dbConnect'

export async function getProducts(filters) {
    //console.log('HOLAaaaaa', filters)
    await dbConnect()
    const products = await Product.find(filters)
    // console.log('PRODS DE LA QUERY GET', products)
    //return JSON.parse(JSON.stringify(products))
    return products
}
export default async function handler(req, res) {

    const filters = req.query
    //console.log("req body init", req.body)
    //console.log("req body init", filters)
    try {
        const result = await getProducts()
        res.status(201).json(result)

    } catch (err) {
        console.log("ERROR PRODUCT GET", err.message)
        res.status(500)
    }
}
