import ProfileForm from '../elements/ProfileForm'
import Paper from "@mui/material/Paper"
import Typography from "@mui/material/Typography"
import Box from "@mui/system/Box"
import Stack from '@mui/material/Stack';
import { updateUser } from '../../lib/api/user';



const DataSection = ({ user }) => {
    console.log('user que llega a DataSection.js', user)
    const onSubmit = async (newUserValues) => {
        const { resolved } = await updateUser(user._id, newUserValues)
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
                <Box sx={{ flexGrow: 1, background: "red" }}> <Typography>Dirección de envío</Typography></Box>
                <ProfileForm onSubmit={onSubmit} />
            </>
    )
}

export default DataSection