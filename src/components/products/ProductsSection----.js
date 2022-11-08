import ProductsGrid from "./ProductsGrid";
import FiltersBar from "../filtersSideBar/FiltersBar";
import ProductsTopBar from "./ProductsTopBar";
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/system/Box";

import useBreakpoints from "../../hooks/useBreakpoints";

const ProductsSection = ({
  products,
  searchKeys,
  filtersProps,
  selectedPricesRange,
  handlePrice,
  valuetext,
}) => {
  const { md950Up, sm750Down } = useBreakpoints();

  return (
    <Container sx={{ minHeight: "calc(100vh - 488.02px)" }}>
      <Box sx={{ mt: 5, mb: 10, flexGrow: 1 }}>
        <Grid container spacing={2}>
          {md950Up && (
            <Grid item md={3} lg={3}>
              <Paper sx={{ mb: 15 }}>
                <FiltersBar
                  filtersProps={filtersProps}
                  selectedPricesRange={selectedPricesRange}
                  handlePrice={handlePrice}
                  valuetext={valuetext}
                />
              </Paper>
            </Grid>
          )}

          <Grid item xs={12} sm={12} md={9} lg={9}>
            {content.props.orders ? (
              <>
                <ProductsTopBar />
                <ProductsGrid
                  products={products}
                  searchKeys={searchKeys}
                  selectedPricesRange={selectedPricesRange}
                />
              </>
            ) : (
              <Paper elevation={0} sx={{ p: 2, pt: 0 }}>
                <ProductsTopBar />
                <ProductsGrid
                  products={products}
                  searchKeys={searchKeys}
                  selectedPricesRange={selectedPricesRange}
                />
              </Paper>
            )}
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};
export default ProductsSection;
