import Box from "@mui/system/Box"

import Typography from "@mui/material/Typography"
import useUser from '../../hooks/swrHooks/useUser'
import { useAppContext } from '../context'

import ProfileForm from "../elements/ProfileForm"
import { updateUser } from "../../lib/api/user"
import SelectAddressForm from "../elements/SelectPayment"
import { useRouter } from "next/dist/client/router"
import SelectPayment from '../elements/SelectPayment'

const PaymentStep = ({ setButtonIsActive, user, mutate, isLoading, ...props }) => {







    return (

        <SelectPayment></SelectPayment>
    )
}

export default PaymentStep

/*
 user.addresses.length < 0 ?
                <SelectAddressForm user={user}></SelectAddressForm>
                :
                <>
                    <Box sx={{ flexGrow: 1, background: "green" }}> <Typography>Dirección de envío</Typography></Box>
                    <ProfileForm
                        onSubmit={onSubmit}
                    />
                </>
                */