
import { Grid } from '@mui/material';
import ProductsGrid from '../modules/productGrid/ProductsGrid'
import useFavorites from '../../hooks/swrHooks/useFavorites';

const WishListSection = ({ user }) => {

    const { favorites, isLoadingFavs, isErrorFavs, mutateFavs } = useFavorites(user._id)
    console.log('favorites en wishlistsection', favorites)
    /*
        React.useEffect(() => {
    
        }, [])
        */
    return (

        <Grid item xs={6} sm={4} md={3} lg={9} >
            <ProductsGrid
                products={favorites}
            />
        </Grid>
    )
}

export default WishListSection