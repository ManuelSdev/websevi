import Grid from "@mui/material/Grid"
import Box from "@mui/system/Box"
import GridCard from './GridCard'
import React from "react";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
const ProductsGrid = ({ products, searchKeys, selectedPricesRange }) => {

    const [displayedProducts, setDisplayedProduct] = React.useState(0)

    React.useEffect(() => {
        setDisplayedProduct(9)
    }, [products])
    const handleDisplayed = () => setDisplayedProduct(displayedProducts + 9)
    console.log(searchKeys)
    console.log(!!products)
    const [minSelectedPrice, maxSelectedPrice] = selectedPricesRange ? selectedPricesRange : []
    /**
     * array.filter: usado para la paginación. Se mostrarán un número de productos igual displayedProducts
     * array.map: usado para el filtro de precio 
     */
    return (
        !!products.length ?
            <Box sx={{
                mb: 3, flexGrow: 1,
            }}>
                <Grid container spacing={2}>
                    {products && products
                        .filter((product, index) => index <= displayedProducts - 1)
                        .map(product =>
                            minSelectedPrice && maxSelectedPrice ?
                                (product.price >= minSelectedPrice && product.price <= maxSelectedPrice) &&
                                <Grid key={product._id} item xs={6} sm={4} md={4} lg={4} >
                                    <GridCard product={product}>xs=8</GridCard>
                                </Grid>
                                :
                                <Grid key={product._id} item xs={6} sm={4} md={4} lg={4} >
                                    <GridCard product={product}>xs=8</GridCard>
                                </Grid>
                        )
                    }
                </Grid>
                {displayedProducts < products.length &&
                    <Box mt={2} sx={{ display: 'flex', justifyContent: 'center', }} >
                        <Button
                            onClick={handleDisplayed}
                        >
                            Mostrar más
                        </Button>
                    </Box>
                }
            </Box>
            :
            searchKeys ?
                <Typography variant="h5">
                    No hay resultados para "{searchKeys}"
                </Typography>
                :
                <Box>
                    <Typography variant="h6">
                        No hay productos en la categoría seleccionada. Las categorías funcionales en
                        este prototipo son:
                    </Typography>
                    <Typography variant="h6">   - componentes/procesadores</Typography>
                    <Typography variant="h6"> - componentes/placas base</Typography>
                </Box>






    )
}

export default ProductsGrid
