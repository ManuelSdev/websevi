
import Product from '../../../models/Product'
import dbConnect from '../../../lib/dbConnect'
import upload from '../../../lib/utils/multerUploadS3'
import nc from 'next-connect'
import { nameToUrl } from '../../../lib/utils/stringTools'

//import initMiddleware from '../../../lib/api/initMiddleware'
//import runMiddleware from '../../../ lib / api / runMiddleware'

//const mul = initMiddleware(multerUploadS3)
async function handler_(req, res) {
    // console.log("BODY", req.body)
    //    console.log("IMG", req.file)
    // upload.single("images")
    // res.status(200).json({ name: 'John Doe' })

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

const handler = nc()
    .use(upload.single("images"))
    .post(async (req, res, next) => {
        //console.log("IMG", req.file)
        // console.log("BODY", req.body)

        const { name, categorie_1, categorie_2, categorie_3 } = req.body
        const categories = [categorie_1, categorie_2, categorie_3]
        try {



            if (!name) {
                //Estos errores si deben salir en el front
                const error = new Error('Debe indicar que producto quiere vender para subir un anuncio');
                error.status = 401;
                next(error);
                return
            }
            req.body.url = nameToUrl(name)
            await dbConnect()
            const productData = req.file ?
                { images: req.file.location, categories, ...req.body, name }
                :
                { categories, ...req.body }

            const newProduct = await new Product(productData)
            const saved = await newProduct.save()
            res.status(201).json({ message: 'El producto ha sido añadido correctamente' })
            // res.json({ hello: "world" });
        } catch (err) {
            //TODO: meter algo en el objeto error para filtrar este tipo de errores y que no salgan en el front
            console.log("ERROR AL CREAR PRODUCTO", err)
            next(err)
        }
    })
/*
.put(async (req, res) => {
    res.end("async/await is also supported!");
})
.patch(async (req, res) => {
    throw new Error("Throws me around! Error can be caught and handled.");
});
*/
export const config = {
    api: {
        bodyParser: false
    }
}


export default handler;