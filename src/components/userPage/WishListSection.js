
import { Grid } from '@mui/material';
import ProductsGrid from '../products/ProductsGrid'
import useFavorites from '../../hooks/swrHooks/useFavorites';

const WishListSection = ({ user }) => {

    const { favorites, isLoadingFavs, isErrorFavs, mutateFavs } = useFavorites(user._id)
    console.log('favorites en wishlistsection', favorites)
    /*
        React.useEffect(() => {
    
        }, [])
        */
    return (


        <ProductsGrid
            products={favorites}
        />

    )
}

export default WishListSection