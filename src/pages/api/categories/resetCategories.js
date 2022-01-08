
import Category from '../../../models/Category'
import dbConnect from '../../../lib/dbConnect'

export default async function handler(req, res) {
    await dbConnect()

    try {
        const { deletedCount } = await Category.deleteMany();
        const result = await Category.insertMany(req.body)
        res.status(201).json({ result: result })

    } catch (err) {
        console.log("ERROR CATEGORIES INIT", err.message)
        res.status(500)
    }
}
