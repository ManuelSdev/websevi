import Box from "@mui/system/Box"

import Typography from "@mui/material/Typography"
import useUser from '../../hooks/swrHooks/useUser'
import { useAppContext } from '../../components/context'

import ProfileForm from "../elements/ProfileForm"
import { updateUser } from "../../lib/api/user"
import SelectAddressForm from "../elements/SelectPayment"
import { useRouter } from "next/dist/client/router"
import { Paper, Stack } from "@mui/material"


const ShipmentStep = ({ user, mutate, isLoading, ...props }) => {


    // user.hasProfile ? setButtonIsActive(true) : setButtonIsActive(false)

    const onSubmit = async (newUserValues) => {
        console.log('*------------', user._id)
        const { resolved } = await updateUser(user._id, newUserValues)
        resolved && mutate()

        //   mutate(`/api/users/getUser/${authId}`, updatedRes, false)
    }
    //console.log('authId', authId)
    //isLoading || console.log('*******************user id', user.addresses)
    //console.log('*******************user id', user._id)

    //Obtiene dirección principal del array de direcciones
    if (user?.hasProfile) {
        const [mainAddress] = user.addresses
        const { address, moreInfo, city, postCode, region, country } = mainAddress
        const addressLine = `${address}, ${moreInfo}, ${city}, ${postCode}, ${region}, ${country}`
    }


    return (
        isLoading ?
            <Box>LOADING</Box>
            :
            user?.hasProfile ?

                <Box>
                    <Stack mb={2} direction='row'>
                        <Typography variant='h5' sx={{ fontWeight: 'bold' }} >Mis datos</Typography>
                    </Stack>
                    <Stack mb={1} direction='row'>
                        <Typography sx={{ fontWeight: 'bold', mr: 1 }}>Nombre:</Typography>
                        <Typography>{user.name}</Typography>
                    </Stack>
                    <Stack mb={1} direction='row'>
                        <Typography sx={{ fontWeight: 'bold', mr: 1 }}>Direccion:</Typography>
                        <Typography>{addressLine}</Typography>
                    </Stack>
                    <Stack mb={1} direction='row'>
                        <Typography sx={{ fontWeight: 'bold', mr: 1 }}>Móvil:  </Typography>
                        <Typography>{user.phone}</Typography>
                    </Stack>
                </Box>
                :
                <>
                    <Box sx={{ flexGrow: 1, background: "green" }}> <Typography>Dirección de envío</Typography></Box>
                    <ProfileForm
                        {...props}

                        onSubmit={onSubmit}
                    />
                </>
    )
}

export default ShipmentStep

