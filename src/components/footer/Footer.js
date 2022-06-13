import { Container, Grid, Typography } from "@mui/material"
import Box from "@mui/system/Box"
import useBreakpoints from "../../hooks/useBreakpoints"
import IconCorpNameSecondary from "../elements/IconCorpNameSecondary"
import Link from '../elements/Link'
import FooterInfo from './FooterInfo'
import CompactFooterInfo from './CompactFooterInfo'
import useMediaQuery from '@mui/material/useMediaQuery';

const Footer = () => {
    const { md950Up } = useBreakpoints()
    const up1100 = useMediaQuery('(min-width:1100px)');
    //TODO: refactorizar los hijos con map
    /*
        const titleTypography = title => <Typography mb={2} sx={{ fontWeight: 'bold' }} variant='h5' color='white' >{title}</Typography>
        const infoBlocks = [
            []
        ]
        */
    return (
        up1100 ?
            <FooterInfo />
            :
            <CompactFooterInfo />
    )
}

export default Footer