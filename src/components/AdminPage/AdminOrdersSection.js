
import AdminOrdersTable from './AdminOrdersTable'
import Box from '@mui/system/Box';
import Stack from '@mui/material/Stack';
import Typography from "@mui/material/Typography"
import useAllOrders from '../../hooks/swrHooks/useAllOrders';
const AdminOrdersSection = () => {
    const { orders, isLoadingOrders, isErrorOrders, mutateOrders } = useAllOrders()

    console.log('==============', orders)
    const mainHeaders = ['Fecha', 'ID de usuario', 'ID de pedido', 'Productos', 'Total']
    const detailsHeaders = ['Artículo', 'Nombre', 'Precio', 'Cantidad', 'Total']
    return (

        <Box>
            <Stack mb={2} direction='row'>
                <Typography variant='h5' sx={{ fontWeight: 'bold' }} >Histórico de pedidos</Typography>

            </Stack>

            {isLoadingOrders ?
                <Box>LOADINGG</Box>
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