import Container from "@mui/material/Container"
import Grid from "@mui/material/Grid"
import Box from "@mui/system/Box"
import GridCard from "./GridCard"
import ProductsGrid from "./ProductsGrid"
import SearchFiltersBar from "../filtersSideBar/SearchFiltersBar"
import usePriceSlider from "../../hooks/usePriceSlider"
import { useRouter } from "next/router"
import SidebarLayout from "../layouts/SidebarLayout"

const FindedProductsSection = ({ products, filtersProps, selectedPricesRange, handlePrice, valuetext, ...props }) => {




    return (

        <SidebarLayout
            sidebar={
                <SearchFiltersBar
                    filtersProps={filtersProps}
                    selectedPricesRange={selectedPricesRange}
                    handlePrice={handlePrice}
                    valuetext={valuetext}
                    {...props}
                />
            }
            content={
                <ProductsGrid
                    products={products}
                    selectedPricesRange={selectedPricesRange}
                    {...props}
                />
            }
        />


    )
}
export default FindedProductsSection

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