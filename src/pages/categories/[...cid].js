import { useRouter } from 'next/router'
import ProductsLayout from "../../components/modules/productsLayout/ProductsLayout"
import { getProducts } from "../api/products/get"
import { getCats } from '../api/categories/g'
import { getCategsPath } from '../../lib/utils/categsStaticsPaths'
import Layout from '../../components/layouts/Layout'
import { nameToUrl } from '../../lib/utils/stringTools'


const Categorie = ({ isLogged, products, categories }) => {
    const router = useRouter()
    const { cid } = router.query
    console.log('url', cid)
    console.log('products', products)
    //  console.log('PRODUCT SSR', products)
    return (
        <Layout isLogged={isLogged} categs={categories}>
            <ProductsLayout products={products}></ProductsLayout>
        </Layout>

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
/*
export async function getServerSideProps(context) {
    console.log('CONTEXTT', context.params)
    const query = await getProducts()
    const products = JSON.parse(JSON.stringify(query))
    return {
        props: { products }, // will be passed to the page component as props
    }
}
*/
//TODO: revisa fallback y revalidate en prod
export async function getStaticPaths() {

    //Obtiene categorias cuyo campo level vale 1 o 2
    const query = await getCats({ level: { $in: [1, 2] } })
    console.log('----------------------------', query)
    const categories = JSON.parse(JSON.stringify(query))
    const paths = getCategsPath(categories)

    // console.log('EL PATHH', paths)
    // We'll pre-render only these paths at build time.
    // { fallback: false } means other routes should 404.
    return { paths, fallback: false }
}

export async function getStaticProps(context) {
    //  console.log('CONTEXTT', context.params)
    const categories_query = await getCats()
    const categories = JSON.parse(JSON.stringify(categories_query))
    const products_query = await getProducts()
    const products = JSON.parse(JSON.stringify(products_query))
    return {
        props: { categories, products }, // will be passed to the page component as props
    }
}