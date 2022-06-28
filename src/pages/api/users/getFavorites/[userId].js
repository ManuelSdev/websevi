
import User from '../../../../models/User'
import dbConnect from '../../../../lib/dbConnect'
import Product from '../../../../models/Product'

export default async function handler(req, res) {
    const { userId } = req.query
    try {
        await dbConnect()
        const { favorites } = await User.findById(userId, 'favorites')
        const favoritesProducts = await Promise.all(
            favorites.map(async function (_id) {
                return await Product.findById(_id)
            })
        ).then(allFavoritesProducts => allFavoritesProducts)
        res.status(201).json(favoritesProducts)

    } catch (err) {
        console.log("ERROR PRODUCT GET", err.message)
        res.status(500)
    }
}
