import mongoose from 'mongoose'

const orderSchema = mongoose.Schema({
    username: { type: String, unique: true },
    email: { type: String, unique: true },
    password: String,
    active: false,
    favorites: { type: [String], index: true },
    image: String,
    publishedAds: Number,
    date: Date

})

const Order = mongoose.model('User', userSchema)

export default User