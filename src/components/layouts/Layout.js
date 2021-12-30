import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from '@mui/material/CssBaseline'
import useMediaQuery from "@mui/material/useMediaQuery";
import theme from '../../assets/theme'
import styles from '../../styles/Home.module.css'
import Image from 'next/image'

import Header from "../header/Header";
import Footer from "./Footer";




const Layout = ({ children, categories }) => {
    const matches = useMediaQuery("(min-width:600px)", { color: 'red', });

    //const { error, throwPromise, loading, data: categs } = usePromise({})

    //console.log('*****************', categs)
    return (

        <>
            <Header categories={categories} />

            <main>
                {children}

            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </>





    )
}

export default Layout

/**

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

 */