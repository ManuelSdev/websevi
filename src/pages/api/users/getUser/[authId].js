

import User from '../../../../models/User'
import dbConnect from '../../../../lib/dbConnect'

export async function getUser(filters) {
    // console.log('-------------------get user', filters)
    await dbConnect()
    const [user] = await User.find(filters)
    return user
}

export default async function handler(req, res) {
    console.log('la req userssss', req.query)
    const { authId } = req.query
    try {
        const result = await getUser({ authId })
        // console.log('RESULT api/user/getUser/[autId]', result)
        res.status(201).json(result)
    } catch (err) {
        console.log("ERROR USER GET", err.message)
        res.status(500)
    }
}

