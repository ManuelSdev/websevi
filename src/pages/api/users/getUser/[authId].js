

import User from '../../../../models/User'
import dbConnect from '../../../../lib/dbConnect'
//import categs from '../../../assets/categories'

export async function getUser(filters) {
    //console.log('get user', filters)
    await dbConnect()

    const user = await User.find(filters)
    // console.log('PRODS DE LA QUERY GET', cat)
    return user
}

export default async function handler(req, res) {
    const { authId } = req.query
    // console.log('get user req query', req.query)
    //const filters = req.query
    //console.log("req body init", req.body)
    // console.log("req body init", filters)
    try {

        const result = await getUser({ authId })
        // res.result
        res.status(201).json(result)

    } catch (err) {
        console.log("ERROR USER GET", err.message)
        res.status(500)
    }
}

