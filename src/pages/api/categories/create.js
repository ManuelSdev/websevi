import Categories from '../../../models/Categorie'
import dbConnect from '../../../lib/dbConnect'

async function handler(req, res) {
    try {

        //const savedUser = await createUser(userData)
        const newCateg = await new Product(req.body)
        //newUser.password = await User.hashPassword(userData.password)
        //return newUser.save()
        const saved = await newCateg.save()
        res.status(201).json({ result: saved })
    } catch (err) {
        console.log("ERROR CATEGORIE CREATE", err.message)
        res.status(500)
    }
}
