

import * as React from 'react';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import CollapsibleTableRow from './CollapsibleTableRow';
import { useMediaQuery } from '@mui/material';
import CompactCollapsibleTableRow from './CompactCollapsibleTableRow';

export default function UserOrdersTable({ mainHeaders, orders, detailsHeaders }) {

    const up750 = useMediaQuery('(min-width:750px)');
    return (
        up750 ?
            <TableContainer component={Paper}>
                <Typography p={2} variant='h5' sx={{ fontWeight: 'bold' }} >
                    Mis pedidos
                </Typography>
                <Table aria-label="collapsible table">
                    <TableHead>
                        <TableRow>
                            <TableCell />
                            <TableCell align="left"  >Fecha</TableCell>
                            <TableCell >ID de pedido</TableCell>
                            <TableCell

                                align="right">Productos</TableCell>
                            <TableCell align="right">Total</TableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {orders.map(order => (
                            <CollapsibleTableRow key={order._id} order={order} detailsHeaders={detailsHeaders} />
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            :
            <TableContainer component={Paper}>
                <Typography p={2} variant='h5' sx={{ fontWeight: 'bold' }} >
                    Mis pedidos
                </Typography>
                {orders.map(order => (
                    <CompactCollapsibleTableRow key={order._id} order={order} detailsHeaders={detailsHeaders} />
                ))}

            </TableContainer>
    );
}