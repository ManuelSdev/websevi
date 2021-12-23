import Box from "@mui/system/Box"

import Typography from "@mui/material/Typography"
import useUser from '../../hooks/swrHooks/useUser'
import { useAppContext } from '../../components/context'

import UserDataForm from "../elements/UserDataForm"
import { updateUser } from "../../lib/api/user"
const fetcher = (url) => console.log('################', url) || fetch(url).then((res) => res.json())

const ShipmentStep = () => {
    const { authId } = useAppContext()
    const { users, isLoading, isError } = useUser(authId)
    //users es un array con un unico objeto user que contiene el campo _id: doble destructuring
    const [user] = isLoading ? [{}] : users
    const onSubmit = async (newUserValues) => {
        console.log('*------------', user._id)
        await updateUser(user._id, newUserValues)

    }
    console.log('authId', authId)
    console.log('*******************user id', user._id)
    //console.log('*******************user id', user._id)


    return (
        <>
            <Box sx={{ flexGrow: 1, background: "green" }}> <Typography>Dirección de envío</Typography></Box>
            <UserDataForm
                onSubmit={onSubmit}

            />
        </>
    )
}

export default ShipmentStep