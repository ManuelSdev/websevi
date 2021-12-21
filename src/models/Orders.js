import mongoose from 'mongoose'

const orderSchema = mongoose.Schema({
    username: { type: String, unique: true },
    products: { type: [String], unique: true },
    amount: { type: Number, index: true },
    status: { type: String, unique: true },
    favorites: { type: [String], index: true },

    date: Date

})

const Order = mongoose.models.Order || mongoose.model('Order', orderSchema);

export default User