

import mongoose from 'mongoose'

const categorieSchema = mongoose.Schema({
    //_id: { type: String, unique: true },
    _id: String,
    level: { type: Number, index: true },
    path: String,


})

const Categorie = mongoose.model('Categorie', categorieSchema)

export default Categorie