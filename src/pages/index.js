
import Container from '@mui/material/Container';
import MainMosaic from '../components/elements/MainMosaic';
import { toPlainString } from '../lib/utils/stringTools'
import Layout from '../components/layouts/Layout';
import { getProducts } from './api/products/getProducts';
import ProductsGrid from '../components/modules/productGrid/ProductsGrid'
import { getCategories } from './api/categories/getCategories';


console.log(unescape('sPerif&#xE9;ricos'))


export default function Home({ categories }) {


  //o(console.log)
  //console.log('sssssssssssssssspp', categs)
  return (

    // <div className={styles.container}>
    <Layout categories={categories} >

      <MainMosaic />
      <Container>
        <ProductsGrid></ProductsGrid>
      </Container>

    </Layout>

  )
}



/*
export async function getStaticPaths() {

  //Obtiene categorias cuyo campo level vale 1 o 2
  const query = await getCats({ level: { $in: [1, 2] } })
  const categories = JSON.parse(JSON.stringify(query))
  const paths = getCategsPath(categories)

  // console.log('EL PATHH', paths)
  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false }
}
*/
export async function getStaticProps(context) {
  //  console.log('CONTEXTT', context.params)

  const categoriesRes = await getCategories()
  const categories = JSON.parse(JSON.stringify(categoriesRes))
  const productsRes = await getProducts()
  const products = JSON.parse(JSON.stringify(productsRes))
  return {
    props: { categories, products }, // will be passed to the page component as props
  }
}