
import ProductsGrid from '../products/ProductsGrid'
import useFavorites from '../../hooks/swrHooks/useFavorites';
import Box from '@mui/system/Box';
import Stack from '@mui/material/Stack';
import Typography from "@mui/material/Typography"


const WishListSection = ({ user }) => {

    const { favorites, isLoadingFavs, isErrorFavs, mutateFavs } = useFavorites(user._id)
    console.log('favorites en wishlistsection', favorites)
    /*
        React.useEffect(() => {
    
        }, [])
        */
    return (

        <Box>
            <Stack mb={2} direction='row'>
                <Typography variant='h5' sx={{ fontWeight: 'bold' }} >Mi lista de deseos</Typography>

            </Stack>
            <ProductsGrid
                products={favorites}
            />
        </Box>



    )
}

export default WishListSection