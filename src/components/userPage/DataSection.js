import ProfileForm from '../elements/ProfileForm'
import Paper from "@mui/material/Paper"
import Typography from "@mui/material/Typography"
import Box from "@mui/system/Box"
import Stack from '@mui/material/Stack';



const DataSection = ({ user }) => {

    const onSubmit = async (newUserValues) => {
        console.log('*------------', user._id)
        const { resolved } = await updateUser(user._id, newUserValues)
        resolved && mutate()

        //   mutate(`/api/users/getUser/${authId}`, updatedRes, false)
    }

    if (user.hasProfile) {
        const [mainAddress] = user.addresses
        const { address, moreInfo, city, postCode, region, country } = mainAddress
        const addressLine = `${address}, ${moreInfo}, ${city}, ${postCode}, ${region}, ${country}`
    }

    return (
        user.hasProfile ?
            <Box>
                <Stack mb={2} direction='row'>
                    <Typography variant='h5' sx={{ fontWeight: 'bold' }} >Mis datos</Typography>

                </Stack>
                <Paper>
                    <Typography>Nombre: {user.name}</Typography>
                    <Typography>Direccion: {addressLine}</Typography>
                    <Typography>Móvil: {user.phone}</Typography>
                </Paper>

            </Box>
            :
            <>
                <Box sx={{ flexGrow: 1, background: "green" }}> <Typography>Dirección de envío</Typography></Box>
                <ProfileForm


                    onSubmit={onSubmit}
                />
            </>
    )
}

export default DataSection