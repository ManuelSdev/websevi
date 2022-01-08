
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
        console.log("€€€€€€€€€€€€€€€€ REQ FILEsssss", req.files)
        console.log("€€€€€€€€€€€€€€€€ REQ body", req.body)
        //console.log("BODY", req.body)

        const { name, category_1, category_2, specs } = req.body
        const categories = [category_1, category_2].map(elem => toPlainString(elem))

        try {
            await dbConnect()
            if (!name) {
                //Estos errores si deben salir en el front
                const error = new Error('Debe indicar el nombre del producto');
                error.status = 401;
                next(error);
                return
            }
            req.body.url = nameToUrl(name)
            req.body.specs = specs.split('//')
            const locations = req.files ? req.files.map(fileObject => fileObject.location) : []
            console.log('/////////////////////////////', locations)
            const productData = req.files ?
                { ...req.body, images: locations, categories }
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