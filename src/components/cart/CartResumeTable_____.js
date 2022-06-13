

import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
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
import CartOrderRows from './CartOrderRows';
import IconButton from "@mui/material/IconButton"
import DeleteIcon from '@mui/icons-material/HighlightOffOutlined';
import Link from '../elements/Link'
import IconVisa from '../elements/IconVIsa';
import IconPaypal from '../elements/IconPaypal';
import Stack from '@mui/material/Stack';
import useMediaQuery from '@mui/material/useMediaQuery';

const TextTableCell = ({ children, bold, colSpan }) => {
    return (
        <TableCell
            size='small'
            // padding='none'
            align="left"
            colSpan={colSpan}
            sx={{
                fontWeight: bold && 'bold',
                '&.MuiTableCell-root':
                {
                    paddingRight: 0, paddingTop: 0, paddingBottom: 0,

                },



            }}
        >
            {children}
        </TableCell >
    )
}


export default function CartResumeTable({ user, order }) {
    const up750 = useMediaQuery('(min-width:750px)');

    const [mainAddress] = user.addresses
    const { address, moreInfo, city, postCode, region, country } = mainAddress
    const addressLine = `${address}, ${moreInfo}, ${city}, ${postCode}, ${region}, ${country}`

    return (

        <TableContainer component={Paper}>
            <Typography p={2} variant='h5' sx={{ fontWeight: 'bold' }} >
                Resumen
            </Typography>
            <Table aria-label="collapsible table">
                <TableHead>
                    <TableRow>
                        <TableCell >
                            <Typography variant='h6' sx={{ fontWeight: 'bold' }} >Datos</Typography>
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell>
                            <Typography sx={{ fontWeight: 'bold' }} >Envío</Typography>
                            <Typography  >{user.name}</Typography>
                            <Typography  >{addressLine}</Typography>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>
                            <Typography sx={{ fontWeight: 'bold' }} >Pago</Typography>
                            {order.payment === 'tarjeta' ?
                                <Stack direction="row" spacing={2}>
                                    <IconVisa viewBox="0 0 1000.046 323.653"
                                        sx={{ fontSize: 50 }}
                                    ></IconVisa>
                                    <Box>
                                        <Typography>{user.name}</Typography>
                                        <Typography>Tarjeta de crédito terminada en ...XXXX</Typography>
                                    </Box>
                                </Stack>
                                :
                                <Stack direction="row" spacing={2}>
                                    <IconPaypal viewBox="0 0 660 100"
                                        sx={{ fontSize: 50 }}
                                    ></IconPaypal>
                                    <Box>
                                        <Typography>{user.name}</Typography>
                                        <Typography>PayPal</Typography>
                                    </Box>
                                </Stack>
                            }
                        </TableCell>

                    </TableRow>
                </TableBody>
            </Table>
            {up750 ?
                <Table aria-label="collapsible table">
                    <TableHead>
                        <TableRow>
                            <TableCell colSpan={2}><Typography variant='h6' sx={{ fontWeight: 'bold' }} >Artículos</Typography></TableCell>

                            <TableCell align="right">Precio</TableCell>
                            <TableCell align="right">Cantidad</TableCell>
                            <TableCell colSpan={2} align="left">Total</TableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {order.orderCart.map((product) => {
                            return <TableRow
                                key={product.productId}
                                sx={{ '&:last-child td, &:last-child th': { border: 0, } }}
                            >
                                <TableCell component="th" scope="row">
                                    <Link href={`/product/${product.url}`}>
                                        <Image
                                            width='100%'
                                            height='100%'
                                            objectFit='contain'
                                            src={product.productImage}
                                            alt="Imagen de producto"
                                        />
                                    </Link>
                                </TableCell>
                                <TableCell >{product.productName}</TableCell>
                                <TableCell align="right">{product.productPrice} €</TableCell>
                                <TableCell align="right">{product.productAmount}</TableCell>
                                <TableCell align="right">
                                    {Math.round(product.productPrice * product.productAmount * 100) / 100} €
                                </TableCell>
                            </TableRow>
                        })
                        }
                    </TableBody>
                </Table>
                :
                <Table aria-label="collapsible table">
                    <TableHead>
                        <TableRow>
                            <TableCell colSpan={2}><Typography variant='h6' sx={{ fontWeight: 'bold' }} >Artículos</Typography></TableCell>

                            <TableCell align="right">Precio</TableCell>
                            <TableCell align="right">Cantidad</TableCell>
                            <TableCell colSpan={2} align="left">Total</TableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {order.orderCart.map((product) => {
                            return <>
                                <TableRow
                                    key={product.productId}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell rowSpan={3} colSpan={2} component="th" scope="row">
                                        <Link href={`/product/${product.url}`}>
                                            <Image
                                                width='100%'
                                                height='100%'
                                                objectFit='contain'
                                                src={product.productImage}
                                                alt="Imagen de producto"
                                            />
                                        </Link>
                                    </TableCell>
                                    <TableCell
                                        //component="th"
                                        sx={{ '&.MuiTableCell-root': { borderBottom: '0px solid red', paddingBottom: 0, } }}
                                        colSpan={4}
                                    >{product.productName}</TableCell>
                                </TableRow>
                                <TableRow
                                    sx={{ 'td': { borderBottom: '0px solid red' } }}
                                >
                                    <TextTableCell bold={true}>Unidades: </TextTableCell>
                                    <TextTableCell bold={false} colSpan={2}> {product.productAmount} </TextTableCell>

                                </TableRow>
                                <TableRow >
                                    <TextTableCell bold={true}>Precio: </TextTableCell>
                                    <TextTableCell colSpan={2}>
                                        {Math.round(product.productPrice * product.productAmount * 100) / 100} €
                                    </TextTableCell>

                                </TableRow>
                            </>
                        })
                        }
                    </TableBody>
                </Table>}
        </TableContainer>

    );
}
