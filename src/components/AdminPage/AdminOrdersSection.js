
import AdminOrdersTable from './AdminOrdersTable'
import Box from '@mui/system/Box';
import Stack from '@mui/material/Stack';
import Typography from "@mui/material/Typography"
import { CircularProgress } from '@mui/material';
import { useGetAllOrdersQuery } from '../../app/store/services/orderApi';
const AdminOrdersSection = () => {

    const { data: orders, isFetching: isLoadingOrders, refetch: refetchUser } = useGetAllOrdersQuery()

    const mainHeaders = ['Fecha', 'ID de usuario', 'ID de pedido', 'Productos', 'Total']
    const detailsHeaders = ['Artículo', 'Nombre', 'Precio', 'Cantidad', 'Total']
    return (
        <Box>
            <Stack mb={2} direction='row'>
                <Typography variant='h5' sx={{ fontWeight: 'bold' }} >Histórico de pedidos</Typography>
            </Stack>

            {isLoadingOrders ?
                <Stack sx={{ color: 'grey.500', justifyContent: 'center' }} spacing={2} direction="row">
                    <CircularProgress color="primary" />
                </Stack>
                :
                orders.length === 0 ?
                    <Box>No hay pedidos</Box>
                    :
                    <AdminOrdersTable
                        mainHeaders={mainHeaders}
                        detailsHeaders={detailsHeaders}
                        orders={orders}
                    ></AdminOrdersTable>
            }
        </Box>
    )
}

export default AdminOrdersSection