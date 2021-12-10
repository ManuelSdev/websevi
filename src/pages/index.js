
import styles from '../styles/Home.module.css'
import IconCorpName from '../components/elements/IconCorpName';
import GridCard from '../components/modules/productGrid/GridCard';
import Container from '@mui/material/Container';
import MainMosaic from '../components/elements/MainMosaic';
import { toPlainString } from '../lib/utils/stringTools'
import Layout from '../components/layouts/Layout';
import { getCategsPath } from '../lib/utils/categsStaticsPaths';
import { getCats } from './api/categories/g';
import { getProducts } from './api/products/get';
import ProductsGrid from '../components/modules/productGrid/ProductsGrid'


console.log(unescape('sPerif&#xE9;ricos'))


export default function Home({ isLogged, categories }) {
  //o(console.log)
  //console.log('sssssssssssssssspp', categs)
  return (

    // <div className={styles.container}>
    <Layout isLogged={isLogged} categs={categories}>

      <MainMosaic />
      <Container>
        <ProductsGrid></ProductsGrid>
      </Container>

      {toPlainString('CómpoNNNNás ásssNN')}
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
  const categories_query = await getCats()
  const categories = JSON.parse(JSON.stringify(categories_query))
  const products_query = await getProducts()
  const products = JSON.parse(JSON.stringify(products_query))
  return {
    props: { categories, products }, // will be passed to the page component as props
  }
}