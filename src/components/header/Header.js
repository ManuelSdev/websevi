import AppBar from "@mui/material/AppBar"
import Toolbar from "@mui/material/Toolbar"
import Box from '@mui/system/Box'
import Link from '../elements/Link'
import DropdownMenu from '../elements/DropdownMenu'


import React from "react"
import SearchToolBar from './SearchToolBar'
import { useAppContext } from "../context"

import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

import SwitchMode from "./SwitchMode"


const Header = ({ categories }) => {
    //console.log('@@@@@@@@@@@@@@@@@@@@', cart)

    const { setIsLogged, isLogged } = useAppContext()

    return (

        <AppBar position="sticky" sx={{ minWidth: 600, background: "red" }} >

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

                <Stack
                    alignItems='center'
                    direction='row'>
                    <Typography
                        mr={3}
                        variant="subtitle1">Lunes a jueves 10-19h. Viernes 10-15h </Typography>
                    <LocalPhoneIcon
                    />
                    <Typography ml={0.5} variant="subtitle1">635 415 573</Typography>
                </Stack>

                {isLogged.state && <SwitchMode />}

            </Toolbar>

            <SearchToolBar />

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


            </Toolbar>
        </AppBar >



    )
}

export default Header
