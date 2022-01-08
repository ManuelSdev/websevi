
import Product from '../../../models/Product'
import dbConnect from '../../../lib/dbConnect'

export async function getProducts(...filters) {

    await dbConnect()
    const products = await Product.find(...filters)
    return products
}

export default async function handler(req, res) {
    try {
        const result = await getProducts(filters)
        res.status(201).json({ result })

    } catch (err) {
        console.log("ERROR PRODUCT GET", err.message)
        res.status(500)
    }
}
