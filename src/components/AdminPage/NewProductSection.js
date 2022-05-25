import usePromise from "../../hooks/usePromise";
import { createProduct, getPresignedS3POST, uploadImageS3 } from "../../lib/api/product";
import NewProductForm from "./NewProductForm"
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';
import ConfirmAndReturn from "../elements/ConfirmAndReturn";
import React from "react";
import Box from '@mui/system/Box';
import Typography from "@mui/material/Typography"
import { useAddProductMutation } from "../../app/store/services/productApi";

const NewProductSection = () => {

    const [
        addProduct,
        { status, isUninitialized, isLoading, isSuccess, data, isError, reset }
    ] = useAddProductMutation()

    const handleSubmit = async newProduct => {
        await addProduct(newProduct)
    };

    return (
        isLoading ?
            <Stack sx={{ color: 'grey.500', justifyContent: 'center' }} spacing={2} direction="row">
                <CircularProgress color="primary" />
            </Stack>
            :
            isSuccess ?
                <ConfirmAndReturn
                    message={data.message}
                    action={() => reset()}
                ></ConfirmAndReturn>
                :
                <Box>
                    <Stack mb={2} direction='row'>
                        <Typography variant='h5' sx={{ fontWeight: 'bold' }} >Crear producto</Typography>
                    </Stack>
                    <NewProductForm error={isError && isError.data} onSubmit={handleSubmit}></NewProductForm>
                </Box>
    )
}

export default NewProductSection



/*
const { error, throwPromise, loading, data: confirmation, setData } = usePromise({})
const [uploaded, setUploaded] = React.useState(false)
const handleSubmit = async newProduct => {
await throwPromise(createProduct(newProduct));
    setUploaded(true)
    //history.push("/user");
};

   return (
        isLoading ?
            <Stack sx={{ color: 'grey.500', justifyContent: 'center' }} spacing={2} direction="row">
                <CircularProgress color="primary" />
            </Stack>
            :
            isSuccess ?
                <ConfirmAndReturn
                    message={confirmation.message}
                    action={() => setUploaded(false)}
                ></ConfirmAndReturn>
                :
                <Box>
                    <Stack mb={2} direction='row'>
                        <Typography variant='h5' sx={{ fontWeight: 'bold' }} >Crear producto</Typography>
                    </Stack>
                    <NewProductForm error={isError?.isError.data} onSubmit={handleSubmit}></NewProductForm>
                </Box>
    )
*/