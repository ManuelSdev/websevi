
import Container from '@mui/material/Container';
import MainMosaic from '../components/homePage/MainMosaic';
import Layout from '../components/layouts/Layout';
import { getProducts } from './api/products/getProducts';
import { getCategories } from './api/categories/getCategories';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import FeaturedGrid from '../components/products/FeaturedGrid';
import Grid from '@mui/material/Grid';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import { Divider, Stack } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import HomeInfo from '../components/home/HomeInfo';
import CompactHomeInfo from '../components/home/CompactHomeInfo';

export async function getStaticProps(context) {
  console.log('##################################################')
  const categoriesRes = await getCategories()
  const categories = JSON.parse(JSON.stringify(categoriesRes))
  const productsRes = await getProducts({ featured: true })
  const products = JSON.parse(JSON.stringify(productsRes))
  return {
    props: { categories, products }, // will be passed to the page component as props
    revalidate: 1
  }


}


export default function Home({ categories, products, hola }) {
  console.log(hola)
  const theme = useTheme()
  const sm750Up = useMediaQuery(theme.breakpoints.up('sm750'));


  return (

    <Layout categories={categories} >
      <MainMosaic />
      <Container sx={{ minHeight: 'calc(100vh - 488.02px)' }}>
        <Box mb={4} >
          <Typography color='primary' align='center' mb={2} mt={9} variant='h5' sx={{ fontWeight: 'bold' }} >
            PRODUCTOS DESTACADOS
          </Typography>
          <Divider ></Divider>
        </Box>
        <FeaturedGrid products={products} hola={hola} />
        <Divider ></Divider>
        <HomeInfo />


      </Container>

    </Layout>

  )
}


