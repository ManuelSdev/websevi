import { useAppContext } from "../context"

import Button from "@mui/material/Button"
import CardMedia from "@mui/material/CardMedia"
import Container from "@mui/material/Container"
import Grid from "@mui/material/Grid"
import Paper from "@mui/material/Paper"
import Step from "@mui/material/Step"
import StepLabel from "@mui/material/StepLabel"
import Stepper from "@mui/material/Stepper"
import Typography from "@mui/material/Typography"
import IconButton from "@mui/material/IconButton"
import DeleteIcon from '@mui/icons-material/HighlightOffOutlined';
import { Box } from "@mui/system"


const CartStep = ({ setButtonIsActive }) => {

    const { cart, setCart } = useAppContext()

    setButtonIsActive(true)

    const handleDeletes = productToDelete => ev => {
        ev.preventDefault()
        const newCart = cart.filter(product => product._id !== productToDelete._id)
        console.log('newcart jskjskjslksjlñ', newCart)

        setCart(newCart)
    }

    return (
        <>
            <Box sx={{ flexGrow: 1, background: "green" }}> <Typography>Articulos en tu carrito</Typography></Box>

            <Grid container  >
                <Grid item xs={12} sm={12} md={8} lg={6} >
                    Articulo
                </Grid>
                <Grid item xs={12} sm={12} md={8} lg={2} >
                    Precio
                </Grid>
                <Grid item xs={12} sm={12} md={8} lg={2} >
                    Unidades
                </Grid>
                <Grid item xs={12} sm={12} md={8} lg={2} >
                    Total
                </Grid>
            </Grid>
            {cart.map(product => {
                const [mainImage] = product.images
                return (
                    <Paper key={product._id} ax={{ display: "flex", flexDirection: 'row' }}>
                        <Grid container >
                            <Grid container spacing={2} item xs={12} sm={12} md={8} lg={6} >
                                <Grid item xs={12} sm={12} md={8} lg={3} >
                                    <CardMedia
                                        component="img"
                                        // image="https://livedemo00.template-help.com/opencart_58281/image/cache/catalog/products/product-22-800x800.png"
                                        image={mainImage}
                                        alt="Paella dish"
                                    />
                                </Grid>
                                <Grid item xs={12} sm={12} md={8} lg={9} >
                                    {product.name}
                                </Grid>
                            </Grid>
                            <Grid item xs={12} sm={12} md={8} lg={2} >
                                {product.price}
                            </Grid>
                            <Grid item xs={12} sm={12} md={8} lg={2} >
                                {product.amount}
                            </Grid>
                            <Grid item xs={12} sm={12} md={8} lg={1.5} >
                                {product.amount * product.price} €
                            </Grid>
                            <Grid item xs={12} sm={12} md={8} lg={0.5} >
                                <IconButton
                                    onClick={handleDeletes(product)}
                                    color="primary" aria-label="upload picture" component="span">
                                    <DeleteIcon />
                                </IconButton>
                            </Grid>

                        </Grid>

                    </Paper>
                )

            }
            )}
        </>
    )
}

export default CartStep