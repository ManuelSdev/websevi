
import UserOrdersTable from './UserOrdersTable'
import Box from '@mui/system/Box';
import Stack from '@mui/material/Stack';
import Typography from "@mui/material/Typography"
import useOrders from '../../hooks/swrHooks/useOrders';

const UserOrdersSection = ({ user }) => {
    const { orders, isLoadingOrders, isErrorOrders, mutateOrders } = useOrders(user._id)

    console.log('==============', orders)
    const mainHeaders = ['Fecha', 'ID de pedido', 'Productos', 'Total']
    const detailsHeaders = ['Artículo', 'Nombre', 'Precio', 'Cantidad', 'Total']
    return (

        <Box>
            <Stack mb={2} direction='row'>
                <Typography variant='h5' sx={{ fontWeight: 'bold' }} >Mis pedidos</Typography>

            </Stack>

            {isLoadingOrders ?
                <Box>LOADINGG</Box>
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