import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Rating from '@mui/material/Rating';
import SvgIcon from '@mui/material/SvgIcon';
import Typography from '@mui/material/Typography';

import React from 'react';
import Box from "@mui/system/Box";
import useForm from '../../../hooks/useForm';
import usePromise from '../../../hooks/usePromise';
import { useAppContext } from '../../context';
import Link from '../../elements/Link'
import useUser from '../../../hooks/swrHooks/useUser';
import { updateFavorites } from '../../../lib/api/user';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
const ProductDetails = ({ product }) => {

    const { setCart, cart, authId } = useAppContext()
    /**GESTIÓN DE FAVORITOS */
    const { users, isLoading, isError, mutate } = useUser(authId)
    const [user] = isLoading ? [{}] : users



    const handleFavorites = async () => {
        const res = await updateFavorites(user._id, product._id)
        res.resolved && mutate()
        console.log('UPDATE FAV: ', res)
    }

    const [productToCart, setProductToCart] = React.useState({
        ...product,
        amount: 0,
    })
    const [amountField, setAmountField] = React.useState(1)

    const { amount } = productToCart
    const onlyUpdateAmount = React.useRef(true);
    const firstRender = React.useRef(true);
    const allowUseEffect = React.useRef(false);

    // console.log('CART ACTUAL', cart)

    const increaseAmount = () => setAmountField(amountField + 1)
    const decreaseAmount = () => amountField > 1 && setAmountField(amountField - 1)



    const addToCart = () => {
        allowUseEffect.current = true
        let cartCurrentAmountOfThisProduct = 0
        cart.map(productInCart => {
            // productInCart && console.log('IN CART ID ', productInCart._id)
            //  console.log('PROD ID  ', product)
            //Si el producto actual ya se encuentra en el carrito, actualiza el valor
            //amount sumando el amount del producto del carrito con el amount del producto actual
            if (productInCart._id === product._id) {
                // console.log('productInCart.amount ', productInCart.amount)
                //  console.log(' product.amount ', productToCart.amount)
                //const updatedAmount = productInCart.amount + productToCart.amount
                // console.log('UPDATED', updatedAmount)

                //setProductToCart({ ...product, amount: updatedAmount })
                cartCurrentAmountOfThisProduct = productInCart.amount
            }
        })
        //console.log('CUANTOS', amount + amountField + cartCurrentAmountOfThisProduct)
        return setProductToCart({ ...product, amount: amount + amountField + cartCurrentAmountOfThisProduct })
    }
    React.useEffect(() => {
        if (firstRender.current) {
            firstRender.current = false;
            return;
        }
        // console.log('USE DETAIL')
        // console.log('allowUseEffect.current', allowUseEffect.current)
        if (!allowUseEffect.current) {
            //console.log('falso++++++++++++++++++++++++++')
            return
        }

        const cartWithoutThisProduct = cart.filter(productInCart => productInCart._id !== product._id)

        //console.log('cartWithoutThisProduct', cartWithoutThisProduct)
        //  console.log('productToCart', productToCart)
        const newCart = Array.from([...cartWithoutThisProduct, productToCart])
        // console.log('newCart', newCart)
        setCart([...newCart])
        setProductToCart({ ...product, amount: 0 })
        allowUseEffect.current = false
    }, [productToCart])


    return (
        <Box sx={{ flexGrow: 1, background: "white" }}>

            <Typography
                sx={{ fontWeight: 'bold' }}

                variant="h6"
                component="div"

            >
                {product.name}
            </Typography>
            <Typography
                sx={{ fontWeight: 'bold' }}
                color='corpGreen.main'
                gutterBottom
                variant="h3"
                component="div"

            >
                {product.price} €
            </Typography>
            <Box sx={{
                display: 'flex',
                flexDirection: 'row',
            }}>
                <Rating
                    sx={{ mr: 5 }}
                    defaultValue={2.5}
                    precision={0.5} />

                <Typography gutterBottom >30 Valoraciones </Typography>
            </Box>
            <Box sx={{
                display: 'flex',
                flexDirection: 'row',
            }}>
                <Typography
                    sx={{ fontWeight: 'bold', mr: 5 }}>Marca :</Typography>
                <Typography gutterBottom>{product.brand} </Typography>
            </Box>
            <Box sx={{
                display: 'flex',
                flexDirection: 'row',
            }}>
                <Typography sx={{ fontWeight: 'bold', mr: 5 }}>EAN: </Typography>
                <Typography gutterBottom>56464646 </Typography>
            </Box>


            <Box marginBottom='dense' variant="contained">
                <Button
                    onClick={decreaseAmount}
                >
                    <SvgIcon>
                        <svg ><path d="M19 13H5v-2h14v2z"></path></svg>

                    </SvgIcon>
                </Button>
                <TextField
                    sx={{
                        width: "5ch",
                    }}
                    size="small"
                    //defaultValue="a"
                    value={amountField}
                    id="outlined-basic"
                    variant="outlined" />
                <Button
                    onClick={increaseAmount}
                >
                    <SvgIcon>
                        <svg  ><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path></svg>

                    </SvgIcon>
                </Button>
            </Box>

            <Box>
                <Button
                    onClick={addToCart}
                >Añadir al carrito</Button>
            </Box>
            {user?.favorites ? console.log('PUTO USER', user) ||
                user.favorites.includes(product._id) ?
                <Box>
                    <Button
                        onClick={handleFavorites}
                        endIcon={
                            <FavoriteIcon
                                color='corpGreen'


                            />}
                    >
                        Eliminar de la lista de deseos
                    </Button>
                </Box>
                :
                <Box>
                    <Button
                        onClick={handleFavorites}
                        endIcon={
                            <FavoriteBorderIcon
                                color='corpGreen'
                                fontSize='large'
                            />}
                    >
                        Añadir a la lista de deseos
                    </Button>
                </Box>
                :
                <Box>
                    <Button
                        onClick={handleFavorites}
                        endIcon={
                            <FavoriteBorderIcon
                                color='corpGreen'
                                fontSize='large'
                            />}
                    >
                        Añadir a la lista de deseos
                    </Button>
                </Box>
            }

            <Box>
                <Link href="/carrito">
                    <Button

                    >Comprar</Button>
                </Link>
            </Box>


        </Box >

    )
}

