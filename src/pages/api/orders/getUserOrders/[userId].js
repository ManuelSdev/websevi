
import Order from '../../../../models/Order'
import User from '../../../../models/User'
import dbConnect from '../../../../lib/dbConnect'
import Product from '../../../../models/Product'

export default async function handler(req, res) {
    const { userId } = req.query

    try {
        await dbConnect()
        //El campo orders del modelo User es un array con los id´s de los pedidos que ha hecho el usuario
        const { orders } = await User.findById(userId, 'orders')
        const userOrders = await Promise.all(
            orders.map(async function (orderId) {
                return await Order.findById(orderId)
            })
        ).then(userOrders => userOrders)
        res.status(201).json(userOrders)

    } catch (err) {
        console.log("ERROR PRODUCT GET", err.message)
        res.status(500)
    }
}
