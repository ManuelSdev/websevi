import mongoose from 'mongoose'

const productSchema = mongoose.Schema({
    name: { type: String, unique: true },
    brand: { type: String },
    price: { type: Number, index: true },
    active: false,
    categorie_1: { type: String, index: true },
    userFavorites: { type: [String], index: true },
    images: String,
    description: String,

})

const Product = mongoose.model('Product', productSchema)

export default Product