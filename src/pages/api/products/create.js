
import Product from '../../../models/Products'
import dbConnect from '../../../lib/dbConnect'
export default async function handler(req, res) {
    // res.status(200).json({ name: 'John Doe' })
    console.log("BODY", req.body)
    await dbConnect()
    try {
        const { username, email, password } = req.body
        req.body.date = new Date()
        const productData = { ...req.body }
        //const savedUser = await createUser(userData)
        const newProduct = await new Product(productData)
        //newUser.password = await User.hashPassword(userData.password)
        //return newUser.save()
        const saved = await newProduct.save()
        res.status(201).json({ result: saved })
    } catch (err) {
        console.log("ERROR EN TRY DE API RUTA", err.message)
        res.status(500)
    }
}
