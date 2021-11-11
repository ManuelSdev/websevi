import mongoose from 'mongoose'

const userSchema = mongoose.Schema({
    username: { type: String, unique: true },
    email: { type: String, unique: true },
    password: String,
    active: false,
    favorites: { type: [String], index: true },
    image: String,
    publishedAds: Number,
    date: Date

})

const User = mongoose.model('User', userSchema)

export default User