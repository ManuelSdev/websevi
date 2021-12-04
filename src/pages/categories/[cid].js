import { useRouter } from 'next/router'
import ProductsLayout from "../../components/modules/productsLayout/ProductsLayout"
import { getProducts } from "../api/products/get"


const Categorie = () => {
    const router = useRouter()
    const { cid } = router.query
    console.log('url', cid)
    //  console.log('PRODUCT SSR', products)
    return (
        <ProductsLayout></ProductsLayout>
    )
}


export default Categorie

export async function getServerSideProps(context) {
    console.log('CONTEXTT', context.params)
    const products = await getProducts()
    return {
        props: { products }, // will be passed to the page component as props
    }
}