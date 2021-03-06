import mongoose from 'mongoose'
const productSchema = mongoose.Schema({
    name: { type: String, unique: true, index: true, "sparse": true },
    Marca: { type: String, index: true },
    price: { type: Number, index: true },
    Chipset: { type: String, index: true },
    Tamaño: { type: String, index: true },
    featured: false,
    url: String,
    ean: { type: String },
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