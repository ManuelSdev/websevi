import { Stack } from "@mui/material"
import Typography from "@mui/material/Typography"
import Box from "@mui/system/Box"
import { useAddOrderMutation } from "../../app/store/services/orderApi"
import CartResumeTable from "./CartResumeTable"


const ResumeStep = ({ user, order }) => {


    const [
        addOrder,
        { status, isUninitialized, isLoading, isSuccess, data, isError }
    ] = useAddOrderMutation({ fixedCacheKey: 'carrito-key', })
    console.log('?????????????', data)
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Box>status: {status}</Box>
            <Box>inicializado: {`${isUninitialized}`}</Box>
            <Box>isLoading: {`${isLoading}`}</Box>
            <Box>sucess: {`${isSuccess}`}</Box>
            <Box>error : {`${isError}`}</Box>
            <Box>error status : {`${isError.status}`}</Box>


            <CartResumeTable
                user={user}
                order={order}
            ></CartResumeTable>
        </Box>





    )
}

export default ResumeStep