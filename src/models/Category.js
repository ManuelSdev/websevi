import mongoose from 'mongoose'

//TODO: REVISAR schemaTypes

const categorySchema = new mongoose.Schema({
    level: { type: Number, index: true },
    childs: { type: [String], index: true },
    parent: String,
    name: { type: String, unique: true, index: true },
    path: { type: String, unique: true, index: true },
    //fields es un array de objetos/maps
    //cada valor de una propiedad del objeto será un array de string
    fields: [{
        type: Map,
        of: [String]
    }]
})

categorySchema.statics.ex = async function (_id) {
    const doesCategoryExit = await Category.exists({ _id });
}

const Category = mongoose.models.Category || mongoose.model('Category', categorySchema);

export default Category





