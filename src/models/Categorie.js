

import mongoose from 'mongoose'

const categorieSchema = new mongoose.Schema({
    //_id: { type: String, unique: true },
    _id: String,
    level: { type: Number, index: true },
    path: String,


})

//const Categorie = mongoose.model('Categorie', categorieSchema)

//export default mongoose.models('Categorie') || Categorie

export default mongoose.models.Categorie || mongoose.model('Categorie', categorieSchema);
/*
const getCategorie = () => {
    if (mongoose.models && mongoose.models.Categorie)

        return mongoose.model('Categorie', categorieSchema)
}

export const Categor = getCategorie()
*/