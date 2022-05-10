import Box from "@mui/system/Box"
import Typography from "@mui/material/Typography"
import ProfileForm from "../elements/ProfileForm"
import { updateUser } from "../../lib/api/user"
import Stack from "@mui/material/Stack"
import CircularProgress from "@mui/material/CircularProgress"

const ShipmentStep = ({ user, mutate, isLoading, ...props }) => {

    console.log('#### shipmentstep user entrante', user)
    console.log('#### shipmentstep resolved', mutate)
    const onSubmit = async (newUserValues) => {
        console.log('#### shipmentstep user submit', user)
        const { resolved } = await updateUser(user._id, newUserValues)

        resolved && mutate()
    }

    //Obtiene dirección principal del array de direcciones
    if (user?.hasProfile) {
        const [mainAddress] = user.addresses
        const { address, moreInfo, city, postCode, region, country } = mainAddress
        const addressLine = `${address}, ${moreInfo}, ${city}, ${postCode}, ${region}, ${country}`
    }

    return (
        isLoading ?
            <Stack sx={{ color: 'grey.500', justifyContent: 'center' }} spacing={2} direction="row">
                <CircularProgress color="primary" />
            </Stack>
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
                    <Box sx={{
                        flexGrow: 1,
                    }}>
                        <Typography p={2} variant='h5' sx={{ fontWeight: 'bold' }} >
                            Dirección de envío
                        </Typography>
                    </Box>
                    <ProfileForm
                        {...props}
                        onSubmit={onSubmit}
                    />
                </>
    )
}

export default ShipmentStep

