
import ProductsGrid from "./ProductsGrid"
import FiltersBar from "../filtersSideBar/FiltersBar"
import SidebarLayout from "../layouts/SidebarLayout"
import ProductsTopBar from "./ProductsTopBar"
import Paper from '@mui/material/Paper';

const ProductsSection = ({ ...props }) => {

    return (
        <SidebarLayout elevationPaper={0}
            sidebar={
                <Paper
                    sx={{ mb: 15 }}
                >
                    <FiltersBar
                        {...props}
                    />
                </Paper>

            }



            content={
                <>
                    <ProductsTopBar
                        {...props}
                    />
                    <ProductsGrid
                        {...props}
                    />
                </>

            }
        />


    )
}
export default ProductsSection

