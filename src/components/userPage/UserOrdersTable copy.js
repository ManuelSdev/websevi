

import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

import CollapsibleTableRow from './CollapsibleTableRow';
import formatDate from '../../lib/utils/formatDate'
import { useMediaQuery } from '@mui/material';



export default function UserOrdersTable({ mainHeaders, orders, detailsHeaders }) {

    const up750 = useMediaQuery('(min-width:750px)');
    return (
        up750 ?
            <TableContainer component={Paper}>
                <Table aria-label="collapsible table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center" colSpan={2} >Fecha</TableCell>
                            <TableCell >ID de pedido</TableCell>
                            <TableCell align="right">Productos</TableCell>
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
                <Table aria-label="collapsible table">
                    <TableHead>
                        <TableRow>
                            <TableCell colSpan={2} >
                                <TableContainer>
                                    <Table>
                                        <TableBody sx={{
                                            'td,th': { border: 0, padding: 0.5, },
                                            'th': { fontWeight: 'bold' }
                                        }}>
                                            <TableRow >
                                                <TableCell
                                                    scope="row"
                                                    component="th"
                                                    // sx={{ '&.MuiTableCell-root': { border: 0, padding: 0, } }}
                                                    colSpan={4}
                                                >Fecha 28/08/2022</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell component="th" style={{ width: 60 }} >Artículos: </TableCell>

                                            </TableRow>
                                            <TableRow >
                                                <TableCell component="th" >ID pedido: </TableCell>

                                            </TableRow>
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </TableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {orders.map(order => (
                            <CollapsibleTableRow key={order._id} order={order} detailsHeaders={detailsHeaders} />
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
    );
}