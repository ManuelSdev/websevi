import mongoose from 'mongoose'

const userSchema = mongoose.Schema({
    name: String,
    authId: { type: String, unique: true, index: true },
    email: { type: String, unique: true, index: true },
    favorites: { type: [String], index: true },
    orders: { type: [String], index: true },
    address: { type: String, index: true },


})



const User = mongoose.models.User || mongoose.model('User', userSchema);
export default User