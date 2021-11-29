
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
import ImportBlock from '../components/AdminPage/ImportSection';
import NewProductSection from '../components/AdminPage/NewProductSection';
import OrdersBlock from '../components/AdminPage/OrdersSection';
import allCategsOnArray from '../../src/assets/categories'
//import initCategs from './api/categories/init'
import { createCateg } from '../lib/api/categorie';

const Admin = (props) => {

    const [block, setBlock] = React.useState('new');

    const IMPORT = 'import'
    const NEW = 'new'
    const ORDERS = 'orders'

    const handleBlock = {
        import: () => setBlock(IMPORT),
        new: () => setBlock(NEW),
        orders: () => setBlock(ORDERS),
    }

    const components = {
        import: <ImportBlock />,
        new: <NewProductSection props={props} />,
        orders: <OrdersBlock />
    }

    const restartCategs = async () => {
        const categs = allCategsOnArray()
        console.log(categs)
        await createCateg(categs)

    }

    return (
        <Container>
            <Box sx={{ flexGrow: 1, background: "green" }}>
                <Grid container spacing={2}>


                    <Grid item xs={6} sm={4} md={3} lg={3} >
                        <Paper>
                            <MenuList>
                                <MenuItem onClick={handleBlock.import}>
                                    <ListItemIcon>
                                        <ContentCut fontSize="small" />
                                    </ListItemIcon>
                                    <ListItemText>Importar catálogo</ListItemText>

                                </MenuItem>
                                <MenuItem onClick={handleBlock.new}>
                                    <ListItemIcon>
                                        <ContentCopy fontSize="small" />
                                    </ListItemIcon>
                                    <ListItemText>Añadir producto</ListItemText>

                                </MenuItem>
                                <MenuItem onClick={handleBlock.orders}>
                                    <ListItemIcon>
                                        <ContentPaste fontSize="small" />
                                    </ListItemIcon>
                                    <ListItemText>Paste</ListItemText>

                                </MenuItem>
                                <MenuItem onClick={restartCategs}>
                                    <ListItemIcon>
                                        <ContentPaste fontSize="small" />
                                    </ListItemIcon>
                                    <ListItemText>Creat categs</ListItemText>

                                </MenuItem>


                            </MenuList>
                        </Paper>
                    </Grid>

                    <Grid item xs={6} sm={4} md={3} lg={9} >



                        <Paper>
                            {components[block]}
                        </Paper>

                    </Grid>

                </Grid>
            </Box>
        </Container >
    )
}

export default Admin


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