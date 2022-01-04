

import mongoose from 'mongoose'
//TODO: REVISAR schemaTypes


//const Filter = mongoose.models.Filter || mongoose.model('Filter', filterSchema);

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
    console.log("_ID QUE LLEGA A EXIST: ", _id)
    /*
        const querys = Categorie.findById(_id)
         console.log('QUERYlllllllllllllllllllllllllllllllllllllllll')
        console.log('QUERY', querys)
        return await querys.exec();
        */
    const doesCategoryExit = await Category.exists({ _id });
    //  console.log('QUERY', doesUserExit)


}

const Category = mongoose.models.Category || mongoose.model('Category', categorySchema);


export default Category





