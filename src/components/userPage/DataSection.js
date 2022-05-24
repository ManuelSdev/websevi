import ProfileForm from '../elements/ProfileForm'
import Typography from "@mui/material/Typography"
import Box from "@mui/system/Box"
import Stack from '@mui/material/Stack';
import { updateUser } from '../../lib/api/user';
import { CircularProgress } from '@mui/material';



const DataSection = ({ user, isLoading, isFetching, isError, refetch }) => {

    const onSubmit = async (newUserValues) => {
        const { done } = await updateUser(user._id, newUserValues)
        done && refetch()
    }

    //console.log('user has profile', user)
    if (user.hasProfile) {
        const [mainAddress] = user.addresses
        const { address, moreInfo, city, postCode, region, country } = mainAddress
        const addressLine = `${address}, ${moreInfo}, ${city}, ${postCode}, ${region}, ${country}`
    }

    return (isFetching ?
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
                <ProfileForm onSubmit={onSubmit} />
            </>
    )
}

export default DataSection