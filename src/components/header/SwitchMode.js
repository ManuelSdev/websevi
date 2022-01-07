
import * as React from 'react';

import Switch from "@mui/material/Switch"
import Typography from "@mui/material/Typography"
import Stack from "@mui/material/Stack"
import { useAppContext } from '../context';
import Box from '@mui/system/Box';
import { useRouter } from 'next/router';

const SwitchMode = () => {
    const router = useRouter()
    const { setIsLogged, isLogged } = useAppContext()

    const [checked, setChecked] = React.useState(true);

    const handleChange = (event) => {
        router.push('/')
        setIsLogged({ ...isLogged, admin: event.target.checked });
    };

    return (


        <Stack direction="row" spacing={1} alignItems="center" sx={{ flexGrow: 1 }} >
            <Typography>Modo usuario</Typography>
            <Switch
                sx={{
                    '& .MuiSwitch-track ': {
                        bgcolor: 'white',

                    },
                }}
                checked={isLogged.admin}
                onChange={handleChange}
                inputProps={{ 'aria-label': 'controlled' }}

            />
            <Typography>Modo administrador</Typography>
        </Stack>


    )
}

export default SwitchMode