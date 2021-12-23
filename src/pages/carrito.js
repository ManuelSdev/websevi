
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
import { sum } from "../lib/utils/sum"
import { AppBar, CssBaseline, IconButton, Toolbar } from "@mui/material"
import IconCorpName from "../components/elements/IconCorpName"
import { ThemeProvider } from "@emotion/react"
import theme from "../assets/theme"
import CartStepper from "../components/cart/CartStepper"
import CartStep from "../components/cart/CartStep"

const CartPage = () => {
    const { cart, setCart, isLogged } = useAppContext()

    //const cartTotalPrice = React.useRef(0);


    const handleDeletes = productToDelete => ev => {
        ev.preventDefault()
        const newCart = cart.filter(product => product._id !== productToDelete._id)
        //console.log('newcart jskjskjslksjlñ', newCart)
        setCart(newCart)
    }
    const handleDelete = (productToDelete) => { handleDeletes(productToDelete) }
    const h = (prod) => ev => console.log('eventt', prod)
    const f = () => { console.log('eventt') }
    const rowsTotalPrice = cart.map(product => product.amount * product.price)
    const cartTotalPrice = cart.length > 0 ?
        sum(...rowsTotalPrice)
        :
        0
    //console.log('+++++++++++++++', rowsTotalPrice.map(e => typeof e))

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
                        onClick={f}
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



            <CartStepper cartTotalPrice={cartTotalPrice} isLogged={isLogged} />

        </ThemeProvider >
    )
}

export default CartPage

/*

            */