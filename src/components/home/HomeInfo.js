import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import { Divider, Stack } from '@mui/material';

import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

export default function HomeInfo() {

    const theme = useTheme()
    const sm750Up = useMediaQuery(theme.breakpoints.up('sm750'));

    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    const icons = [LocalShippingIcon, ThumbUpAltIcon, SupportAgentIcon]
    const titles = [
        'Envío en 24/48 horas',
        'Garantía de satisfacción',
        'Soporte técnico',
    ]
    const descriptions = [
        'Compra ahora y recibe tu pedido en un plazo máximo de 2 días laborables',
        'Dispones de 30 días para realizar una devolución si no quedas satisfecho y de 2 años de garantía en todos nuestros productos',
        'Ponemos a tu disposición el mejor servicio técnico para resolver todas tus dudas',
    ]

    return (


        sm750Up ?
            <Grid mt={5} mb={5} textAlign='center' container spacing={2}>
                {icons.map((Icon, index) => {
                    return (
                        <Grid key={index} item xs={4} sm={4} md={4} lg={4} >
                            <Box pr={5} pl={5}
                            >
                                <Icon color='primary' sx={{ fontSize: '60px' }} />
                                <Typography mb={1} sx={{ fontWeight: 'bold' }} variant='h5' color='primary' >{titles[index]}</Typography>
                                <Typography variant='body1' color='primary'>{descriptions[index]}</Typography>
                            </Box>
                        </Grid>
                    )
                })
                }
            </Grid>
            :
            <Box mt={3} mb={3} >
                {
                    icons.map((Icon, index) => {
                        return (
                            <Accordion key={index} expanded={expanded === `panel${index}`} onChange={handleChange(`panel${index}`)}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls={`panel${index}bh-content`}
                                    id={`panel${index}bh-header`}
                                    sx={{
                                        display: 'flex',
                                        '& .MuiAccordionSummary-content': { alignItems: 'center' }
                                    }}
                                >
                                    <Icon color='primary' sx={{ fontSize: '60px', width: '30%', flexShrink: 0 }} />
                                    <Typography sx={{ fontWeight: 'bold' }} variant='h6' color='primary' >{titles[index]}</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>{descriptions[index]} </Typography>
                                </AccordionDetails>
                            </Accordion>
                        )
                    })
                }

            </Box>

    )
}