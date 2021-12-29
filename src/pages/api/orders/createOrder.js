import dbConnect from '../../../lib/dbConnect'
import Order from '../../../models/Order'
import User from '../../../models/User'
export default async function handler(req, res) {
    console.log('LA REQ CREATE PRODUC', req.body)
    try {
        await dbConnect()
        //AÑADIR PEDIDO A LA BDD
        //Añade fecha al pedido
        const order = { date: new Date(), ...req.body }
        const newOrder = await new Order(order)
        const savedOrder = await newOrder.save()

        //AÑADIR PEDIDO AL USUARIO QUE LO HA REALIZADO
        const { userId } = req.body
        const { _id: orderId } = savedOrder
        // console.log('####### ORDER ID', orderId)
        await User.findByIdAndUpdate({ _id: userId }, { '$push': { orders: orderId } }, {
            new: true,
            useFindAndModify: false
        })

        console.log('@@@@@@@@@@@@@@@@@@@', savedOrder)
        res.status(201).json({ result: true, message: `El pedido con ID ${savedOrder._id} se ha creado correctamente` })
    } catch (err) {
        res.status(err.status ? 409 : 500).json({ err })
    }



}