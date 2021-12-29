
import Order from '../../../../models/Order'
import User from '../../../../models/User'
import dbConnect from '../../../../lib/dbConnect'
import Product from '../../../../models/Product'

export default async function handler(req, res) {
    console.log('REQ QUERY GET ORDERS', req.query)
    const { userId } = req.query

    try {
        await dbConnect()
        const { orders } = await User.findById(userId, 'orders')
        console.log('primeros favoritos', orders)
        const userOrders = await Promise.all(
            orders.map(async function (orderId) {
                return await Order.findById(orderId)
            })
        ).then(userOrders => console.log('ESTO', userOrders) || userOrders)
        console.log('favoritesProducts', userOrders)
        res.status(201).json(userOrders)

    } catch (err) {
        console.log("ERROR PRODUCT GET", err.message)
        res.status(500)
    }
}
