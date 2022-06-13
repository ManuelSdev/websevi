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
    //  console.log('?????????????', data)
    return (



        <CartResumeTable
            user={user}
            order={order}
        ></CartResumeTable>





    )
}

export default ResumeStep