
import Category from '../../../models/Category'
import dbConnect from '../../../lib/dbConnect'
//import categs from '../../../assets/categories'

export default async function handler(req, res) {
    await dbConnect()
    // const filters = req.query
    //console.log("req body init", req.body)
    //console.log("req body init", filters)
    try {
        const result = await Category.find().sort({ path: 1 })




        res.status(201).json(result)

    } catch (err) {
        console.log("ERROR CATEGORIES GET", err.message)
        res.status(500)
    }
}
