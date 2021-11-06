import { AppBar } from "@mui/material"
import { Toolbar } from "@mui/material"
import IconCorpName from "./IconCorpName"
import { TextField } from "@mui/material"
import { Box, styled } from '@mui/system'
import Link from '../components/Link'
import { InputAdornment } from "@mui/material"
import SearchIcon from '@mui/icons-material/Search';



const Header = () => {

    return (
        <>
            <AppBar position="sticky">
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
                        <Link href="/cart">Carrito</Link>
                    </Box>
                </Toolbar>

                <Toolbar
                    sx={{
                        // bgcolor: 'corpGreen.main',
                        bgcolor: 'grey.300',
                        justifyContent: 'center',
                        color: "corpWhite.main",
                    }}

                >
                    <Box sx={{ p: 1, m: 1, color: "corpWhite.main", }}>
                        <Link href="/">INICIO</Link>
                    </Box>
                    <Box sx={{ p: 1, m: 1, }}>
                        <Link href="/store">TIENDA </Link>
                    </Box>
                    <Box sx={{ p: 1, m: 1, }}>
                        <Link href="/techServ">OCASIÓN </Link>
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


        </>
    )
}

export default Header