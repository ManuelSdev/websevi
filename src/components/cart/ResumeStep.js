import { Stack } from "@mui/material"
import Typography from "@mui/material/Typography"
import Box from "@mui/system/Box"
import CartResumeTable from "./CartResumeTable"


const ResumeStep = ({ user, order }) => {

    return (

        <Box sx={{ flexGrow: 1 }}>

            <CartResumeTable
                user={user}
                order={order}
            ></CartResumeTable>
        </Box>





    )
}

export default ResumeStep