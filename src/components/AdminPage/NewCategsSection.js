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
    //const { bucket, region } = props
    //console.log(region)
    const handleSubmit = async newCategories => {
        /*
                try {
                    await createProduct(newProduct)
                } catch (error) {
                    console.log('ERROR', error.message)
                    throw error
                }
        */
        await throwPromise(createCategories(newCategories));
        //console.log('aveee', a)
        // console.log('aveee 222', confirmation)
        setUploaded(true)
        //history.push("/user");
    };
    //   console.log('confiii 1111', confirmation)
    const firstRenderForUploaded = React.useRef(true);
    /*
    React.useEffect(() => {
        if (firstRenderForUploaded.current) {
            firstRenderForUploaded.current = false;
            return;
        }
        setUploaded(true)
        console.log('condddddfffff', confirmation)
    }, [confirmation])
    */
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