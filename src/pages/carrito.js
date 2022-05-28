
import Typography from "@mui/material/Typography"
import { useAppContext } from "../components/context"
import React from "react"
import Toolbar from "@mui/material/Toolbar"
import AppBar from "@mui/material/AppBar"
import IconCorpName from "../components/elements/IconCorpName"
import CartStepper from "../components/cart/CartStepper"
import Modal from "../components/cart/Modal"
import { useRouter } from "next/router"
import Stack from "@mui/material/Stack"
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import { useDispatch, useSelector } from "react-redux"
import { getAuth, getCart, getCartPrice } from "../app/store/selectors"
import { cartSet } from "../app/store/cartSlice"
import { useAddOrderMutation } from "../app/store/services/orderApi"
import { useGetUserQuery } from "../app/store/services/userApi"

const CartPage = () => {
    const router = useRouter()
    const { isLogged, authId } = useSelector(getAuth)

    const { cartProducts: cart } = useSelector(getCart)

    const cartTotalPrice = useSelector(getCartPrice)

    const dispatch = useDispatch()

    const { data: user, isFetching: isFetchingUser, refetch: refetchUser } = console.log('---carrito') || useGetUserQuery(authId)
    console.log('-------carrito user', user)
    const [
        addOrder,
        { status, isUninitialized, isLoading, isSuccess, data, isError, reset }
    ] = useAddOrderMutation({ fixedCacheKey: 'carrito-key', })

    //VENTANA MODAL
    const [open, setOpen] = React.useState(false);

    const [order, setOrder] = React.useState({
        userId: '',
        orderCart: [],
        amount: '',
        payment: ''
    })

    React.useEffect(() => {
        if (isFetchingUser) return
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
        user && setOrder({
            ...order,
            userId: user._id,
            orderCart,
            amount: cartTotalPrice
        })
    }, [user, cart])



    const handleSubmit = async ev => {
        ev.preventDefault();

        try {
            /**
             * If you need to access the error or success payload immediately after a mutation, you can chain .unwrap().
             * Si no usas unwrap, no hace catch del error
             */
            await addOrder(order).unwrap()
            localStorage.removeItem('cart')
            dispatch(cartSet([]))
            handleClickOpen()
        } catch (error) {
            console.log('ERROR ADD ORDER EN CARRITO.JS', error)
            handleClickOpen()
        }

    };

    //VENTANA MODAL
    const handleClickOpen = () => {
        setOpen(true);

    };

    const handleClose = () => {
        setOpen(false);
        isSuccess && router.push('/')
    };

    return (
        <>
            <Modal
                handleClickOpen={handleClickOpen}
                handleClose={handleClose}
                open={open}
                mainMessage={
                    isSuccess ?
                        'El pedido se realizó correctamente'
                        :
                        'Hubo un error al procesar su pedido. Vuelva a intentarlo'
                }
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
                        bgcolor: 'corpWhite.main',
                        justifyContent: 'space-between',
                        height: "5em",
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
                order={order}
                setOrder={setOrder}
                refetchUser={refetchUser}
                user={user}
                isFetchingUser={isFetchingUser}
            />
        </>
    )
}

export default CartPage

