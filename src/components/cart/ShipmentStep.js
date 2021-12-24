import Box from "@mui/system/Box"

import Typography from "@mui/material/Typography"
import useUser from '../../hooks/swrHooks/useUser'
import { useAppContext } from '../../components/context'

import ProfileForm from "../elements/ProfileForm"
import { updateUser } from "../../lib/api/user"
import SelectAddressForm from "../elements/SelectAddressForm"
import { useRouter } from "next/dist/client/router"


const ShipmentStep = ({ setButtonIsActive, user, mutate, isLoading, ...props }) => {







    user.hasProfile ? setButtonIsActive(true) : setButtonIsActive(false)
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
    if (user.hasProfile) {
        const [mainAddress] = user.addresses
        const { address, moreInfo, city, postCode, region, country } = mainAddress
        const addressLine = `${address}, ${moreInfo}, ${city}, ${postCode}, ${region}, ${country}`
    }


    return (
        isLoading ?
            <Box>LOADING</Box>
            :
            user.hasProfile ?
                <Box sx={{ pl: 2 }} >
                    <Typography>{user.name}</Typography>
                    <Typography>Direccion: {addressLine}</Typography>
                    <Typography>Móvil: {user.phone}</Typography>
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