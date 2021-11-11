import { Grid } from "@mui/material"
import { Box } from "@mui/system"
import { Container } from "@mui/material"
import DetailsBlock from "../../components/modules/productDetails/DetailsBlock"
import { Button } from "@mui/material"


const details = () => {

    return (
        <Container>
            <Box sx={{ flexGrow: 1, background: "green" }}>
                <Grid container spacing={2}>
                    <Grid item xs={6} sm={4} md={3} lg={6} >
                        <Box
                            sx={{
                                background: "blue",
                                display: 'flex',
                                justifyContent: 'center'
                            }}
                        >
                            fotos
                            <Button>hola</Button>
                        </Box>
                    </Grid>
                    <Grid item xs={6} sm={4} md={3} lg={6} >
                        <Box
                            sx={{
                                background: "red",
                                display: 'flex',
                                justifyContent: 'center'
                            }}
                        >
                            detalles
                        </Box>

                        <DetailsBlock></DetailsBlock>
                    </Grid>

                </Grid>
            </Box>
        </Container>

    )
}

export default details