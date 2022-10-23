

import User from '../../../../models/User'
import dbConnect from '../../../../lib/dbConnect'
//import categs from '../../../assets/categories'


export default async function handler(req, res) {
    //console.log('******************body req  updateUser', req.body)
    console.log('query req updateUser', req.query)
    //Obtiene el _id del usuario de los path params
    //el objeto req.query contiene la propiedad _id porque el nombre de esta ruta dínamica es [_id].js
    const { _id } = req.query
    //Obtiene nuevos valores de usuario del req.body
    const { name, lastName, idCard, phone, company, address, postCode, city, region, country, moreInfo } = req.body
    //console.log('-----------------------body req  updateUser', req.body)
    //TODO: Validaciones BACK
    //El campo addresses del modelo User es un array de objetos.Cada objeto contiene los siguientes campos
    const newAddress = { address, postCode, city, region, country, moreInfo }
    const newValues = { name, lastName, idCard, phone, company }
    try {
        await dbConnect()
        //Se hacen comprobaciones para que solo una dirección/address del array de objetos addresses sea default=true

        //Obtiene solo el campo addresses del User y lo renombra a currentAddresses
        const { addresses: currentAddresses } = await User.findById({ _id }, 'addresses').exec();

        //CASO 1: usuario completa perfil añadiendo  datos personales y dirección
        //Como no existen direcciones guardada, la dirección entrante se guarda como default
        if (currentAddresses.length === 0) {
            //Establece la direccion entrante como default
            newAddress.defaultAddress = true
            //Como se está completando el perfil de usuario en esta solicitud, asignamos hasProfile=true
            newValues.hasProfile = true
            //Se actualizan todos los valores del usuario excepto las direcciones/addresses
            //La dirección se añade al array de direcciones addresses
            //CLAVE: ejemplo de como actualizar unos campos y añadir elementos a otros en la misma consulta
            const updatedUser = await User.findByIdAndUpdate({ _id }, { ...newValues, '$push': { addresses: newAddress } }, {
                new: true,
                useFindAndModify: false
            });

        }
        //CASO 2: usuario con perfil que añade una dirección  marcada como default en el formulario
        //Si la dirección entrante se señaló como default en el formulario, crea un nuevo array de direcciones actuales con todas ellas con defaultAddress=false
        else if (currentAddresses.length > 0 && defaultAddress) {
            //Crea un nuevo array con todaslas direcciones actuales con defaultAddress=false 
            const currentAddressesNoDefault = currentAddresses.mapp(addressObject = () => {
                addressObject.defaultAddress = false
                return addressObject
            })
            //Establece la dirección entrante como única default
            newAddress.defaultAddress = true
            //Genera un nuevo array de direcciones con las actuales con defaul=false y la nueva con default=true
            const newAddresses = Array.from([...currentAddressesNoDefault, addresses])
            //Actualiza addresses por newAddresses
            await User.findByIdAndUpdate({ _id }, { newAddresses }, {
                new: true,
                useFindAndModify: false
            });

        }
        //CASO 3: usuario con perfil que añade una dirección NO marcada como default en el formulario
        //Si ya existe alguna dirección, significa que el usuario ya tiene un perfil completo. 
        //Tan solo se añade la el nuevo objeto address a  array de direcciones addresses
        else if (currentAddresses.length > 0) {
            const updatedUser = await User.findByIdAndUpdate({ _id }, { '$push': { addresses: newAddress } }, {
                new: true,
                useFindAndModify: false
            });

        }
        res.status(201)
            .json({ done: true, message: 'Usuario actualizado' })
    } catch (err) {
        console.log("ERROR USER UPDATE", err.message)
        res.status(500).json({ resolved: false, message: err.message })
    }
}

