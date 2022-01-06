import mongoose from 'mongoose'

//https://mongoosejs.com/docs/subdocs.html
const addressSchema = new mongoose.Schema({
    address: String,
    addresseeFullName: String,
    addresseePhone: Number,
    postCode: Number,
    city: String,
    region: String,
    country: String,
    moreInfo: String,
    defaultAddress: { type: Boolean, default: false },
})

const userSchema = new mongoose.Schema({
    name: String,
    lastName: String,
    authId: { type: String, unique: true, index: true },
    email: { type: String },
    favorites: { type: [String], index: true },
    orders: { type: [String], index: true },
    idCard: { type: String },
    phone: Number,
    company: String,
    hasProfile: { type: Boolean, default: false },

    //addresses es un array de objetos/maps
    //cada valor de una propiedad del objeto será un nuevo esquema/objeto
    //cada esquema debe contener esos campos
    //  addresses: { type: [addressSchema], default: () => ({}) }
    addresses: [addressSchema]

})



const User = mongoose.models.User || mongoose.model('User', userSchema);
export default User