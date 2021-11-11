import { Grid, Paper, Typography } from "@mui/material"
import { Box } from "@mui/system"




const MainMosaic = () => {

    return (
        <Box sx={{ flexGrow: 1, background: "green" }}>
            <Grid container rowSpacing={0}>
                <Grid item xs={12}  >
                    <Paper square
                        sx={{ color: "white", backgroundColor: 'grey.800', height: '700px' }}
                    >
                        <div>HOla</div>
                        <Box> Hola</Box>
                        <Box> Hola</Box>

                        <p style={{ marginBlockStart: '0px' }} >HOLAA</p>
                        <p >HOLAA</p>
                        <p>HOLAA</p>
                        <Typography variant='h1'>Adios</Typography>
                    </Paper>
                </Grid>
                <Grid item xs={6} >
                    <Paper square
                        sx={{ backgroundColor: 'grey.600', height: '350px' }}
                    >
                    </Paper>
                </Grid>
                <Grid item xs={6}  >
                    <Paper square
                        sx={{ backgroundColor: 'grey.400', height: '350px' }}
                    >
                    </Paper>
                </Grid>

            </Grid>
        </Box>
    )
}

export default MainMosaic