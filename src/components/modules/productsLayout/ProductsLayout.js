import Container from "@mui/material/Container"
import Grid from "@mui/material/Grid"
import Box from "@mui/system/Box"
import GridCard from "../productGrid/GridCard"
import ProductsGrid from "../productGrid/ProductsGrid"
import FiltersBar from "../../filtersBar/FiltersBar"

const ProductsLayout = ({ products, filtersProps }) => {
    //console.log('*****************', products)
    return (
        <Container>
            <Box sx={{ mt: 5, flexGrow: 1, background: "green" }}>
                <Grid container spacing={2}>
                    <Grid item xs={6} sm={4} md={3} lg={3} >
                        <FiltersBar filtersProps={filtersProps}></FiltersBar>
                    </Grid>


                    <Grid item xs={6} sm={4} md={3} lg={9} >
                        <ProductsGrid products={products}></ProductsGrid>
                    </Grid>

                </Grid>
            </Box>
        </Container>

    )
}
export default ProductsLayout

//   <Box sx={{ background: "red" }}>filtros</Box>