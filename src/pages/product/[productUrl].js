import Grid from "@mui/material/Grid"
import Box from "@mui/system/Box"
import Container from "@mui/material/Container"
import ProductActions from "../../components/productPage/ProductActions"
import React from "react"
import { getProducts } from "../api/products/getProducts"
import Layout from "../../components/layouts/Layout"
import { getCategories } from "../api/categories/getCategories"
import Divider from "@mui/material/Divider"
import Typography from "@mui/material/Typography"
import ProductImageList from "../../components/productPage/ProductImageList"
import useMediaQuery from '@mui/material/useMediaQuery';
import ProductImageSwiper from "../../components/productPage/ProductImageSwiper"

const ProductPage = ({ categories, product }) => {
    const smUp = useMediaQuery((theme) => theme.breakpoints.up('sm'));

    return (
        <Layout categories={categories} >
            <Container sx={{
                minHeight: 'calc(100vh - 488.02px)'
            }}>
                <Box mt={10} mb={10} sx={{ flexGrow: 1, }}>
                    <Grid mb={2} container spacing={0}>
                        <Grid item xs={12} sm={6} md={6} lg={6} >
                            {smUp ?
                                <ProductImageList product={product} />
                                :
                                <ProductImageSwiper product={product} />
                            }

                        </Grid>
                        <Grid item xs='auto' sm={6} md={6} lg={6} >
                            <ProductActions product={product} ></ProductActions>
                        </Grid>
                    </Grid>

                    <Box>
                        <Divider
                            light
                            pr={5}
                            textAlign="left"> <Typography sx={{ fontWeight: 'bold' }}>Descripción</Typography></Divider>
                        <Box p={3}>
                            {product.description}
                        </Box>
                    </Box>

                    <Box>
                        <Divider
                            pr={5}
                            textAlign="left"> <Typography sx={{ fontWeight: 'bold' }}>Especificaciones</Typography></Divider>
                        <Box>
                            <ul>
                                {product.specs.map(spec =>
                                    <Box key={spec}>
                                        <li>{spec} </li>
                                    </Box>
                                )}
                            </ul>
                        </Box>
                    </Box>
                    <Divider></Divider>
                </Box>
            </Container>
        </Layout >
    )
}

export default ProductPage

export async function getStaticPaths() {

    //Obtiene categorias cuyo campo level vale 1 o 2
    const query = await getProducts({}, 'url')
    const products = JSON.parse(JSON.stringify(query))
    const paths = products.map(product => ({ params: { productUrl: product.url } })
    )
    return { paths, fallback: 'blocking' }
}

export async function getStaticProps({ params }) {
    const categoriesRes = await getCategories()
    const categories = JSON.parse(JSON.stringify(categoriesRes))
    const productRes = await getProducts({ url: params.productUrl })
    //Esta consulta devuelve un array con un único producto/elemento
    const [product] = JSON.parse(JSON.stringify(productRes))
    return {
        props: { product, categories }, // will be passed to the page component as props
        revalidate: 1
    }

}