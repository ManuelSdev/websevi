import AppBar from "@mui/material/AppBar"
import Badge from "@mui/material/Badge"
import InputAdornment from "@mui/material/InputAdornment"
import TextField from "@mui/material/TextField"
import Toolbar from "@mui/material/Toolbar"

import IconCorpName from "./IconCorpName"
import Box from '@mui/system/Box'
import Link from './Link'

import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import DropdownMenu from './DropdownMenu'
import { getCategs } from "../../lib/api/categorie"

//import { categs } from "../../items/headerItems"

//supertoken
import Button from "@mui/material/Button"
import ThirdPartyEmailPassword from 'supertokens-auth-react/recipe/thirdpartyemailpassword'
import React from "react"
import AccountCircle from "@mui/icons-material/AccountCircle"



async function logoutClicked() {
    await ThirdPartyEmailPassword.signOut()
    ThirdPartyEmailPassword.redirectToAuth()
}

const Header = ({ isLogged, categs }) => {

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
                    <Button
                        onClick={logoutClicked}
                    >
                        Salir
                    </Button>
                    <Link href="/admin">
                        Admin
                    </Link>
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
                    <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
                        <TextField
                            sx={{ width: "75%" }}
                            id="standard-basic"
                            label="Buscar en el catálogo"
                            variant="standard"
                            color="corpGreen"
                            InputProps={{
                                endAdornment:
                                    <InputAdornment position="start">
                                        <SearchIcon></SearchIcon>
                                    </InputAdornment>,
                            }}
                        />
                    </Box>

                    <Box
                        sx={{
                            mr: 2,
                            height: '75%',
                            border: 1,
                            '&:hover': {
                                borderColor: 'corpGreen.main',
                                borderRadius: 1,
                            }
                        }}
                    >
                        <Button
                            href="/cart"
                            textTransform="none" size="large" variant="text"
                            sx={{ fontSize: '1.1rem', fontWeight: 'bold', height: '100%', color: "black", textTransform: "none" }}
                            startIcon={<AccountCircle sx={{ mr: -0.5, width: 30, height: 30 }} />}
                        >
                            {isLogged.state ?
                                isLogged.admin ?
                                    'Dashboard'
                                    :
                                    'Mi cuenta'
                                :
                                'Iniciar sesión'}
                        </Button>
                    </Box>

                    <Box
                        sx={{
                            height: '75%',
                            border: 1,
                            '&:hover': {
                                borderColor: 'corpGreen.main',
                                borderRadius: 1,
                            }
                        }}
                    >
                        <Button
                            href="/cart"
                            textTransform="none" size="large" variant="text"
                            sx={{ fontSize: '1.1rem', fontWeight: 'bold', height: '100%', width: '100%', color: "black", textTransform: "none" }}
                            startIcon={
                                <Badge
                                    sx={{
                                        '& .MuiBadge-badge': {
                                            right: -5,
                                            top: -1,
                                            padding: '0 4px',
                                        },
                                    }}
                                    badgeContent={4} color="corpGreen">
                                    <ShoppingCartIcon sx={{ mr: -0.5, width: 30, height: 30 }} />
                                </Badge>}
                        >
                            Carrito
                        </Button>
                    </Box>

                </Toolbar>

                <Toolbar
                    sx={{
                        // bgcolor: 'corpGreen.main',
                        bgcolor: 'corpGreen.main',
                        justifyContent: 'center',
                        color: "corpWhite.main",
                    }}
                >


                    {categs.length > 0 && categs.map(categ =>
                        categ.level === 1 &&
                        <Box key={categ._id}
                            sx={{
                                p: 1, m: 1,
                                /*
                                '& :hover': {
                                    backgroundColor: "blue",
                                },
                                */
                            }}>

                            <DropdownMenu categ_1={categ} categs={categs}></DropdownMenu>
                        </Box>
                    )}

                    <Box sx={{ color: "black" }}>
                        <Link href="/privado">
                            privado
                        </Link>
                    </Box>
                    <Box sx={{ color: "black" }}>
                        <Link href="/checkSession">
                            checkSesion
                        </Link>
                    </Box>
                </Toolbar>
            </AppBar >


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

/*
<Box
                        href="/cart"
                        display='flex'
                        direction="row"

                        sx={{
                            height: '75%',
                            alignItems: 'center',
                            border: 2,
                            borderColor: 'white',
                            fontWeight: 'bold',
                            '&:hover': {

                                borderColor: 'corpGreen.main',
                            },

                        }}
                    >
                        <ButtonBase
                            sx={{ padding: 2, height: '100%' }}
                        >
                            <ShoppingCartIcon sx={{ color: "black" }} fontSize="medium" />

                            <Typography sx={{ fontWeight: 'bold', color: "black" }}>Carrito</Typography>
                        </ButtonBase>
                    </Box >
                    */