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

        <SidebarLayout elevationPaper={0}
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
