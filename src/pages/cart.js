
import { Button, CardMedia, Container, Grid, Paper, Step, StepLabel, Stepper, Typography } from "@mui/material"
import { Box } from "@mui/system"
import DeleteIcon from '@mui/icons-material/HighlightOffOutlined';
import s from '@mui/icons-material/DeleteForeverOutlined';
import ss from '@mui/icons-material/CloseOutlined';


const steps = [
    'Select master blaster campaign settings',
    'Create an ad group',
    'Create an ad',
];
const cart = () => {

    return (
        <Container>
            <Box sx={{ width: '100%', background: "red" }}>
                <Stepper activeStep={1} alternativeLabel>
                    {steps.map((label) => (
                        <Step key={label}>
                            <StepLabel>{label}</StepLabel>
                        </Step>
                    ))}
                </Stepper>
            </Box>
            <Box sx={{ flexGrow: 1, background: "orange", marginTop: '30px' }}>

                <Grid container spacing={2}>
                    <Grid container item xs={12} sm={12} md={8} lg={8} >
                        <Grid container  >
                            <Grid item xs={12} sm={12} md={8} lg={6} >
                                Articulo
                            </Grid>
                            <Grid item xs={12} sm={12} md={8} lg={2} >
                                Precio
                            </Grid>
                            <Grid item xs={12} sm={12} md={8} lg={2} >
                                Unidades
                            </Grid>
                            <Grid item xs={12} sm={12} md={8} lg={2} >
                                Total
                            </Grid>
                        </Grid>

                        <Paper ax={{ display: "flex", flexDirection: 'row' }}>
                            <Grid container >
                                <Grid container spacing={2} item xs={12} sm={12} md={8} lg={6} >
                                    <Grid item xs={12} sm={12} md={8} lg={3} >
                                        <CardMedia
                                            component="img"
                                            image="https://livedemo00.template-help.com/opencart_58281/image/cache/catalog/products/product-22-800x800.png"
                                            alt="Paella dish"
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={8} lg={9} >
                                        Tarjeta gráfica
                                    </Grid>
                                </Grid>
                                <Grid item xs={12} sm={12} md={8} lg={2} >
                                    Precio
                                </Grid>
                                <Grid item xs={12} sm={12} md={8} lg={2} >
                                    Unidades
                                </Grid>
                                <Grid item xs={12} sm={12} md={8} lg={1.5} >
                                    Total
                                </Grid>
                                <Grid item xs={12} sm={12} md={8} lg={0.5} >
                                    <DeleteIcon sx={{ marginTop: '5px' }} ></DeleteIcon>
                                </Grid>
                            </Grid>

                        </Paper>
                    </Grid>
                    <Grid item sx={{ background: "grey" }} xs={12} sm={12} md={4} lg={4} >
                        <Paper>
                            <Typography>TOTAL</Typography>
                            <Button>CONTINUAR</Button>
                        </Paper>


                    </Grid>

                </Grid>
            </Box>
        </Container >
    )
}

export default cart