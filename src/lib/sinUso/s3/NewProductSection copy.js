import usePromise from "../../../hooks/usePromise";
import { createProduct, getPresignedS3POST, uploadImageS3 } from "../../api/product";
import NewProductForm from "../../../components/AdminPage/NewProductForm"



const NewProductSection = ({ props }) => {
    const { error, throwPromise, } = usePromise()
    const { bucket, region } = props
    console.log(region)
    const handleSubmit = async newProduct => {

        try {
            console.log(newProduct)
            const file = newProduct.images
            const filename = encodeURIComponent(file.name);
            const resS3 = await getPresignedS3POST({ filename })
            const { url, fields } = resS3

            const formData = new FormData();
            Object.entries({ ...fields, file }).forEach(([key, value]) => {
                formData.append(key, value);
            });

            const upload = await uploadImageS3(url, formData)
            /**TODO: meter env vars BUCKET_NAME y REGION con getStaticsProps....las env vars solo son accesibles desde código de servidor  */
            newProduct.images = `https://${bucket}.s3.${region}.amazonaws.com/${file.name}`
            // const req = { ...newProduct, images: images }
            console.log('REQ', newProduct)

            await createProduct(newProduct)
            //console.log('UPLOAD', upload)




        } catch (error) {
            console.log('ERROR', error.message)
            throw error

        }

        // await throwPromise(createProduct(newProduct));
        //history.push("/user");
    };
    return (
        <NewProductForm onSubmit={handleSubmit}></NewProductForm>
    )
}

export default NewProductSection
