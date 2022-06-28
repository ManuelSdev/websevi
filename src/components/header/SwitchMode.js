
import * as React from 'react';

import Switch from "@mui/material/Switch"
import Typography from "@mui/material/Typography"
import Stack from "@mui/material/Stack"
import { useAppContext } from '../context';
import Box from '@mui/system/Box';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { getAuth } from '../../app/store/selectors';
import { authLoginAdmin, authLoginUser } from '../../app/store/authSlice';

const SwitchMode = () => {
    const router = useRouter()
    const { isLogged, isAdmin } = useSelector(getAuth)
    const dispatch = useDispatch()

    const handleChange = (event) => {
        router.push('/')
        //setIsLogged({ ...isLogged, admin: event.target.checked });
        //check en true > loga como admin
        event.target.checked ? dispatch(authLoginAdmin()) : dispatch(authLoginUser())
    };

    return (
        <Stack direction="row" spacing={1} alignItems="center" sx={{ flexGrow: 1 }} >
            <Typography>Modo administrador</Typography>
            <Switch
                sx={{
                    '& .MuiSwitch-track ': {
                        bgcolor: 'white',
                    },
                }}
                checked={isAdmin}
                onChange={handleChange}
                inputProps={{ 'aria-label': 'controlled' }}
            />
        </Stack>
    )
}

export default SwitchMode