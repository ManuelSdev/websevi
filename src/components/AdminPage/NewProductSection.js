import usePromise from "../../hooks/usePromise";
import { createProduct, getPresignedS3POST, uploadImageS3 } from "../../lib/api/product";
import NewProductForm from "./NewProductForm"
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';
import ConfirmAndReturn from "../elements/ConfirmAndReturn";
import React from "react";
import Box from '@mui/system/Box';
import Typography from "@mui/material/Typography"
const NewProductSection = ({ props }) => {
    const { error, throwPromise, loading, data: confirmation, setData } = usePromise({})
    const [uploaded, setUploaded] = React.useState(false)
    //const { bucket, region } = props
    //console.log(region)
    const handleSubmit = async newProduct => {
        /*
                try {
                    await createProduct(newProduct)
                } catch (error) {
                    console.log('ERROR', error.message)
                    throw error
                }
        */
        console.log('NEW PROD', newProduct)
        await throwPromise(createProduct(newProduct));
        setUploaded(true)
        //history.push("/user");
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
                    <Stack mb={2} direction='row'>
                        <Typography variant='h5' sx={{ fontWeight: 'bold' }} >Crear producto</Typography>

                    </Stack>
                    <NewProductForm error={error?.data} onSubmit={handleSubmit}></NewProductForm>
                </Box>

    )
}

export default NewProductSection
