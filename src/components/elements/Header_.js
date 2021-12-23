import IconButton from "@mui/material/IconButton"
import AppBar from "@mui/material/AppBar"

import Toolbar from '@mui/material/Toolbar';

import IconCorpName from "./IconCorpName"
import TextField from "@mui/material/TextField"
import Box from '@mui/system/Box'
import Link from './Link'
import InputAdornment from "@mui/material/InputAdornment"
import SearchIcon from '@mui/icons-material/Search';
import DropdownMenu from './DropdownMenu'
import { getCategories } from "../../lib/api/category"

import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
import AccountCircle from '@mui/icons-material/AccountCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
//import { categs } from "../../items/headerItems"

//supertoken
import { Button } from "@mui/material"
import ThirdPartyEmailPassword from 'supertokens-auth-react/recipe/thirdpartyemailpassword'
import React from "react"
import usePromise from "../../hooks/usePromise"
import CategoriesButton from "../header/CategoriesButton"


async function logoutClicked() {
    await ThirdPartyEmailPassword.signOut()
    ThirdPartyEmailPassword.redirectToAuth()
}

const Header = ({ isLogged }) => {

    const { error, throwPromise, loading, data: categs } = usePromise([])
    // const [categs, setCategs] = React.useState([]);

    React.useEffect(async () => {
        const a = await throwPromise(getCategories(''));
        //const a = await getCategories()
        //await setCategs(a)
    }, [])
    //const items = [COMPONENTES, PERIFÉRICOS, ORDENADORES, PORTÁTILES, TABLETS, MÓVILES]
    //  console.log('estado login', isLogged)
    return (
        <>
            <AppBar position="sticky" >

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
                            {isLogged.state ?
                                isLogged.admin ?
                                    'Dashboard'
                                    :
                                    'Mi cuenta'
                                :
                                'Iniciar sesion'}
                        </Link>
                    </Box>
                    <Box sx={{ color: "black" }}>
                        <Link href="/admin">
                            Admin
                        </Link>
                    </Box>
                    <Box sx={{ color: "black" }}>
                        <Link href="/carrito">Carrito</Link>
                    </Box>

                    <Button
                        onClick={logoutClicked}
                    >
                        Salir
                    </Button>
                </Toolbar>

                <Toolbar>
                    <CategoriesButton />

                    <IconButton
                        size="large"
                        edge="end"
                        aria-label="account of current user"
                        // aria-controls={menuId}
                        aria-haspopup="true"
                        // onClick={handleProfileMenuOpen}
                        color="inherit"
                    >
                        <AccountCircle fontSize="large" />
                    </IconButton>
                    <IconButton
                        size="large"
                        edge="end"
                        aria-label="account of current user"
                        // aria-controls={menuId}
                        aria-haspopup="true"
                        // onClick={handleProfileMenuOpen}
                        color="inherit"
                    >
                        <ShoppingCartIcon fontSize="large" />
                    </IconButton>
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