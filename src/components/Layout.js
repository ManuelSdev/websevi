import { ThemeProvider, createTheme } from "@mui/material/styles";
import { AppBar, Toolbar, Container, CssBaseline, Button, TextField } from '@mui/material'
import useMediaQuery from "@mui/material/useMediaQuery";
import theme from '../assets/theme'
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import { Box, styled } from '@mui/system'
import IconCorpName from './IconCorpName'
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';
import Link from '../components/Link'
import Lis from 'next/link'
import MuiLink from '@mui/material/Link';
import ButtonBase from '@mui/material/ButtonBase';




const Offset = styled('div')(({ theme }) => theme.mixins.toolbar);

const Layout = ({ children }) => {
    const matches = useMediaQuery("(min-width:600px)", { color: 'red', });
    return (

        <ThemeProvider theme={theme}>
            <CssBaseline />
            <AppBar position="fixed">
                <Toolbar
                    sx={{
                        bgcolor: 'corpBlack.main',
                        flexDirection: 'row-reverse',
                        height: "2em",
                        color: "corpWhite.main",
                        '@media (min-width: 600px)': {
                            minHeight: "1em"
                        }

                    }}
                >
                    <p>Lunes a jueves ........635 41 55 73 </p>
                </Toolbar>

                <Toolbar
                    sx={{
                        //borderRadius: "80px",

                        bgcolor: 'corpWhite.main',
                        justifyContent: 'space-between',
                        height: "5em",
                        //color: "corpBlack.main"
                    }}
                >
                    <IconCorpName viewBox="0 0 381.17 68.88"
                        sx={{ fill: "blue", height: "100%", fontSize: 250 }}
                    ></IconCorpName>

                    <TextField
                        sx={{ width: "50%" }}
                        id="standard-basic"
                        label="Buscar en el catálogo"
                        variant="standard"

                        InputProps={{
                            endAdornment:
                                <InputAdornment position="start">
                                    <SearchIcon></SearchIcon>
                                </InputAdornment>,
                        }}
                    />

                    <Box sx={{ color: "black" }}>
                        <Link href="/user/profile">Mi cuenta </Link>
                    </Box>
                    <Box sx={{ color: "black" }}>
                        <Link href="/user/profile">Carrito</Link>
                    </Box>
                </Toolbar>

                <Toolbar
                    sx={{
                        bgcolor: 'corpGreen.main',
                        justifyContent: 'center'
                    }}

                >
                    <Box sx={{ p: 1, m: 1, }}>
                        <Link href="/">INICIO</Link>
                    </Box>
                    <Box sx={{ p: 1, m: 1, }}>
                        <Link href="/store">TIENDA </Link>
                    </Box>
                    <Box sx={{ p: 1, m: 1, }}>
                        <Link href="/techServ">SERVICIO TÉCNICO </Link>
                    </Box>
                    <Box sx={{ p: 1, m: 1, }}>
                        <Link href="/solutions">SOLUCIONES INTEGRALES </Link>
                    </Box>
                    <Box sx={{ p: 1, m: 1, }}>
                        <Link href="/contact">CONTACTO </Link>
                    </Box>
                </Toolbar>
            </AppBar>
            <Toolbar />
            <Toolbar />
            <Toolbar />
            <Toolbar />
            <Container>


                {children}
                <footer className={styles.footer}>
                    <a
                        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Powered by{' '}
                        <span className={styles.logo}>
                            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
                        </span>
                    </a>
                </footer>
            </Container>


        </ThemeProvider >



    )
}

export default Layout