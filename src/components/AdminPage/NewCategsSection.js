import usePromise from "../../hooks/usePromise";
import { createCategories } from "../../lib/api/category";
import CircularProgress from '@mui/material/CircularProgress';
import ConfirmAndReturn from "../elements/ConfirmAndReturn";
import React from "react";
import NewCategsForm from './NewCategsForm'
import Box from '@mui/system/Box';
import Stack from '@mui/material/Stack';
import Typography from "@mui/material/Typography"

const NewCategsSection = ({ props }) => {
    const { error, throwPromise, loading, data: confirmation } = usePromise({})
    const [uploaded, setUploaded] = React.useState(false)

    const handleSubmit = async newCategories => {

        await throwPromise(createCategories(newCategories));
        setUploaded(true)
    };

    return (
        loading ?
            <Stack sx={{ color: 'grey.500', justifyContent: 'center' }} spacing={2} direction="row">
                <CircularProgress color="primary" />
            </Stack>
            :
            uploaded ?
                <ConfirmAndReturn
                    message={confirmation.message}
                    action={() => setUploaded(false)}
                ></ConfirmAndReturn>
                :
                <Box>
                    <Stack direction='row'>
                        <Typography variant='h5' sx={{ fontWeight: 'bold' }} >Crear categorías</Typography>

                    </Stack>
                    <NewCategsForm error={error?.data} onSubmit={handleSubmit}></NewCategsForm>
                </Box>
    )
}

export default NewCategsSection