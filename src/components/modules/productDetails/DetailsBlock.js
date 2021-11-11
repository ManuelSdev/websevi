import { Button, ButtonGroup, Rating, Stack, SvgIcon, Typography } from "@mui/material"
import TextField from '@mui/material/TextField';
import Icon from '@mui/material/Icon';

import { Box } from "@mui/system";


const DetailsBlock = () => {

    return (
        <Box sx={{ flexGrow: 1, background: "green" }}>
            <Button>h</Button>
            <Typography>Tarjeta gráfica</Typography>
            <Typography>700€ </Typography>
            <Rating defaultValue={2.5} precision={0.5}></Rating>
            <Box sx={{
                display: 'flex',
                flexDirection: 'row',
            }}>
                <Typography sx={{ mr: 5 }}>Marca </Typography>
                <Typography>EVGA </Typography>
            </Box>
            <Box sx={{
                display: 'flex',
                flexDirection: 'row',
            }}>
                <Typography sx={{ mr: 5 }}>Marca </Typography>
                <Typography>EVGA </Typography>
            </Box>
            <Box sx={{
                display: 'flex',
                flexDirection: 'row',
            }}>
                <Typography sx={{ mr: 5 }}>Marca </Typography>
                <Typography>EVGA </Typography>
            </Box>


            <ButtonGroup variant="contained">
                <Button sx={{ borderRadius: 8 }}>

                    <SvgIcon>
                        <svg ><path d="M19 13H5v-2h14v2z"></path></svg>

                    </SvgIcon>
                </Button>

                <TextField
                    sx={{
                        width: "2ch"
                    }}
                    defaultValue="a" id="outlined-basic" variant="outlined" />
                <Button sx={{ borderRadius: 8 }}>
                    <SvgIcon>
                        <svg  ><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path></svg>

                    </SvgIcon>
                </Button>
            </ButtonGroup>


            <Box>
                <Button sx={{ borderRadius: 8 }}>Añadir al carrito</Button>
            </Box>
            <Box>
                <Button sx={{ borderRadius: 8 }}>One</Button>
            </Box>
            <Box>
                <Button sx={{ borderRadius: 8 }}>Añadir a lista de deseos</Button>
            </Box>


        </Box>

    )
}

export default DetailsBlock