
import CollapsibleTable from '../collapsibleTable/CollapsibleTable'
import Box from '@mui/system/Box';
import Stack from '@mui/material/Stack';
import Typography from "@mui/material/Typography"
import useOrders from '../../hooks/swrHooks/useOrders';

const OrdersSection = ({ user }) => {
    const { orders, isLoadingOrders, isErrorOrders, mutateOrders } = useOrders(user._id)

    console.log('==============', orders)
    const mainHeaders = ['Fecha', 'ID de pedido', 'Productos', 'Total']
    const detailsHeaders = ['Artículo', 'Nombre', 'Precio', 'Cantidad', 'Total']
    return (

        <Box>
            <Stack mb={2} direction='row'>
                <Typography variant='h5' sx={{ fontWeight: 'bold' }} >Mis pedidos</Typography>

            </Stack>

            {orders.length === 0 ?
                <Box>No hay pedidos</Box>
                :
                isLoadingOrders ?
                    <Box>Loading</Box>
                    :
                    <CollapsibleTable
                        mainHeaders={mainHeaders}
                        detailsHeaders={detailsHeaders}
                        orders={orders}
                    ></CollapsibleTable>
            }


        </Box>
    )
}

export default OrdersSection