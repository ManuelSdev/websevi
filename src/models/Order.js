import mongoose from 'mongoose'

const orderCartSchema = new mongoose.Schema({
    productName: String,
    productAmount: Number,
    productPrice: Number,
    productId: String,
    productImage: String
})

const orderSchema = new mongoose.Schema({
    userId: { type: String, index: true },
    amount: Number,
    date: Date,
    orderCart: [orderCartSchema],

})

const Order = mongoose.models.Order || mongoose.model('Order', orderSchema);

export default Order