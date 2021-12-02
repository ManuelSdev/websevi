import usePromise from "../../hooks/usePromise";
import { createCategs } from "../../lib/api/categorie";
import NewProductForm from "./NewProductForm"
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';
import { Box } from "@mui/system";
import ConfirmAndReturn from "../elements/ConfirmAndReturn";
import React from "react";
import DeleteCategsForm from './DeleteCategsForm'

const DeleteCategsSection = ({ props }) => {
    const { error, throwPromise, loading, data: confirmation } = usePromise({})
    const [uploaded, setUploaded] = React.useState(false)
    const { bucket, region } = props
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
        await throwPromise(createCategs(newCategories));
        //console.log('aveee', a)
        console.log('aveee 222', confirmation)
        setUploaded(true)
        //history.push("/user");
    };
    console.log('confiii 1111', confirmation)
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
            <Stack sx={{ color: 'grey.500' }} spacing={2} direction="row">
                <CircularProgress color="primary" />

            </Stack>
            :
            uploaded ?

                <ConfirmAndReturn
                    message={confirmation.message}
                    action={() => setUploaded(false)}
                ></ConfirmAndReturn>
                :
                <DeleteCategsForm error={error?.data} onSubmit={handleSubmit}></DeleteCategsForm>
    )
}

export default DeleteCategsSection