
import Box from '@mui/system/Box';
import Stack from '@mui/material/Stack';
import Typography from "@mui/material/Typography"

const OrdersSection = () => {

    return (
        <Box>
            <Stack mb={2} direction='row'>
                <Typography variant='h5' sx={{ fontWeight: 'bold' }} >Pedidos</Typography>

            </Stack>

        </Box>
    )
}

export default OrdersSection