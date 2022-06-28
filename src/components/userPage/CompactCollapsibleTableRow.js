

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
import { formatDate } from '../../lib/utils/formatDate';
import Link from '../elements/Link'

export default function CompactCollapsibleTableRow({ order, detailsHeaders }) {
    // const { row } = props;
    const [open, setOpen] = React.useState(false);

    return (
        <>
            <Table aria-label="collapsible table">
                <TableHead>
                    <TableRow sx={{ borderBottom: 0 }}>
                        <TableCell>
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
                                            //colSpan={4}
                                            >Fecha:</TableCell>
                                            <TableCell> {formatDate(order.date, false)} </TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell component="th" style={{ width: 60 }} >Importe: </TableCell>
                                            <TableCell> {order.amount} € </TableCell>
                                        </TableRow>
                                        <TableRow >
                                            <TableCell component="th" >Id: </TableCell>
                                            <TableCell >
                                                {order._id}
                                            </TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </TableCell>
                        <TableCell>
                            <IconButton
                                aria-label="expand row"
                                size="small"
                                onClick={() => setOpen(!open)}
                            >
                                {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                            </IconButton>
                        </TableCell>
                    </TableRow>
                </TableHead>

            </Table>
            <Collapse in={open} timeout="auto" unmountOnExit>

                <Table>
                    <TableBody>
                        {order.orderCart.map((product) => {
                            return <TableRow
                                className='row-principal'
                                key={product.productId}
                            //sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell colSpan={2} component="th" >
                                    <Link href={`/product/${product.url}`}>
                                        <Image
                                            width='100%'
                                            height='100%'
                                            objectFit='contain'
                                            src={product.productImage}
                                            alt="Imagen de producto"
                                        />
                                    </Link>
                                </TableCell >
                                <TableCell colSpan={3}  >
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
                                                    >{product.productName}</TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell component="th" style={{ width: 60 }} >Unidades: </TableCell>
                                                    <TableCell> {product.productAmount} </TableCell>
                                                </TableRow>
                                                <TableRow >
                                                    <TableCell component="th" >Precio: </TableCell>
                                                    <TableCell >
                                                        {Math.round(product.productPrice * product.productAmount * 100) / 100} €
                                                    </TableCell>
                                                </TableRow>
                                            </TableBody>
                                        </Table>
                                    </TableContainer>
                                </TableCell>
                            </TableRow>
                        })
                        }
                    </TableBody>
                </Table>
            </Collapse>

        </>



    )


}