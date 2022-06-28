

import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import AdminOrderRows from './AdminOrderRows';


export default function UserOrdersTable({ mainHeaders, orders, detailsHeaders }) {
    return (
        <TableContainer component={Paper}>
            <Table aria-label="collapsible table">
                <TableHead>
                    <TableRow>
                        <TableCell />
                        <TableCell >Fecha</TableCell>
                        <TableCell >ID de cliente</TableCell>
                        <TableCell >ID de pedido</TableCell>
                        <TableCell align="right">Productos</TableCell>
                        <TableCell align="right">Total</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {orders.map(order => (
                        <AdminOrderRows key={order._id} order={order} detailsHeaders={detailsHeaders} />
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}