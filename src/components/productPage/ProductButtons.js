import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SvgIcon from '@mui/material/SvgIcon';
import React from 'react';
import Box from "@mui/system/Box";
import Link from '../elements/Link'
import { updateFavorites } from '../../lib/api/user';
import FavoriteIcon from '@mui/icons-material/Favorite';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import { redirectToAuth } from "supertokens-auth-react/recipe/thirdpartyemailpassword";
import { useDispatch, useSelector } from 'react-redux';
import { getAuth } from '../../app/store/selectors';
import { cartAddProduct } from '../../app/store/cartSlice';
import { useGetUserQuery, useUpdateUserFavMutation } from '../../app/store/services/userApi';

const ProductButtons = ({ product }) => {

    const { isLogged, authId } = useSelector(getAuth)

    const [updateUserFav, result] = useUpdateUserFavMutation()
    const dispatch = useDispatch()

    const { data: user, isLoading, isFetching, isError, refetch } = console.log('----ProductButtons.js') || useGetUserQuery(authId)

    const handleFavorites = async () => {
        isLogged ?
            //  const { done } = await updateFavorites(user._id, product._id)
            // done && refetch()
            await updateUserFav({ userId: user._id, productId: product._id })
            :
            redirectToAuth({ redirectBack: true })

    }

    const [amountField, setAmountField] = React.useState(1)

    const increaseAmount = () => setAmountField(amountField + 1)

    const decreaseAmount = () => amountField > 1 && setAmountField(amountField - 1)


    return (
        <Box sx={{ flexGrow: 1, background: "white" }}>
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
                    onClick={() => dispatch(cartAddProduct([product, amountField]))}
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
                        onClick={() => dispatch(cartAddProduct([product, amountField]))}
                    >Comprar</Button>
                </Link>
            </Box>
        </Box >
    )
}

export default ProductButtons

