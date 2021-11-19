
import User from '../../../models/Users'
import dbConnect from '../../../lib/dbConnect'
export default async function handler(req, res) {
    // res.status(200).json({ name: 'John Doe' })
    console.log("BODY", req.body)
    await dbConnect()
    try {
        const { username, email, password } = req.body
        req.body.date = new Date()
        const userData = { ...req.body }
        //const savedUser = await createUser(userData)
        const newUser = await new User(userData)
        //newUser.password = await User.hashPassword(userData.password)
        //return newUser.save()
        const saved = await newUser.save()
        res.status(201).json({ result: saved })
    } catch (err) {
        console.log("ERROR EN TRY DE API RUTA", err.message)
        res.status(500)
    }
}
