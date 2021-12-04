import mongoose from 'mongoose'

const productSchema = mongoose.Schema({
    name: { type: String, unique: true },
    brand: { type: String },
    price: { type: Number, index: true },
    active: false,

    userFavorites: { type: [String], index: true },
    categories: { type: [String], index: true },

    images: String,
    description: String,

})



export default mongoose.models.Product || mongoose.model('Product', productSchema);