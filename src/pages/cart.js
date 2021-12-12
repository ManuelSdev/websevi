
import Button from "@mui/material/Button"
import CardMedia from "@mui/material/CardMedia"
import Container from "@mui/material/Container"
import Grid from "@mui/material/Grid"
import Paper from "@mui/material/Paper"
import Step from "@mui/material/Step"
import StepLabel from "@mui/material/StepLabel"
import Stepper from "@mui/material/Stepper"
import Typography from "@mui/material/Typography"


import Box from "@mui/system/Box"
import DeleteIcon from '@mui/icons-material/HighlightOffOutlined';
import s from '@mui/icons-material/DeleteForeverOutlined';
import ss from '@mui/icons-material/CloseOutlined';
import { useAppContext } from "../components/context"
import React from "react"
import { sumArray } from "../lib/utils/sumArray"
import { AppBar, CssBaseline, IconButton, Toolbar } from "@mui/material"
import IconCorpName from "../components/elements/IconCorpName"
import { ThemeProvider } from "@emotion/react"
import theme from "../assets/theme"

const CartPage = () => {
    const { cart, setCart } = useAppContext()

    //const cartTotalPrice = React.useRef(0);
    const steps = [
        'Carrito',
        'Envío',
        'Pago',
        'Resumen'
    ];

    const handleDeletes = productToDelete => ev => {
        ev.preventDefault()
        const newCart = cart.filter(product => product._id !== productToDelete._id)
        console.log('newcart jskjskjslksjlñ', newCart)
        setCart(newCart)
    }
    const handleDelete = (productToDelete) => { handleDeletes(productToDelete) }
    const h = (prod) => ev => console.log('eventt', prod)
    const f = () => { console.log('eventt') }
    const rowsTotalPrice = cart.map(product => product.amount * product.price)
    const cartTotalPrice = cart.length > 0 ?
        sumArray(rowsTotalPrice)
        :
        0
    console.log('+++++++++++++++', cart)

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />

            <AppBar position="sticky" sx={{ mb: '2em' }}>
                <Toolbar
                    sx={{
                        bgcolor: 'corpBlack.main',
                        flexDirection: 'row-reverse',
                        height: "2em",
                        color: "corpWhite.main",
                        '@media (min-width: 600px)': {
                            minHeight: "1em"
                        }
                    }}
                >
                    <Button
                        onCLick={f}
                    >hoo
                    </Button >

                    <p>Lunes a jueves ........635 41 55 73 </p>
                </Toolbar>
                <Toolbar

                    sx={{
                        //borderRadius: "80px",

                        bgcolor: 'corpWhite.main',
                        justifyContent: 'space-between',
                        height: "5em",
                        //color: "corpBlack.main"
                    }}
                >
                    <IconCorpName viewBox="0 0 381.17 68.88"

                        sx={{ height: "100%", fontSize: 250 }}
                    ></IconCorpName>
                </Toolbar>

            </AppBar>
            <Container>
                <Box sx={{ width: '100%', background: "red" }}>
                    <Stepper activeStep={1} alternativeLabel>
                        {steps.map((label) => (
                            <Step key={label}>
                                <StepLabel>{label}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                </Box>
                <Box sx={{ flexGrow: 1, background: "orange", marginTop: '30px' }}>

                    <Grid container spacing={2}>
                        <Grid container item xs={12} sm={12} md={8} lg={8} >
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

                                return (
                                    <Paper key={product._id} ax={{ display: "flex", flexDirection: 'row' }}>
                                        <Grid container >
                                            <Grid container spacing={2} item xs={12} sm={12} md={8} lg={6} >
                                                <Grid item xs={12} sm={12} md={8} lg={3} >
                                                    <CardMedia
                                                        component="img"
                                                        // image="https://livedemo00.template-help.com/opencart_58281/image/cache/catalog/products/product-22-800x800.png"
                                                        image={product.images}
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
                        </Grid>
                        <Grid item sx={{ background: "grey" }} xs={12} sm={12} md={4} lg={4} >
                            <Paper>
                                <Typography>TOTAL :{cartTotalPrice}</Typography>
                                <Button>CONTINUAR</Button>
                            </Paper>
                        </Grid>
                    </Grid>
                </Box>
            </Container >
        </ThemeProvider >
    )
}

export default CartPage