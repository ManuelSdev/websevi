import Grid from "@mui/material/Grid"
import Box from "@mui/system/Box"
import GridCard from './GridCard'
import React from "react";

const FeaturedGrid = ({ products }) => {

    return (
        <Box sx={{
            mb: 3, flexGrow: 1,
            //background: "green"
        }}>
            <Grid container spacing={2}>
                {products && products.map(product =>
                    <Grid key={product._id} item xs={6} sm={4} md={3} lg={3} >
                        <GridCard product={product}>xs=8</GridCard>
                    </Grid>
                )}
            </Grid>
        </Box>
    )
}
export default FeaturedGrid


