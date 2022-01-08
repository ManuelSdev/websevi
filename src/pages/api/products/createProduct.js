
import Product from '../../../models/Product'
import dbConnect from '../../../lib/dbConnect'
import upload from '../../../lib/utils/multerUploadS3'
import nc from 'next-connect'
import { nameToUrl, toPlainString } from '../../../lib/utils/stringTools'

//TODO: pulir validaciones aquí y en front
const handler = nc()
    //CLAVE: usa [] tras el nombre del field porque el cliente agrega []
    //Creo que esto viene del withformdata customizado para manejar arrays
    //https://maximorlov.com/fix-unexpected-field-error-multer/
    .use(upload.array("images[]", 4))
    .post(async (req, res, next) => {

        const { name, category_1, category_2, specs } = req.body
        const categories = [category_1, category_2].map(elem => toPlainString(elem))

        try {
            await dbConnect()
            if (!name) {
                const error = new Error('Debe indicar el nombre del producto');
                error.status = 401;
                next(error);
                return
            }
            req.body.url = nameToUrl(name)
            req.body.specs = specs.split('//')
            const locations = req.files ? req.files.map(fileObject => fileObject.location) : []
            const productData = req.files ?
                { ...req.body, images: locations, categories }
                :
                { categories, ...req.body }

            const newProduct = await new Product(productData)
            await newProduct.save()

            res.status(201).json({ message: 'El producto ha sido añadido correctamente' })
        } catch (err) {
            //TODO: meter algo en el objeto error para filtrar este tipo de errores y que no salgan en el front
            console.log("ERROR AL CREAR PRODUCTO", err)
            next(err)
        }
    })

export const config = {
    api: {
        bodyParser: false
    }
}

export default handler;