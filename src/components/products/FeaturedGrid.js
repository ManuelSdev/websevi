import Grid from "@mui/material/Grid"
import Box from "@mui/system/Box"
import GridCard from './GridCard'
import React from "react";
import Button from "@mui/material/Button";
const FeaturedGrid = ({ products, selectedPricesRange }) => {

    const [displayedProducts, setDisplayedProduct] = React.useState(0)
    React.useEffect(() => {
        setDisplayedProduct(9)
        console.log('@@@@@@@@@@@@')
    }, [products])
    const handleDisplayed = () => setDisplayedProduct(displayedProducts + 9)
    //REVIsa: cuando metas este componente en el index.js

    const [minSelectedPrice, maxSelectedPrice] = selectedPricesRange ? selectedPricesRange : []
    console.log('DISPLAYED', displayedProducts)
    /**
     * array.filter: usado para la paginación. Se mostrarán un número de productos igual displayedProducts
     * array.map: usado para el filtro de precio 
     */
    return (
        <>
            <Box sx={{ mb: 3, flexGrow: 1, background: "green" }}>
                <Grid container spacing={2}>
                    {products && products.map(product =>
                        <Grid key={product._id} item xs={6} sm={4} md={3} lg={3} >
                            <GridCard product={product}>xs=8</GridCard>
                        </Grid>
                    )}
                </Grid>



            </Box>

        </>
    )
}
export default FeaturedGrid


