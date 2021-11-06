import { ThemeProvider, createTheme } from "@mui/material/styles";
import { AppBar, Toolbar, Container, CssBaseline, Button, TextField, Paper, Grid } from '@mui/material'
import useMediaQuery from "@mui/material/useMediaQuery";
import theme from '../assets/theme'
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import { Box } from '@mui/system'
import IconCorpName from './IconCorpName'
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';
import Link from '../components/Link'
import Lis from 'next/link'
import MuiLink from '@mui/material/Link';
import ButtonBase from '@mui/material/ButtonBase';
import Header from "./Header";





const Layout = ({ children }) => {
    const matches = useMediaQuery("(min-width:600px)", { color: 'red', });
    return (

        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Header />

            <main>
                {children}

            </main>





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


        </ThemeProvider >



    )
}

export default Layout