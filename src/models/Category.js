

import mongoose from 'mongoose'
//TODO: REVISAR schemaTypes


//const Filter = mongoose.models.Filter || mongoose.model('Filter', filterSchema);

const categorySchema = new mongoose.Schema({
    //_id: { type: String, unique: true },
    _id: String,
    level: { type: Number, index: true },
    childs: { type: [String], index: true },
    parent: String,
    name: { type: String, unique: true },
    path: String,

    // filters: [{ f: [String] }]
    // filters: { type: [filterSchema] },
    filters: [{
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





