import mongoose from 'mongoose'

import * as React from 'react';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import Typography from '@mui/material/Typography';
import ContentCut from '@mui/icons-material/ContentCut';
import ContentCopy from '@mui/icons-material/ContentCopy';
import ContentPaste from '@mui/icons-material/ContentPaste';
import Cloud from '@mui/icons-material/Cloud';
import ProductsGrid from "../components/modules/productGrid/ProductsGrid"
import { Container, Box, Grid, ListItemButton } from '@mui/material';
import ImportSection from '../components/AdminPage/ImportSection';
import NewProductSection from '../components/AdminPage/NewProductSection';
import OrdersSection from '../components/AdminPage/OrdersSection';
import allCategsOnArray from '../../src/assets/initialCategories'
import initialProducts from '../assets/products';
//import initCategs from './api/categories/init'
import { resetCategs } from '../lib/api/categorie';
import NewCategsSection from '../components/AdminPage/NewCategsSection';
import DeleteCategsSection from '../components/AdminPage/DeleteCategsSection';
import { resetProducts } from '../lib/api/product';
import Layout from '../components/layouts/Layout';
import { getCats } from './api/categories/g';

const Admin = ({ isLogged, categories, props }) => {

    const [section, setSection] = React.useState('newProduct');

    const IMPORT = 'import'
    const NEW_PRODUCT = 'newProduct'
    const NEW_CATEGS = 'newCategs'
    const DEL_CATEGS = 'delCategs'
    const ORDERS = 'orders'

    const handleSection = {
        import: () => setSection(IMPORT),
        newProduct: () => setSection(NEW_PRODUCT),
        newCategs: () => setSection(NEW_CATEGS),
        delCategs: () => setSection(DEL_CATEGS),
        orders: () => setSection(ORDERS),
    }
    //sin uso
    const components = {
        import: <ImportSection />,
        newProduct: <NewProductSection props={props} />,
        newCategs: <NewCategsSection props={props} />,

        orders: <OrdersSection />
    }

    const restartCategs = async () => {
        const categs = allCategsOnArray()
        console.log(categs)
        await resetCategs(categs)
        await resetProducts(initialProducts)

    }




    return (
        <Layout isLogged={isLogged} categs={categories}>
            <Container sx={{ mt: '2em' }}>
                <Box sx={{ flexGrow: 1, background: "green" }}>
                    <Grid container spacing={2}>
                        <Grid item xs={6} sm={4} md={3} lg={3} >
                            <Paper>
                                <MenuList>
                                    <MenuItem onClick={handleSection.import}>
                                        <ListItemIcon>
                                            <ContentCut fontSize="small" />
                                        </ListItemIcon>
                                        <ListItemText>Importar catálogo</ListItemText>

                                    </MenuItem>
                                    <MenuItem onClick={handleSection.newProduct}>
                                        <ListItemIcon>
                                            <ContentCopy fontSize="small" />
                                        </ListItemIcon>
                                        <ListItemText>Añadir producto</ListItemText>

                                    </MenuItem>
                                    <MenuItem onClick={handleSection.newCategs}>
                                        <ListItemIcon>
                                            <ContentPaste fontSize="small" />
                                        </ListItemIcon>
                                        <ListItemText>Crear categorías</ListItemText>

                                    </MenuItem>
                                    <MenuItem onClick={handleSection.orders}>
                                        <ListItemIcon>
                                            <ContentPaste fontSize="small" />
                                        </ListItemIcon>
                                        <ListItemText>Pedidos</ListItemText>

                                    </MenuItem>

                                    <MenuItem
                                        onClick={handleSection.delCategs}
                                    >
                                        <ListItemIcon>
                                            <ContentPaste fontSize="small" />
                                        </ListItemIcon>
                                        <ListItemText>Eliminar categorías</ListItemText>

                                    </MenuItem>

                                    <MenuItem
                                        onClick={restartCategs}
                                    >
                                        <ListItemIcon>
                                            <ContentPaste fontSize="small" />
                                        </ListItemIcon>
                                        <ListItemText>Reiniciar estado</ListItemText>

                                    </MenuItem>



                                </MenuList>
                            </Paper>
                        </Grid>

                        <Grid item xs={6} sm={4} md={3} lg={9} >



                            <Paper>

                                {section === IMPORT && <ImportSection />}
                                {section === NEW_PRODUCT && <NewProductSection props={props} />}
                                {section === NEW_CATEGS && <NewCategsSection props={props} />}
                                {section === DEL_CATEGS && <DeleteCategsSection props={props} />}
                                {section === ORDERS && <OrdersSection />}
                            </Paper>

                        </Grid>

                    </Grid>
                </Box>
            </Container >
        </Layout>
    )
}

export default Admin

/*
export async function getStaticProps() {
    const bucket = process.env.BUCKET_NAME
    const region = process.env.REGION
    //test(console.log)
    return {
        props: {
            bucket,
            region

        }
    }
}

*/

export async function getStaticProps(context) {
    //  console.log('CONTEXTT', context.params)
    const categories_query = await getCats()
    const categories = JSON.parse(JSON.stringify(categories_query))
    /*
    const products_query = await getProducts()
    const products = JSON.parse(JSON.stringify(products_query))
    */
    return {
        props: { categories }, // will be passed to the page component as props
    }
}