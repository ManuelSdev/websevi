

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
import Image from "next/image"
import { Stack } from '@mui/material';
import FullDate from '../../lib/utils/formatDate';


export default function CollapsibleTableRow({ order, detailsHeaders }) {
    // const { row } = props;
    const [open, setOpen] = React.useState(false);

    return (
        <React.Fragment>
            <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
                <TableCell>
                    <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                </TableCell>
                <TableCell component="th" scope="row">
                    <FullDate namedMonth={false}>{order.date}</FullDate>
                </TableCell>
                <TableCell >{order.userId}</TableCell>
                <TableCell >{order._id}</TableCell>
                <TableCell align="right">{order.orderCart.length}</TableCell>
                <TableCell align="right">{order.amount} €</TableCell>

            </TableRow>
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box sx={{ margin: 1 }}>
                            <Typography variant="h6" gutterBottom component="div">
                                Detalles del pedido
                            </Typography>
                            <Table size="small" aria-label="purchases">
                                <TableHead>
                                    <TableRow>

                                        <TableCell >Artículo</TableCell>
                                        <TableCell >Nombre</TableCell>
                                        <TableCell align="right">Precio</TableCell>
                                        <TableCell align="right">Cantidad</TableCell>
                                        <TableCell align="right">Total</TableCell>

                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {order.orderCart.map((product) => (
                                        <TableRow key={product._id}>
                                            <TableCell component="th" scope="row">

                                                <Image
                                                    width='100%'
                                                    height='100%'
                                                    objectFit='contain'

                                                    //src={product.images}
                                                    src={product.productImage}

                                                    alt="Imagen de producto"
                                                />

                                            </TableCell>
                                            <TableCell >{product.productName}</TableCell>
                                            <TableCell align="right">{product.productPrice} €</TableCell>
                                            <TableCell align="right">{product.productAmount}</TableCell>
                                            <TableCell align="right">
                                                {Math.round(product.productPrice * product.productAmount * 100) / 100} €
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </React.Fragment>
    );
}