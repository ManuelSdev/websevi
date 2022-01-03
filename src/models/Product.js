import mongoose from 'mongoose'
console.log('jhsdljkhjksdhsjh')
const productSchema = mongoose.Schema({
    name: { type: String, unique: true, index: true },
    brand: { type: String, index: true },
    price: { type: Number, index: true },
    chipset: { type: String, index: true },
    size: { type: String, index: true },
    featured: false,
    url: String,
    ean: { type: String, unique: true },
    categories: { type: [String], index: true },
    filters: { type: [String], index: true },
    specs: { type: [String] },

    images: { type: [String] },
    description: { type: String, index: true },

})

//productSchema.index({ name: 'text' });
productSchema.index({ name: 'text', categories: 'text', size: 'text', description: 'text' })
const Product = mongoose.models.Product || mongoose.model('Product', productSchema);
export default Product