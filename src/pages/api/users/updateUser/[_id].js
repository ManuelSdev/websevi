

import User from '../../../../models/User'
import dbConnect from '../../../../lib/dbConnect'
//import categs from '../../../assets/categories'


export default async function handler(req, res) {
    console.log('peticion UPDATE USER')
    //Obtiene el _id del usuario de los path params
    //el objeto req.query contiene la propiedad _id porque el nombre de esta ruta dínamica es [_id].js
    const { _id } = req.query
    console.log(' UPDATE USER body', req.body)
    //Obtiene nuevos valores de usuario del req.body
    const { name, lastName, idCard, phone, company, address, postCode, city, region, country, moreInfo, defaultAddress } = req.body
    //TODO: Validaciones BACK
    const newUserValues = { name, lastName, idCard, phone, company }
    //El campo addresses del modelo User es un array de objetos.Cada objeto contiene los siguientes campos
    const newAddressObjectValues = { address, postCode, city, region, country, moreInfo, defaultAddress }
    try {
        await dbConnect()
        /*
        await User.findByIdAndUpdate({ path: pathCategory_1 }, { '$push': { "childs": nameCategory_2 } }, {
            new: true,
            useFindAndModify: false
        })
        */
        const updatedUser = await User.findByIdAndUpdate({ _id }, { name }, {
            new: true,
            useFindAndModify: false
        });
        console.log('€€€€€€€€€€€€€€€€€€€€€', updatedUser)
        res.status(201)
            .json(updatedUser)

    } catch (err) {
        console.log("ERROR USER UPDATE", err.message)
        res.status(500)
    }
}

