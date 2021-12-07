import { useRouter } from 'next/router'
import ProductsLayout from "../../components/modules/productsLayout/ProductsLayout"
import { getProducts } from "../api/products/get"
//import { getCats } from '../api/categories/g'

const Categorie = ({ products }) => {
    const router = useRouter()
    const { cid } = router.query
    console.log('url', cid)
    console.log('products', products)
    //  console.log('PRODUCT SSR', products)
    return (
        <ProductsLayout products={products}></ProductsLayout>
    )
}


export default Categorie
/*
export async function getServerSideProps(context) {
    console.log('CONTEXTT', context.params)


    try {
        const query = await getCats({ level: 1 })
        const cats = JSON.parse(JSON.stringify(query))
        return {
            props: { cats }, // will be passed to the page component as props
        }

    } catch (error) {
        return {
            props: { cats: error }, // will be passed to the page component as props
        }
    }
}
*/

export async function getServerSideProps(context) {
    console.log('CONTEXTT', context.params)
    const query = await getProducts()
    const products = JSON.parse(JSON.stringify(query))
    return {
        props: { products }, // will be passed to the page component as props
    }
}
