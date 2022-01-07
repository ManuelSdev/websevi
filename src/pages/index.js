
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
import Grid from '@mui/material/Grid';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import { Divider } from '@mui/material';
import revalidateTime from '../lib/utils/revalidateTime';

export default function Home({ categories, products }) {


  //o(console.log)
  //console.log('sssssssssssssssspp', categs)
  return (

    // <div className={styles.container}>
    <Layout categories={categories} >

      <MainMosaic />
      <Container sx={{ minHeight: 'calc(100vh - 488.02px)' }}>
        <Box mb={4} >
          <Typography color='primary' align='center' mb={2} mt={9} variant='h5' sx={{ fontWeight: 'bold' }} >
            PRODUCTOS DESTACADOS
          </Typography>
          <Divider ></Divider>
        </Box>

        <FeaturedGrid products={products} />
        <Divider ></Divider>
        <Grid mt={5} mb={5} textAlign='center' container spacing={2}>

          <Grid item xs={4} sm={4} md={4} lg={4} >
            <Box pr={5} pl={5}

            >
              <LocalShippingIcon color='primary' sx={{ fontSize: '60px' }} />
              <Typography mb={1} sx={{ fontWeight: 'bold' }} variant='h5' color='primary' >Envío en 24/48 horas</Typography>
              <Typography variant='body1' color='primary'>Compra ahora y recibe tu pedido en un plazo máximo de 2 días laborables </Typography>

            </Box>
          </Grid>
          <Grid item xs={4} sm={4} md={4} lg={4} >
            <Box pr={5} pl={5}>
              <ThumbUpAltIcon color='primary' sx={{ fontSize: '60px' }} />
              <Typography mb={1} sx={{ fontWeight: 'bold' }} variant='h5' color='primary' >Garantía de satisfacción</Typography>
              <Typography variant='body1' color='primary'>Dispones de 30 días para realizar una devolución si no quedas satisfecho y de 2 años de garantía en todos nuestros productos </Typography>

            </Box>
          </Grid>
          <Grid item xs={4} sm={4} md={4} lg={4} >
            <Box pr={5} pl={5}>
              <SupportAgentIcon color='primary' sx={{ fontSize: '60px' }} />
              <Typography mb={1} sx={{ fontWeight: 'bold' }} variant='h5' color='primary' >Soporte técnico</Typography>

              <Typography variant='body1' color='primary'>Ponemos a tu disposición el mejor servicio técnico para resolver todas tus dudas </Typography>

            </Box>
          </Grid>

        </Grid>
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
  revalidate: revalidateTime

}