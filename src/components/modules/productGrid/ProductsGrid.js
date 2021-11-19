import { Grid } from "@mui/material"
import { Box } from "@mui/system"
import GridCard from './GridCard'

const ProductsGrid = () => {

    return (
        <Box sx={{ flexGrow: 1, background: "green" }}>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6} md={4} lg={4} >
                    <GridCard>xs=8</GridCard>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={4} >
                    <GridCard>xs=8</GridCard>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={4} >
                    <GridCard>xs=8</GridCard>
                </Grid>

            </Grid>
        </Box>
    )
}
export default ProductsGrid