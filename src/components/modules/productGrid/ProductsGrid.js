import Grid from "@mui/material/Grid"
import Box from "@mui/system/Box"
import GridCard from './GridCard'

const ProductsGrid = ({ products, selectedPricesRange }) => {
    //Hay tres elementos por filas, calculamos el número de filas necesarias
    const rows = () => products.length % 3 === 0 ? products.lengt / 3 : products.lengt / 3 + 1
    //REVIsa: cuando metas este componente en el index.js

    const [minSelectedPrice, maxSelectedPrice] = selectedPricesRange ? selectedPricesRange : []
    return (
        <>

            <Box sx={{ mb: 3, flexGrow: 1, background: "green" }}>
                <Grid container spacing={2}>


                    {products && products.map(product =>
                        minSelectedPrice && maxSelectedPrice ?
                            (product.price >= minSelectedPrice && product.price <= maxSelectedPrice) &&
                            <Grid key={product._id} item xs={12} sm={6} md={4} lg={4} >
                                <GridCard product={product}>xs=8</GridCard>
                            </Grid>
                            :
                            <Grid key={product._id} item xs={12} sm={6} md={4} lg={4} >
                                <GridCard product={product}>xs=8</GridCard>
                            </Grid>
                    )}

                </Grid>
            </Box>

        </>
    )
}
export default ProductsGrid

