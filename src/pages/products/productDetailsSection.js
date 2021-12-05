import { Grid } from "@mui/material"
import { Box } from "@mui/system"
import { Container } from "@mui/material"
import ProductDetails from "../../components/modules/productDetails/ProductDetails"
import { Button } from "@mui/material"
import Image from "next/image"
import giga from '../../assets/images/giga.jpg'
import usePromise from "../../hooks/usePromise"
import React from "react"


const ProductDetailsSection = () => {
    //const { errorm, throwPromise, loading, data } = usePromise()


    return (
        //TODO: UNIFICA con admin.js
        <Container sx={{ mt: '2em' }}>
            <Box sx={{ flexGrow: 1, background: "green" }}>
                <Grid container spacing={12}>
                    <Grid item xs={6} sm={4} md={3} lg={6} >
                        <Box
                            sx={{
                                // pr: 15,
                                background: "blue",
                                display: 'flex',
                                justifyContent: 'center'
                            }}
                        >
                            <Image
                                src={giga}
                                alt="Imagen de producto"
                            />
                        </Box>
                    </Grid>
                    <Grid item xs={6} sm={4} md={3} lg={6} >

                        <ProductDetails></ProductDetails>
                    </Grid>

                </Grid>
            </Box>
        </Container>

    )
}

export default ProductDetailsSection
