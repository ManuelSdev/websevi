import Box from "@mui/system/Box"

import Typography from "@mui/material/Typography"
import useUser from '../../hooks/swrHooks/useUser'
import { useAppContext } from '../context'

import ProfileForm from "../elements/ProfileForm"
import { updateUser } from "../../lib/api/user"
import SelectAddressForm from "../elements/SelectPayment"
import { useRouter } from "next/dist/client/router"
import SelectPayment from '../elements/SelectPayment'
import { Stack } from "@mui/material"

const PaymentStep = ({ setOrder, order, setButtonIsActive, user, mutate, isLoading, ...props }) => {







    return (
        <Box>
            <Stack mb={2} direction='row'>
                <Typography variant='h5' sx={{ fontWeight: 'bold' }} >Forma de pago</Typography>
            </Stack>
            <Box pl={2}>
                <SelectPayment order={order} setOrder={setOrder}></SelectPayment>
            </Box>

        </Box>

    )
}

export default PaymentStep

