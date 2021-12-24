import mongoose from 'mongoose'


const userSchema = mongoose.Schema({
    name: String,
    lastName: String,
    authId: { type: String, unique: true, index: true },
    email: { type: String, unique: true, index: true },
    favorites: { type: [String], index: true },
    orders: { type: [String], index: true },
    idCard: { type: String, unique: true },
    phone: Number,
    company: String,

    //addresses es un array de objetos/maps
    //cada valor de una propiedad del objeto será un nuevo esquema/objeto
    //cada esquema debe contener esos campos
    addresses: [{
        type: Map,
        of: new mongoose.Schema({
            _id: new mongoose.Schema.Types.ObjectId,
            address: String,
            postCode: Number,
            city: String,
            region: String,
            country: String,
            moreInfo: String,
            defaultAddress: Boolean
        })
    }]


})



const User = mongoose.models.User || mongoose.model('User', userSchema);
export default User