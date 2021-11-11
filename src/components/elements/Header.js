import { AppBar } from "@mui/material"
import { Toolbar } from "@mui/material"
import IconCorpName from "./IconCorpName"
import { TextField } from "@mui/material"
import { Box, styled } from '@mui/system'
import Link from './Link'
import { InputAdornment } from "@mui/material"
import SearchIcon from '@mui/icons-material/Search';
import DropdownMenu from './DropdownMenu'

import { categs } from "../../items/headerItems"

//supertoken
import { Button } from "@mui/material"
import ThirdPartyEmailPassword from 'supertokens-auth-react/recipe/thirdpartyemailpassword'

async function logoutClicked() {
    await ThirdPartyEmailPassword.signOut()
    ThirdPartyEmailPassword.redirectToAuth()
}
const Header = ({ isLogged }) => {
    //const items = [COMPONENTES, PERIFÉRICOS, ORDENADORES, PORTÁTILES, TABLETS, MÓVILES]
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
                        <Link href="/newUser">
                            {isLogged ? 'Mi cuenta' : 'Iniciar sesion'}
                        </Link>
                    </Box>
                    <Box sx={{ color: "black" }}>
                        <Link href="/cart">Carrito</Link>
                    </Box>

                    <Button
                        onClick={logoutClicked}
                    >
                        Salir
                    </Button>
                </Toolbar>

                <Toolbar
                    sx={{
                        // bgcolor: 'corpGreen.main',
                        bgcolor: 'grey.300',
                        justifyContent: 'center',
                        color: "corpWhite.main",
                    }}
                >
                    {categs.map(categ =>
                        <Box key={categ.name} sx={{ p: 1, m: 1, color: "corpWhite.main", }}>
                            <DropdownMenu {...categ}></DropdownMenu>
                        </Box>
                    )}
                </Toolbar>
            </AppBar>


        </>
    )
}

export default Header

/**

     <Box sx={{ p: 1, m: 1, color: "corpWhite.main", }}>

                            <DropdownMenu
                                category={item}
                                href={headerItems[normalizeStr(item)].href}
                            ></DropdownMenu>
                        </Box>



 */