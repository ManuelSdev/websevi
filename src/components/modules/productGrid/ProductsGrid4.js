import { Grid } from "@mui/material"
import { Box } from "@mui/system"
import GridCard from './GridCard'

const ProductsGrid = () => {

    return (
        <Box sx={{ flexGrow: 1, background: "green" }}>
            <Grid container spacing={2}>
                <Grid item xs={6} sm={4} md={3} lg={3} >
                    <GridCard>xs=8</GridCard>
                </Grid>
                <Grid item xs={6} sm={4} md={3} lg={3} >
                    <GridCard>xs=8</GridCard>
                </Grid>
                <Grid item xs={6} sm={4} md={3} lg={3} >
                    <GridCard>xs=8</GridCard>
                </Grid>
                <Grid item xs={6} sm={4} md={3} lg={3} >
                    <GridCard>xs=8</GridCard>
                </Grid>
            </Grid>
        </Box>
    )
}
export default ProductsGrid