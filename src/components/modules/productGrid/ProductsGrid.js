import Grid from "@mui/material/Grid"
import Box from "@mui/system/Box"
import GridCard from './GridCard'

const ProductsGrid = ({ products, priceSliderProps }) => {
    //Hay tres elementos por filas, calculamos el número de filas necesarias
    const rows = () => products.length % 3 === 0 ? products.lengt / 3 : products.lengt / 3 + 1
    //console.log('*****************', products)
    const [minPrice, maxPrice] = priceSliderProps.priceRange
    return (
        <>

            <Box sx={{ mb: 3, flexGrow: 1, background: "green" }}>
                <Grid container spacing={2}>


                    {products && products.map(product => (product.price >= minPrice && product.price <= maxPrice) &&

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

/*
 {products.map((product, index) => {


            })}
            */