import usePromise from "../../hooks/usePromise";
import { createProduct, getPresignedS3POST, uploadImageS3 } from "../../lib/api/product";
import NewProductForm from "./NewProductForm"



const NewProductSection = ({ props }) => {
    const { error, throwPromise, } = usePromise()
    const { bucket, region } = props
    //console.log(region)
    const handleSubmit = async newProduct => {
        /*
                try {
                    await createProduct(newProduct)
                } catch (error) {
                    console.log('ERROR', error.message)
                    throw error
                }
        */
        await throwPromise(createProduct(newProduct));
        //history.push("/user");
    };
    return (
        <NewProductForm error={error?.data} onSubmit={handleSubmit}></NewProductForm>
    )
}

export default NewProductSection
