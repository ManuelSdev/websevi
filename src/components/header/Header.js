import AppBar from "@mui/material/AppBar"
import Toolbar from "@mui/material/Toolbar"
import Box from '@mui/system/Box'
import Link from '../elements/Link'
import DropdownMenu from '../elements/DropdownMenu'

import Button from "@mui/material/Button"
import ThirdPartyEmailPassword from 'supertokens-auth-react/recipe/thirdpartyemailpassword'
import React from "react"
import FirstToolBar from './FirstToolBar'
import { useAppContext } from "../context"

const Header = ({ categories }) => {
    //console.log('@@@@@@@@@@@@@@@@@@@@', cart)
    const { setIsLogged } = useAppContext()
    async function logoutClicked() {
        await ThirdPartyEmailPassword.signOut()
        setIsLogged({ state: false, admin: false, authId: '' })
        // ThirdPartyEmailPassword.redirectToAuth()
    }
    return (

        <AppBar position="sticky" sx={{ mb: '2em', background: "red" }} >

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
                <Link href="/admin/pedidos">
                    Admin
                </Link>
                <Link href="/user/test">
                    Profile
                </Link>
                <p>Lunes a jueves ........635 41 55 73 </p>
            </Toolbar>

            <FirstToolBar />

            <Toolbar
                sx={{
                    // bgcolor: 'corpGreen.main',
                    bgcolor: 'corpGreen.main',
                    justifyContent: 'center',
                    color: "corpWhite.main",
                }}
            >


                {categories.length > 0 && categories.map(category =>
                    category.level === 1 &&
                    <Box key={category._id}
                        sx={{
                            p: 1, m: 1,
                            /*
                            '& :hover': {
                                backgroundColor: "blue",
                            },
                            */
                        }}>

                        <DropdownMenu categ_1={category} categories={categories}></DropdownMenu>
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