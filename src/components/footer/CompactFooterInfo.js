import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box } from '@mui/system';
import Link from '../elements/Link'
export default function ControlledAccordions() {
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (


        <div>

            <Accordion sx={{ bgcolor: 'corpGreen.main' }} expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon color={'corpWhite'} />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                    <Typography variant='h6' color='white' >Sobre nosotros</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Link href='/construccion'>
                        <Typography variant='body1' color='white'>Quiénes somos </Typography>
                        <Typography variant='body1' color='white'>Nuestra tienda </Typography>
                        <Typography variant='body1' color='white'>Términos y condiciones</Typography>
                    </Link>
                    <Link href='/legalInfo'>
                        <Typography variant='body1' color='white'>Política de privacidad</Typography>
                    </Link>
                </AccordionDetails>
            </Accordion>

            <Accordion sx={{ bgcolor: 'corpGreen.main' }} expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon color={'corpWhite'} />}
                    aria-controls="panel2bh-content"
                    id="panel2bh-header"
                >
                    <Typography variant='h6' color='white' >Atención al cliente</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Link href='/construccion'>
                        <Typography variant='body1' color='white'>Centro de soporte </Typography>
                        <Typography variant='body1' color='white'>Cómo comprar </Typography>
                        <Typography variant='body1' color='white'>Devoluciones</Typography>
                        <Typography variant='body1' color='white'>Garantía</Typography>
                    </Link>
                </AccordionDetails>
            </Accordion>

            <Accordion sx={{ bgcolor: 'corpGreen.main' }} expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon color={'corpWhite'} />}
                    aria-controls="panel3bh-content"
                    id="panel3bh-header"
                >
                    <Typography variant='h6' color='white' >Contacto</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Link href='/construccion'>
                        <Typography variant='body1' color='white'>Av. Tablantes 27. Espartinas, Sevilla </Typography>
                        <Typography variant='body1' color='white'>Teléfono: +34 635 415 573</Typography>
                    </Link>
                    <Link
                        href='#'
                        onClick={(e) => {
                            window.location = 'mailto:info@sevimatic_.com';
                            e.preventDefault();
                        }}
                    >
                        <Typography variant='body1' color='white'>info@sevimatic.com</Typography>
                    </Link>
                </AccordionDetails>
            </Accordion>

        </div>
    );
}
