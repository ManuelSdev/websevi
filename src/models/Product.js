import mongoose from 'mongoose'
console.log('jhsdljkhjksdhsjh')
const productSchema = mongoose.Schema({
    name: { type: String, unique: true },
    brand: { type: String },
    price: { type: Number, index: true },
    featured: false,

    categories: { type: [String], index: true },

    images: String,
    description: String,

})



const Product = mongoose.models.Product || mongoose.model('Product', productSchema);
export default Product