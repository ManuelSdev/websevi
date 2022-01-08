

import User from '../../../../models/User'
import dbConnect from '../../../../lib/dbConnect'

export default async function handler(req, res) {
    //Obtiene el _id del producto
    //el objeto req.query contiene la propiedad _id porque el nombre de esta ruta dínamica es [_id].js
    const [userId, productId] = req.query.idParams

    try {
        await dbConnect()
        //Se hacen comprobaciones para que solo una dirección/address del array de objetos addresses sea default=true
        //Obtiene solo el campo addresses del User y lo renombra a currentAddresses
        const { favorites } = await User.findById({ _id: userId }, 'favorites').exec();
        if (favorites.includes(productId)) {
            //Si el campo favorites del User contiene el id de producto, este es eliminado
            await User.findByIdAndUpdate({ _id: userId }, { '$pull': { favorites: productId } }, {
                new: true,
                useFindAndModify: false
            })
            res.status(201)
                .json({ resolved: true, message: 'Favorito eliminado' })
        } else {
            await User.findByIdAndUpdate({ _id: userId }, { '$push': { favorites: productId } }, {
                new: true,
                useFindAndModify: false
            })
            res.status(201)
                .json({ resolved: true, message: 'Favorito añadido' })
        }
    } catch (err) {
        console.log("ERROR favorites UPDATE", err.message)
        res.status(500).json({ resolved: false, message: err.message })
    }
}

