import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Rating from '@mui/material/Rating';
import SvgIcon from '@mui/material/SvgIcon';
import Typography from '@mui/material/Typography';
import React from 'react';
import Box from "@mui/system/Box";
import { useAppContext } from '../context';
import Link from '../elements/Link'
import useUser from '../../hooks/swrHooks/useUser';
import { updateFavorites } from '../../lib/api/user';
import FavoriteIcon from '@mui/icons-material/Favorite';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
const ProductDetails = ({ product }) => {

    const { setCart, cart, authId } = useAppContext()
    /**GESTIÓN DE FAVORITOS */
    const { user, isLoading, isError, mutate } = useUser(authId)

    const handleFavorites = async () => {
        const res = await updateFavorites(user._id, product._id)
        res.resolved && mutate()
    }

    const [productToCart, setProductToCart] = React.useState({
        ...product,
        amount: 0,
    })
    const [amountField, setAmountField] = React.useState(1)

    const { amount } = productToCart
    const firstRender = React.useRef(true);
    const allowUseEffect = React.useRef(false);

    const increaseAmount = () => setAmountField(amountField + 1)
    const decreaseAmount = () => amountField > 1 && setAmountField(amountField - 1)


    const addToCart = () => {
        allowUseEffect.current = true
        let cartCurrentAmountOfThisProduct = 0
        cart.map(productInCart => {
            //Si el producto actual ya se encuentra en el carrito, actualiza el valor
            //amount sumando el amount del producto del carrito con el amount del producto actual
            if (productInCart._id === product._id) {
                cartCurrentAmountOfThisProduct = productInCart.amount
            }
        })
        return setProductToCart({ ...product, amount: amount + amountField + cartCurrentAmountOfThisProduct })
    }

    React.useEffect(() => {
        if (firstRender.current) {
            firstRender.current = false;
            return;
        }
        if (!allowUseEffect.current) {
            return
        }
        const cartWithoutThisProduct = cart.filter(productInCart => productInCart._id !== product._id)
        const newCart = Array.from([...cartWithoutThisProduct, productToCart])
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
                <Typography gutterBottom>{product.Marca} </Typography>
            </Box>
            <Box sx={{
                display: 'flex',
                flexDirection: 'row',
            }}>
                <Typography sx={{ fontWeight: 'bold', mr: 5 }}>EAN: </Typography>
                <Typography gutterBottom>56464646 </Typography>
            </Box>
            <Stack
                direction='row'
                alignItems='center'
                mb={1.5}
            >
                <IconButton
                    onClick={decreaseAmount}
                    sx={{
                        bgcolor: 'corpGreen.main',
                        borderRadius: 1,
                        color: 'white',
                        '&:hover': {
                            bgcolor: 'rgb(0, 109, 120)',
                            color: 'white',
                            boxShadow: '0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)'
                        }
                    }}
                >
                    <SvgIcon>
                        <svg ><path d="M19 13H5v-2h14v2z"></path></svg>
                    </SvgIcon>
                </IconButton>
                <TextField
                    sx={{
                        width: "5ch",
                    }}
                    size="small"
                    value={amountField}
                    id="outlined-basic"
                    variant="outlined" />
                <IconButton
                    onClick={increaseAmount}
                    sx={{
                        bgcolor: 'corpGreen.main',
                        borderRadius: 1,
                        color: 'white',
                        '&:hover': {
                            bgcolor: 'rgb(0, 109, 120)',
                            color: 'white',
                            boxShadow: '0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)'
                        }
                    }}
                >
                    <SvgIcon >
                        <svg  ><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path></svg>
                    </SvgIcon>
                </IconButton >
            </Stack>
            <Box>
                <Button
                    onClick={addToCart}
                >Añadir al carrito</Button>
            </Box>
            {
                user?.favorites ?
                    user.favorites.includes(product._id) ?
                        <Box>
                            <Button
                                onClick={handleFavorites}
                                endIcon={
                                    <FavoriteIcon sx={{ color: 'red' }} />}
                            >
                                Eliminar de la lista de deseos
                            </Button>
                        </Box>
                        :
                        <Box>
                            <Button
                                onClick={handleFavorites}
                                endIcon={
                                    <FavoriteIcon fontSize='large' />}
                            >
                                Añadir a la lista de deseos
                            </Button>
                        </Box>
                    :
                    <Box>
                        <Button
                            onClick={handleFavorites}
                            endIcon={
                                <FavoriteIcon fontSize='large' />}
                        >
                            Añadir a la lista de deseos
                        </Button>
                    </Box>
            }
            <Box>
                <Link href="/carrito">
                    <Button
                        onClick={addToCart}
                    >Comprar</Button>
                </Link>
            </Box>
        </Box >
    )
}

export default ProductDetails

