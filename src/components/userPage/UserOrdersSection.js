
import UserOrdersTable from './UserOrdersTable'
import Box from '@mui/system/Box';
import Stack from '@mui/material/Stack';
import Typography from "@mui/material/Typography"
import CircularProgress from '@mui/material/CircularProgress';
import { useGetUserOrdersQuery } from '../../app/store/services/orderApi';

const UserOrdersSection = ({ user }) => {

    const { data: orders, isFetching: isLoadingOrders, refetch: refetchUser } = useGetUserOrdersQuery(user._id)
    useGetUserOrdersQuery
    console.log('orders que llega ', orders)
    const mainHeaders = ['Fecha', 'ID de pedido', 'Productos', 'Total']
    const detailsHeaders = ['Artículo', 'Nombre', 'Precio', 'Cantidad', 'Total']

    return (


        isLoadingOrders ?
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

    )
}

export default UserOrdersSection