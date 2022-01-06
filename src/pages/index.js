
import Container from '@mui/material/Container';
import MainMosaic from '../components/homePage/MainMosaic';
import { toPlainString } from '../lib/utils/stringTools'
import Layout from '../components/layouts/Layout';
import { getProducts } from './api/products/getProducts';
import ProductsGrid from '../components/products/ProductsGrid'
import { getCategories } from './api/categories/getCategories';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import FeaturedGrid from '../components/products/FeaturedGrid';


console.log(unescape('sPerif&#xE9;ricos'))


export default function Home({ categories, products }) {


  //o(console.log)
  //console.log('sssssssssssssssspp', categs)
  return (

    // <div className={styles.container}>
    <Layout categories={categories} >

      <MainMosaic />
      <Container>
        <Box>
          <Typography align='center' pb={2} variant='h5' sx={{ fontWeight: 'bold' }} >
            PRODUCTOS DESTACADOS
          </Typography>

        </Box>

        <FeaturedGrid products={products} />
      </Container>

    </Layout>

  )
}


export async function getStaticProps(context) {
  //  console.log('CONTEXTT', context.params)

  const categoriesRes = await getCategories()
  const categories = JSON.parse(JSON.stringify(categoriesRes))
  const productsRes = await getProducts({ featured: true })
  const products = JSON.parse(JSON.stringify(productsRes))
  return {
    props: { categories, products }, // will be passed to the page component as props
  }
}