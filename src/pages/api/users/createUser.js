
import dbConnect from '../../../lib/dbConnect'
import User from '../../../models/User'

/**
 Modelo ejemplo de addresses
     addresses: [
        {
          address1: {
            address: 'Mi calle',
            postCode: 14045,
            city: 'Sevilla',
            region: 'Sevilla',
            country: 'España',
            default: true
          }
        }

      ]

 */
//Crea un usuario con la API de supertokens
//Recibe como parámetro la respuesta del API de supertokens
export async function createUserSP(supertokensResponse) {
  try {
    await dbConnect()

    //Obtiene los datos del usuario autenticado con supertokens
    const { id: authId, email } = supertokensResponse.user
    //Si el usuario existe, lanza error
    if (await User.exists({ authId })) {
      const error = new Error(`Ya existe un usuario asociado a la identidad proporcionada"`);
      error.status = 409
      throw error
    }
    const newUser = await new User({
      name: '',
      authId,
      email,
      favorites: [],
      orders: [],

    })
    const savedUser = await newUser.save()
    console.log(`Se ha creado un nuevo usuario con el email asociado ${email}`)
  } catch (err) {
    console.log("ERROR al crear un nuevo usuario: ", err.message)
  }

}

//TODO: limpia, sin uso en principio
export default async function handler(req, res) {

  try {
    await dbConnect()
    res.status(201)
      .json({ message: `El árbol de categorías se ha creado correctamente` })
  } catch (err) {
    console.log("ERROR Category CREATE", err.message)
    res.status(err.status ? 409 : 500)
      .send(err.message)
  }
}