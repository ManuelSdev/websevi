
import ProductsGrid from "./ProductsGrid"
import FiltersBar from "../filtersSideBar/FiltersBar"

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

