import { Grid } from "@mui/material"
import { Box } from "@mui/system"
import { Container } from "@mui/material"
import ProductDetails from "../../components/modules/productDetails/ProductDetails"
import { Button } from "@mui/material"
import Image from "next/image"
import giga from '../../assets/images/giga.jpg'
import usePromise from "../../hooks/usePromise"
import React from "react"
import { getProducts } from "../api/products/get"
import Layout from "../../components/layouts/Layout"
import { getCategsPath } from "../../lib/utils/categsStaticsPaths"
import { getCats } from "../api/categories/g"
import { urlToName } from "../../lib/utils/stringTools"

const ProductDetailsSection = ({ categories, product, isLogged }) => {
    //const { errorm, throwPromise, loading, data } = usePromise()

    console.log('@@@@@@@@@@@@@@@@@@@@', product)
    return (
        //TODO: UNIFICA con admin.js
        <Layout isLogged={isLogged} categs={categories}>


            <Container sx={{ mt: '2em', background: "red" }}>
                <Box sx={{ flexGrow: 1, background: "green" }}>
                    <Grid container spacing={0}>
                        <Grid item xs={6} sm={4} md={3} lg={6} >
                            <Box
                                sx={{
                                    // pr: 15,
                                    background: "blue",
                                    display: 'flex',
                                    justifyContent: 'center',

                                    width: '527px',
                                    height: '527px',
                                    position: 'relative'


                                }}
                            >
                                <Image

                                    width='100%'
                                    height='100%'
                                    objectFit='contain'
                                    layout='fill'

                                    src={product.images}
                                    alt="Imagen de producto"
                                />
                            </Box>
                        </Grid>
                        <Grid item xs={6} sm={4} md={3} lg={6} >

                            <ProductDetails product={product}></ProductDetails>
                        </Grid>

                    </Grid>
                </Box>
            </Container>
        </Layout>

    )
}

export default ProductDetailsSection

export async function getStaticPaths() {

    //Obtiene categorias cuyo campo level vale 1 o 2

    const query = await getProducts({}, 'url')
    console.log('+++++++++++++++++++++++++', query)
    const products = JSON.parse(JSON.stringify(query))
    const paths = products.map(product => ({ params: { prodUrl: product.url } })
    )

    // console.log('EL PATHH', paths)
    // We'll pre-render only these paths at build time.
    // {fallback: false } means other routes should 404.
    return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
    //  console.log('CONTEXTT', context.params)

    const categories_query = await getCats()
    const categories = JSON.parse(JSON.stringify(categories_query))


    const product_query = await getProducts({ url: params.prodUrl })
    console.log('############################', product_query)
    //Esta consulta devuelve un array con un único producto/elemento
    const [product] = JSON.parse(JSON.stringify(product_query))
    return {
        props: { product, categories }, // will be passed to the page component as props
    }
}