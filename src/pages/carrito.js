
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
import Toolbar from "@mui/material/Toolbar"

import AppBar from "@mui/material/AppBar"
import IconCorpName from "../components/elements/IconCorpName"
import { ThemeProvider } from "@emotion/react"
import theme from "../assets/theme"
import CartStepper from "../components/cart/CartStepper"
import CartStep from "../components/cart/CartStep"
import { createOrder } from "../lib/api/order"
import useUser from "../hooks/swrHooks/useUser"
import Modal from "../components/cart/Modal"
import { useRouter } from "next/router"
import Stack from "@mui/material/Stack"
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';


const CartPage = () => {
    const router = useRouter()
    //VENTANA MODAL
    const [open, setOpen] = React.useState(false);

    const { cart, setCart, isLogged, authId } = useAppContext()

    // console.log('~$$$$$$', cart)
    const { user, isLoading, isError, mutate } = useUser(authId)
    //users es un array con un unico objeto user que contiene el campo _id: 


    const [order, setOrder] = React.useState({
        userId: '',
        orderCart: [],
        amount: '',
        payment: ''
    })

    //console.log('CARRITO', cart)
    React.useEffect(() => {
        if (isLoading) return
        // console.log('USERRRR', user)
        const orderCart = cart.map(product => {
            const [productImage] = product.images
            return {
                productName: product.name,
                productAmount: product.amount,
                productId: product._id,
                productPrice: product.price,
                productImage
            }
        })
        setOrder({
            ...order,
            userId: user._id,
            orderCart,
            amount: cartTotalPrice
        })
    }, [user, cart])

    const handleSubmit = async ev => {
        // console.log("9999999999999999999999999999999999", formValue)
        ev.preventDefault();
        try {
            const { result: ok, message } = await createOrder(order)
            if (ok) {
                localStorage.removeItem('cart')
                setCart([])
                handleClickOpen()
            }


            console.log('PEDIDO CREADO', message)
        } catch (error) {
            console.log(error)
        }

    };


    const handleDeletes = productToDelete => ev => {
        ev.preventDefault()
        const newCart = cart.filter(product => product._id !== productToDelete._id)
        //console.log('newcart jskjskjslksjlñ', newCart)
        setCart(newCart)
    }

    const rowsTotalPrice = cart.map(product => product.price * product.amount)
    //console.log('rowsTotalPrice', rowsTotalPrice)
    const cartTotalPrice = cart.length > 0 ?
        sum(...rowsTotalPrice)
        :
        0
    console.log('+++++++++++++++', order)

    //VENTANA MODAL
    const handleClickOpen = () => {
        setOpen(true);

    };

    const handleClose = () => {
        setOpen(false);
        router.push('/')
    };

    return (
        <>
            <Modal
                handleClickOpen={handleClickOpen}
                handleClose={handleClose}
                open={open}
                mainMessage={"El pedido ha sido completado"}
            />
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

                    <Stack
                        alignItems='center'
                        direction='row'>
                        <Typography
                            mr={3}
                            variant="subtitle1">Lunes a jueves 10-19h. Viernes 10-15h </Typography>
                        <LocalPhoneIcon
                        />
                        <Typography ml={0.5} variant="subtitle1">635 415 573</Typography>
                    </Stack>
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



            <CartStepper
                cartTotalPrice={cartTotalPrice}
                handleSubmit={handleSubmit}
                isLogged={isLogged}
                user={user}
                isLoading={isLoading}
                mutate={mutate}
                order={order}
                setOrder={setOrder}
            />
        </>
    )
}

export default CartPage

/*

            */