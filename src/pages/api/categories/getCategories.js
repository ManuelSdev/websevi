
import Category from '../../../models/Category'
import dbConnect from '../../../lib/dbConnect'

export async function getCategories(filters) {
    await dbConnect()

    const categories = await Category.find(filters)
    return categories
}

export default async function handler(req, res) {

    const filters = req.query
    try {
        await dbConnect()
        const result = await getCategories(filters)

        res.status(201).json(result)

    } catch (err) {
        console.log("ERROR CATEGORIES GET", err.message)
        res.status(500)
    }
}
