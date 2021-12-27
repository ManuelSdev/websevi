import dbConnect from '../../../lib/dbConnect'
import Order from '../../../models/Order'

export default async function handler(req, res) {
    console.log('LA REQ CREATE PRODUC', req.body)
    try {
        await dbConnect()
        const newOrder = await new Order(req.body)
        const savedOrder = await newOrder.save()
        console.log('@@@@@@@@@@@@@@@@@@@', savedOrder)
        res.status(201)
            .json({ result: true, message: `El pedido con ID ${savedOrder._id} se ha creado correctamente` })
    } catch (err) {
        res.status(err.status ? 409 : 500)
    }



}