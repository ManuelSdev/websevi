
import Order from '../../../models/Order'
import User from '../../../models/User'
import dbConnect from '../../../lib/dbConnect'
import Product from '../../../models/Product'

export default async function handler(req, res) {


    try {
        await dbConnect()
        const userOrders = await Order.find()
        res.status(201).json(userOrders)

    } catch (err) {
        console.log("ERROR ADMIN ORDERS GET", err.message)
        res.status(500)
    }
}
