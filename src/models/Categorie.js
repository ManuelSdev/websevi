

import mongoose from 'mongoose'
//TODO: REVISAR schemaTypes


//const Filter = mongoose.models.Filter || mongoose.model('Filter', filterSchema);

const categorieSchema = new mongoose.Schema({
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

categorieSchema.statics.ex = async function (_id) {
    console.log("_ID QUE LLEGA A EXIST: ", _id)
    /*
        const querys = Categorie.findById(_id)
         console.log('QUERYlllllllllllllllllllllllllllllllllllllllll')
        console.log('QUERY', querys)
        return await querys.exec();
        */
    const doesUserExit = await Categorie.exists({ _id });
    //  console.log('QUERY', doesUserExit)


}

const Categorie = mongoose.models.Categorie || mongoose.model('Categorie', categorieSchema);


export default Categorie





