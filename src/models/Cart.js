
import mongoose from 'mongoose'

const cartSchema = new mongoose.Schema({
    userId: { type: String, unique: true, index: true },
    productsIds: { type: [String], index: true }

})



const Cart = mongoose.models.Cart || mongoose.model('Cart', cartSchema);


export default Categorie
