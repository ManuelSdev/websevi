import Grid from "@mui/material/Grid"
import Box from "@mui/system/Box"
import Container from "@mui/material/Container"
import ProductDetails from "../../components/modules/productDetails/ProductDetails"
import Button from "@mui/material/Button"
import Image from "next/image"
import giga from '../../assets/images/giga.jpg'
import React from "react"
import { getProducts } from "../api/products/get"
import Layout from "../../components/layouts/Layout"
//import { getCategsPath } from "../../lib/staticsPathFilters/categsStaticsPaths"
//import { getCategoryPath } from "../../lib/pathsGetters/getCategoryPath"
import { getCategories } from "../api/categories/getCategories"
import ImageList from "@mui/material/ImageList"
import ImageListItem from "@mui/material/ImageListItem"
import Link from "@mui/material/Link"

const ProductPage = ({ categories, product }) => {
    //const { errorm, throwPromise, loading, data } = usePromise()
    const [firstImage] = product.images
    // console.log('////////////////////', product.images)
    const images = [...product.images]
    const [mainImage, setMainImage] = React.useState(firstImage)

    const handleMainImage = (image) => ev => {
        ev.preventDefault()
        setMainImage(image)
    }
    return (
        //TODO: UNIFICA con admin.js
        <Layout categories={categories} >


            <Container sx={{ background: "red" }}>
                <Box sx={{ flexGrow: 1, background: "AliceBlue" }}>
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
                                    //src={product.images}
                                    src={mainImage}

                                    alt="Imagen de producto"
                                />
                            </Box>


                            <ImageList sx={{ width: 527, height: 450 }} cols={4} rowHeight={128.75}>
                                {images.map((image) => (
                                    <ImageListItem key={image} component={Button}
                                        sx={{

                                            border: 1,
                                            borderColor: 'DarkGrey',
                                            borderRadius: 0,
                                            '&:hover': {
                                                border: 2,
                                                borderColor: 'corpGreen.main',
                                                //  borderRadius: 0,

                                            }
                                        }}
                                    >

                                        <Image

                                            objectFit='contain'
                                            layout='fill'
                                            //src={product.images}
                                            src={image}
                                            alt="Imagen de producto"
                                            onClick={handleMainImage(image)}
                                        />

                                    </ImageListItem>
                                ))}
                            </ImageList>

                        </Grid>
                        <Grid item xs={6} sm={4} md={3} lg={6} >
                            <ProductDetails product={product} ></ProductDetails>
                        </Grid>

                    </Grid>
                </Box>
            </Container>
        </Layout >

    )
}

export default ProductPage

export async function getStaticPaths() {

    //Obtiene categorias cuyo campo level vale 1 o 2

    const query = await getProducts({}, 'url')
    // console.log('+++++++++++++++++++++++++', query)
    const products = JSON.parse(JSON.stringify(query))
    const paths = products.map(product => ({ params: { productUrl: product.url } })
    )

    // console.log('EL PATHH', paths)
    // We'll pre-render only these paths at build time.
    // {fallback: false } means other routes should 404.
    return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
    //  console.log('CONTEXTT', context.params)

    const categoriesRes = await getCategories()
    const categories = JSON.parse(JSON.stringify(categoriesRes))


    const productRes = await getProducts({ url: params.productUrl })
    //  console.log('############################', product_query)
    //Esta consulta devuelve un array con un único producto/elemento
    const [product] = JSON.parse(JSON.stringify(productRes))
    return {
        props: { product, categories }, // will be passed to the page component as props
    }
}