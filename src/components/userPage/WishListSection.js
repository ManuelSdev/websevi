
import ProductsGrid from '../products/ProductsGrid'
import Box from '@mui/system/Box';
import Stack from '@mui/material/Stack';
import Typography from "@mui/material/Typography"
import CircularProgress from '@mui/material/CircularProgress';
import { useGetUserFavsQuery } from '../../app/store/services/userApi';


const WishListSection = ({ user }) => {

    const { data: favorites, isFetching: isLoadingFavs, refetch: refetchUser } = useGetUserFavsQuery(user._id)

    return (
        <Box>
            <Stack mb={2} direction='row'>
                <Typography variant='h5' sx={{ fontWeight: 'bold' }} >Mi lista de deseos</Typography>
            </Stack>
            {isLoadingFavs ?
                <Stack sx={{ color: 'grey.500', justifyContent: 'center' }} spacing={2} direction="row">
                    <CircularProgress color="primary" />
                </Stack>
                :
                favorites?.length > 0 ?
                    <ProductsGrid
                        products={favorites}
                    />
                    :
                    <Box>No se han añadido productos a la lista de deseos</Box>
            }
        </Box>
    )
}

export default WishListSection