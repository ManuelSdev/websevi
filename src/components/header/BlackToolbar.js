import Toolbar from "@mui/material/Toolbar"
import Box from '@mui/system/Box'
import React from "react"
import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import SwitchMode from "./SwitchMode"
import useBreakpoints from "../../hooks/useBreakpoints"
import { useSelector } from "react-redux"
import { getAuth } from "../../app/store/selectors"

const BlackToolbar = () => {

    const { isLogged } = useSelector(getAuth)
    const { sm750Up } = useBreakpoints()
    return (
        sm750Up ?
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
                        variant="subtitle1"
                    >
                        Lunes a jueves 10-19h. Viernes 10-15h
                    </Typography>

                    <LocalPhoneIcon
                    />
                    <Typography ml={0.5} variant="subtitle1">635 415 573</Typography>
                </Stack>
                {isLogged && sm750Up && <SwitchMode />}
            </Toolbar>
            :
            <Toolbar
                sx={{
                    bgcolor: 'corpBlack.main',
                    //justifyContent: 'space-between',
                    flexDirection: 'row-reverse',
                    height: "2em",
                    color: "corpWhite.main",
                    '@media (min-width: 600px)': {
                        minHeight: "1em"
                    }
                }}
            >
                <Stack
                    //   justifyContent='flex-start'
                    alignItems='center'
                    direction='row'
                >
                    <LocalPhoneIcon />
                    <Typography ml={0.5} variant="subtitle1">635 415 573</Typography>
                </Stack>
                <Box sx={{ flexGrow: 1 }}>
                    <Typography
                        //    mr={3}
                        variant="subtitle1"
                    >
                        Lunes a jueves 10-19h
                    </Typography>
                    <Typography
                        //  mr={3}
                        variant="subtitle1"
                    >
                        Viernes 10-15h
                    </Typography>
                </Box>
            </Toolbar>
    )
}

export default BlackToolbar

