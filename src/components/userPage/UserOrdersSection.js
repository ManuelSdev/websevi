
import UserOrdersTable from './UserOrdersTable'
import Box from '@mui/system/Box';
import Stack from '@mui/material/Stack';
import Typography from "@mui/material/Typography"
import useOrders from '../../hooks/swrHooks/useOrders';
import CircularProgress from '@mui/material/CircularProgress';

const UserOrdersSection = ({ user }) => {

    const { orders, isLoadingOrders } = useOrders(user._id)
    console.log('orders que llega ', orders)
    const mainHeaders = ['Fecha', 'ID de pedido', 'Productos', 'Total']
    const detailsHeaders = ['Artículo', 'Nombre', 'Precio', 'Cantidad', 'Total']

    return (
        <Box>
            <Stack mb={2} direction='row'>
                <Typography variant='h5' sx={{ fontWeight: 'bold' }} >Mis pedidos</Typography>
            </Stack>
            {isLoadingOrders ?
                <Stack sx={{ color: 'grey.500', justifyContent: 'center' }} spacing={2} direction="row">
                    <CircularProgress color="primary" />

                </Stack>
                :
                orders.length === 0 ?
                    <Box>No hay pedidos</Box>
                    :
                    <UserOrdersTable
                        mainHeaders={mainHeaders}
                        detailsHeaders={detailsHeaders}
                        orders={orders}
                    ></UserOrdersTable>
            }
        </Box>
    )
}

export default UserOrdersSection