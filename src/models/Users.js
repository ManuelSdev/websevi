import mongoose from 'mongoose'

const userSchema = mongoose.Schema({
    name: String,
    authId: { type: String, unique: true, index: true },
    email: { type: String, unique: true, index: true },
    favorites: { type: [String], index: true },
    orders: { type: [String], index: true },

    //addresses es un array de objetos/maps
    //cada valor de una propiedad del objeto será un nuevo esquema/objeto
    //cada esquema debe contener esos campos
    addresses: [{
        type: Map,
        of: new mongoose.Schema({
            address: String,
            postCode: Number,
            city: { type: String, index: true },
            region: { type: String, index: true },
            country: { type: String, index: true },
            default: Boolean
        })
    }]


})



const User = mongoose.models.User || mongoose.model('User', userSchema);
export default User