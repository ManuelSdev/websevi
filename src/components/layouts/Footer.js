import { Container, Grid, Typography } from "@mui/material"
import Box from "@mui/system/Box"
import IconCorpNameSecondary from "../elements/IconCorpNameSecondary"
import Link from '../elements/Link'

const Footer = () => {


    return (
        <Box
            pb={10}
            sx={{
                // minWidth: 400,
                bgcolor: 'corpGreen.main',
                //zIndex: 'snackbar',
                //  position: 'relative'
            }}
        >
            <Container
            >
                <Grid container spacing={0} rowSpacing={0}>
                    <Grid item sx={{ mt: 8 }} xs={6} sm={4} md={3} lg={3}>

                        <IconCorpNameSecondary viewBox="0 65 381.17 68.88"

                            sx={{ fill: "blue", height: "100%", fontSize: 250 }}
                        ></IconCorpNameSecondary>

                    </Grid>
                    <Grid item sx={{ mt: 8 }} xs={6} sm={4} md={3} lg={3}>
                        <Box pl={5} pr={5}>
                            <Link href='/construccion'>
                                <Typography mb={2} sx={{ fontWeight: 'bold' }} variant='h5' color='white' >Sobre nosotros</Typography>
                                <Typography variant='body1' color='white'>Quiénes somos </Typography>
                                <Typography variant='body1' color='white'>Nuestra tienda </Typography>
                                <Typography variant='body1' color='white'>Términos y condiciones</Typography>
                            </Link>
                            <Link href='/legalInfo'>
                                <Typography variant='body1' color='white'>Política de privacidad</Typography>
                            </Link>
                        </Box>
                    </Grid>
                    <Grid item sx={{ mt: 8 }} xs={6} sm={4} md={3} lg={3}>
                        <Box pr={5}>
                            <Typography mb={2} sx={{ fontWeight: 'bold' }} variant='h5' color='white' >Atención al cliente</Typography>
                            <Link href='/construccion'>
                                <Typography variant='body1' color='white'>Centro de soporte </Typography>
                                <Typography variant='body1' color='white'>Cómo comprar </Typography>
                                <Typography variant='body1' color='white'>Devoluciones</Typography>
                                <Typography variant='body1' color='white'>Garantía</Typography>
                            </Link>

                        </Box>
                    </Grid>
                    <Grid item sx={{ mt: 8 }} xs={6} sm={4} md={3} lg={3}>
                        <Box>
                            <Link href='/construccion'>
                                <Typography mb={2} sx={{ fontWeight: 'bold' }} variant='h5' color='white' >Contacto</Typography>
                                <Typography variant='body1' color='white'>Av. Tablantes 27. Espartinas, Sevilla </Typography>
                                <Typography variant='body1' color='white'>Teléfono: +34 635 415 573</Typography>
                            </Link>
                            <Link
                                href='#'
                                onClick={(e) => {
                                    window.location = 'mailto:info@sevimatic.com';
                                    e.preventDefault();
                                }}
                            >
                                <Typography variant='body1' color='white'>info@sevimatic.com</Typography>
                            </Link>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}

export default Footer