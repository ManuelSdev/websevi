
import ProductsGrid from "./ProductsGrid"
import FiltersBar from "../filtersSideBar/FiltersBar"

import SidebarLayout from "../layouts/SidebarLayout"

const ProductsSection = ({ products, searchKeys, filtersProps, selectedPricesRange, handlePrice, valuetext }) => {



    return (

        <SidebarLayout elevationPaper={0}
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
                    searchKeys={searchKeys}
                    selectedPricesRange={selectedPricesRange}
                />
            }
        />


    )
}
export default ProductsSection

