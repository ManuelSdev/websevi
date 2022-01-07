import Grid from "@mui/material/Grid"
import Box from "@mui/system/Box"
import Container from "@mui/material/Container"
import ProductDetails from "../../components/products/ProductDetails"
import Button from "@mui/material/Button"
import Image from "next/image"
import giga from '../../assets/images/giga.jpg'
import React from "react"
import { getProducts } from "../api/products/getProducts"
import Layout from "../../components/layouts/Layout"
//import { getCategsPath } from "../../lib/staticsPathFilters/categsStaticsPaths"
//import { getCategoryPath } from "../../lib/pathsGetters/getCategoryPath"
import { getCategories } from "../api/categories/getCategories"
import ImageList from "@mui/material/ImageList"
import ImageListItem from "@mui/material/ImageListItem"
import Link from "@mui/material/Link"
import { Divider, Typography } from "@mui/material"
import ButtonBase from '@mui/material/ButtonBase';
import { ButtonUnstyled } from '@mui/base/ButtonUnstyled';
import Modal from '@mui/material/Modal';
//import Link from '../../components/elements/Link'

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '700px',
    height: '700px',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    //p: 4,
    display: 'flex',
    justifyContent: 'center',
};

const ProductPage = ({ categories, product }) => {
    //const { errorm, throwPromise, loading, data } = usePromise()
    const [firstImage] = product.images
    // console.log('////////////////////', product.images)
    const images = [...product.images]

    const [mainImage, setMainImage] = React.useState(firstImage)

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleMainImage = (image) => ev => {
        ev.preventDefault()
        setMainImage(image)
    }

    const ModalImage = () =>
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Image
                    // width='100%'
                    // height='500px'
                    objectFit='contain'
                    layout='fill'
                    //src={product.images}
                    src={mainImage}
                    //
                    alt="Imagen de producto"
                />
            </Box>
        </Modal>

}
return (
    //TODO: UNIFICA con admin.js
    <>
        <ModalImage />
        <Layout categories={categories} >
            <Container sx={{ background: "red", minHeight: 'calc(100vh - 488.02px)' }}>
                <Box sx={{ flexGrow: 1, background: "AliceBlue" }}>
                    <Grid mb={2} container spacing={0}>
                        <Grid item xs={6} sm={4} md={3} lg={6} >
                            <Box
                                component={Button}
                                onClick={handleOpen}
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
                                    //
                                    alt="Imagen de producto"
                                />


                            </Box>


                            <ImageList
                                sx={{
                                    width: 527,
                                    //height: 450
                                }}
                                cols={4} rowHeight={128.75}>
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
                    <Box>
                        <Divider
                            light
                            pr={5}
                            textAlign="left"> <Typography>Descripción</Typography></Divider>
                        <Box p={3}>
                            {product.description}
                        </Box>
                    </Box>
                    <Box>
                        <Divider
                            pr={5}
                            textAlign="left"> <Typography>Especificaciones</Typography></Divider>
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



                </Box>

            </Container>
        </Layout >
    </>


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