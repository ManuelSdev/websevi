import usePromise from "../../hooks/usePromise";
import { createProduct } from "../../lib/api/product";
import NewProductForm from "./NewProductForm"


const NewProductSection = () => {
    const { error, throwPromise, } = usePromise()
    const handleSubmit = async newProduct => {
        await throwPromise(createProduct(newProduct));
        //history.push("/user");
    };
    return (
        <NewProductForm onSubmit={handleSubmit}></NewProductForm>
    )
}

export default NewProductSection