export default ProductDetails

/*
    React.useEffect(() => {
        if (firstRender.current) {
            firstRender.current = false;
            return;
        }
        const cartWithoutThisProduct = cart.map(productInCart => {
            //Si el producto actual ya se encuentra en el carrito, actualiza el valor
            //amount sumando el amount del producto del carrito con el amount del producto actual
            //en este caso, no se retorna ni el producto del carrito ni el actual y el array
            //"cartWithoutThisProduct" mantiene todos los productos menos el actual
            if (productInCart?.id === product.id) {
                const updatedAmount = productInCart?.amount + product.amount
                setProductToCart({ ...product, amount: updatedAmount })
                //Si el producto del carrito no coincide con el actual, devuelve el producto que ya está en el carrito
            } else {
                return productInCart
            }
        })
        console.log('VIEJOOOO', cartWithoutThisProduct)
        const newCart = Array.from([...cartWithoutThisProduct, productToCart])
        setCart([...newCart])
    }, [productToCart])

      const addToCart = () => {
        productToCart === 0 && increaSeAmount()
        cart.map(productInCart => {
            productInCart && console.log('IN CART ID ', productInCart.id)
            console.log('PROD ID  ', product)
            //Si el producto actual ya se encuentra en el carrito, actualiza el valor
            //amount sumando el amount del producto del carrito con el amount del producto actual
            if (productInCart.id === product.id) {
                const updatedAmount = productInCart.amount + product.amount
                setProductToCart({ ...product, amount: updatedAmount })
            }
        })
        console.log('PUTO CART', cart)
        //  console.log('IN CART ID ', productInCart.id)
        console.log('PROD ID  ', product.id)
        const cartWithoutThisProduct = cart.filter(productInCart => productInCart.id !== product.id)

        console.log('VIEJOOOO', cartWithoutThisProduct)
        const newCart = Array.from([...cartWithoutThisProduct, productToCart])
        setCart([...newCart])
    }

    */