import * as React from 'react';
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { useRouter } from 'next/router'

export default function ConfirmAndReturn({ action, message }) {

    const router = useRouter()

    return (
        <Stack sx={{ width: '100%' }} spacing={2}>
            <Alert
                action={
                    <Button
                        color="inherit"
                        size="small"
                        //onClick={() => router.push({ returnPath })}
                        onClick={action}
                    >
                        VOLVER
                    </Button>
                }
            >
                {message}
            </Alert>
        </Stack>
    );
}