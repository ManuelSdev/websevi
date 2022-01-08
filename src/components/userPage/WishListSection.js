
import ProductsGrid from '../products/ProductsGrid'
import useFavorites from '../../hooks/swrHooks/useFavorites';
import Box from '@mui/system/Box';
import Stack from '@mui/material/Stack';
import Typography from "@mui/material/Typography"


const WishListSection = ({ user }) => {

    const { favorites, isLoadingFavs, isErrorFavs, mutateFavs } = useFavorites(user._id)

    return (
        <Box>
            <Stack mb={2} direction='row'>
                <Typography variant='h5' sx={{ fontWeight: 'bold' }} >Mi lista de deseos</Typography>
            </Stack>
            {favorites?.length > 0 ?
                <ProductsGrid
                    products={favorites}
                />
                :
                <Box>NO HAY FAVORITOS</Box>
            }
        </Box>
    )
}

export default WishListSection