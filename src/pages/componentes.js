import ProductsLayout from "../components/modules/productsLayout/ProductsLayout"
import { getProducts } from "./api/products/get"




const Componentes = ({ products }) => {
    console.log('PRODUCT SSR', products)
    return (
        <ProductsLayout></ProductsLayout>
    )
}

export default Componentes


export async function getServerSideProps(context) {
    const products = await getProducts()
    return {
        props: { products }, // will be passed to the page component as props
    }
}