import Container from "@mui/material/Container"
import Grid from "@mui/material/Grid"
import Box from "@mui/system/Box"
import GridCard from "../productGrid/GridCard"
import ProductsGrid from "../productGrid/ProductsGrid"
import FiltersBar from "../../filtersBar/FiltersBar"
import usePriceSlider from "../../../hooks/usePriceSlider"
import { useRouter } from "next/router"

const ProductsLayout = ({ products, filtersProps }) => {


    //PriceSlider es el único filtro (el de precio) que funciona del lado del cliente

    console.log('*****************', filtersProps)

    const router = useRouter()
    const { selectedPricesRange: currentSelectedPricesRange } = router.query
    const { pricesRange } = filtersProps
    console.log('pricesRange en ProductsLayout', pricesRange)


    const { selectedPricesRange, handlePrice, valuetext } = usePriceSlider(
        currentSelectedPricesRange ?
            [...currentSelectedPricesRange]
            :
            [...pricesRange]
    )

    console.log('selectedPricesRange en ProductsLayout', selectedPricesRange)





    return (
        <Container>
            <Box sx={{ mt: 5, flexGrow: 1, background: "green" }}>
                <Grid container spacing={2}>
                    <Grid item xs={6} sm={4} md={3} lg={3} >
                        <FiltersBar
                            filtersProps={filtersProps}
                            selectedPricesRange={selectedPricesRange}
                            handlePrice={handlePrice}
                            valuetext={valuetext}
                        />
                    </Grid>
                    <Grid item xs={6} sm={4} md={3} lg={9} >
                        <ProductsGrid
                            products={products}
                            selectedPricesRange={selectedPricesRange}
                        />
                    </Grid>

                </Grid>
            </Box>
        </Container>

    )
}
export default ProductsLayout

//   <Box sx={{ background: "red" }}>filtros</Box>