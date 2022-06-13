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
import ProductAmountButton from './ProductAmountButton';

const ProductButtons = ({ product }) => {

    const { isLogged, authId } = useSelector(getAuth)

    const [updateUserFav, result] = useUpdateUserFavMutation()
    const dispatch = useDispatch()

    const { data: user, isLoading, isFetching, isError, refetch } = useGetUserQuery(authId)

    const handleFavorites = async () => {
        isLogged ?
            //  const { done } = await updateFavorites(user._id, product._id)
            // done && refetch()
            await updateUserFav({ userId: user._id, productId: product._id })
            :
            redirectToAuth({ redirectBack: true })

    }

    const [amountField, setAmountField] = React.useState(1)


    return (
        <Box sx={{ flexGrow: 1, background: "white" }}>
            <ProductAmountButton amountField={amountField} setAmountField={setAmountField} />

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

