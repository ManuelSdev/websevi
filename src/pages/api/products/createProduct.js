
import Product from '../../../models/Product'
import dbConnect from '../../../lib/dbConnect'
import upload from '../../../lib/utils/multerUploadS3'
import nc from 'next-connect'
import { nameToUrl } from '../../../lib/utils/stringTools'

//TODO: pulir validaciones aquí y en front
const handler = nc()
    .use(upload.single("images"))
    .post(async (req, res, next) => {
        // console.log("IMG", req.file)
        //console.log("BODY", req.body)

        const { name, category_1, category_2 } = req.body
        const categories = [category_1, category_2]
        try {
            if (!name) {
                //Estos errores si deben salir en el front
                const error = new Error('Debe indicar el nombre del producto');
                error.status = 401;
                next(error);
                return
            }
            req.body.url = nameToUrl(name)
            await dbConnect()
            const productData = req.file ?
                { images: req.file.location, categories, ...req.body }
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