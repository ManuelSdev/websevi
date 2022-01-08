
import Product from '../../../models/Product'
import dbConnect from '../../../lib/dbConnect'

export default async function handler(req, res) {
    await dbConnect()
    try {
        const { deletedCount } = await Product.deleteMany();
        console.log(`Eliminados ${deletedCount} productos.`);
        const result = await Product.insertMany(req.body)
        res.status(201).json({ result: result })

    } catch (err) {
        console.log("ERROR PRODUCT INIT", err.message)
        res.status(500)
    }
}
