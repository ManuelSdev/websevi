import { Container, Grid } from "@mui/material"
import Box from "@mui/system/Box"
import IconCorpNameSecondary from "../elements/IconCorpNameSecondary"

const Footer = () => {


    return (
        <Box

            sx={{
                bgcolor: 'corpGreen.main'
            }}
        >

            <Container

            >
                <Grid container rowSpacing={0}>
                    <Grid item sx={{ mt: 8 }} xs={6} sm={4} md={3} lg={3}>
                        <IconCorpNameSecondary viewBox="0 0 381.17 68.88"

                            sx={{ fill: "blue", height: "100%", fontSize: 250 }}
                        ></IconCorpNameSecondary>

                    </Grid>
                    <Grid item sx={{ mt: 8 }} xs={6} sm={4} md={3} lg={3}>
                        S
                    </Grid>
                    <Grid item sx={{ mt: 8 }} xs={6} sm={4} md={3} lg={3}>
                        S
                    </Grid>
                    <Grid item sx={{ mt: 8 }} xs={6} sm={4} md={3} lg={3}>
                        S
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}

export default Footer