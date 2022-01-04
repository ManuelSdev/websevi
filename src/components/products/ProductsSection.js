import Container from "@mui/material/Container"
import Grid from "@mui/material/Grid"
import Box from "@mui/system/Box"
import GridCard from "./GridCard"
import ProductsGrid from "./ProductsGrid"
import FiltersBar from "../filtersSideBar/FiltersBar"
import usePriceSlider from "../../hooks/usePriceSlider"
import { useRouter } from "next/router"
import SidebarLayout from "../layouts/SidebarLayout"

const ProductsSection = ({ products, filtersProps, selectedPricesRange, handlePrice, valuetext }) => {



    return (

        <SidebarLayout
            sidebar={
                <FiltersBar
                    filtersProps={filtersProps}
                    selectedPricesRange={selectedPricesRange}
                    handlePrice={handlePrice}
                    valuetext={valuetext}
                />
            }
            content={
                <ProductsGrid
                    products={products}
                    selectedPricesRange={selectedPricesRange}
                />
            }
        />


    )
}
export default ProductsSection

//   <Box sx={{ background: "red" }}>filtros</Box>
/*
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
*/