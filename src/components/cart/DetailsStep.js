import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Image from "next/image"
import IconButton from "@mui/material/IconButton"
import DeleteIcon from '@mui/icons-material/HighlightOffOutlined';
import Link from '../elements/Link'

import { useDispatch, useSelector } from "react-redux"
import { cartSet } from "../../app/store/cartSlice"
import { getCart } from "../../app/store/selectors"
import { useRouter } from 'next/router';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Box, Stack } from '@mui/material';
import DirectProductAmountButton from './DirectProductAmountButton';

//import CartOrdersTable from "./CartOrdersTable"

const DetailsStep = () => {
    const up750 = useMediaQuery('(min-width:750px)');

    const { cartProducts } = useSelector(getCart)
    const router = useRouter()
    const dispatch = useDispatch()
    //TODO: al quitar todos los productos, se queda vacío sin boton de volver
    const handleDelete = productToDelete => ev => {
        ev.preventDefault()
        const newCart = cartProducts.filter(product => product._id !== productToDelete._id)
        dispatch(cartSet(newCart))
        newCart.length || router.push('/')
    }

    return (
        up750 ?
            <TableContainer component={Paper}>
                <Typography p={2} variant='h5' sx={{ fontWeight: 'bold' }} >
                    Detalles del pedido
                </Typography>
                <Table aria-label="collapsible table">
                    <TableHead>
                        <TableRow>
                            <TableCell colSpan={2} >Artículos</TableCell>

                            <TableCell align="right">Precio</TableCell>
                            <TableCell align="right">Cantidad</TableCell>
                            <TableCell colSpan={2} align="left">Total</TableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {cartProducts.map((product) => {
                            const [image] = product.images
                            return <TableRow
                                key={product._id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    <Link href={`/product/${product.url}`}>
                                        <Image
                                            width='100%'
                                            height='100%'
                                            objectFit='contain'
                                            src={image}
                                            alt="Imagen de producto"
                                        />
                                    </Link>
                                </TableCell>
                                <TableCell >{product.name}</TableCell>
                                <TableCell align="right">{product.price} €</TableCell>
                                <TableCell align="right">
                                    <DirectProductAmountButton product={product} />

                                </TableCell>
                                <TableCell align="right">
                                    {Math.round(product.price * product.amount * 100) / 100} €
                                </TableCell>
                                <TableCell align="right">
                                    <IconButton
                                        onClick={handleDelete(product)}
                                        color="primary" aria-label="upload picture" component="span">
                                        <DeleteIcon />
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        })
                        }
                    </TableBody>
                </Table>
            </TableContainer>
            :
            <TableContainer component={Paper}>
                <Typography p={2} variant='h5' sx={{ fontWeight: 'bold' }} >
                    Detalles del pedido
                </Typography>
                <Table aria-label="collapsible table">

                    <TableBody>
                        {cartProducts.map((product) => {
                            const [image] = product.images
                            return <>
                                <TableRow
                                    key={product._id}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell rowSpan={2} component="th" scope="row">
                                        <Link href={`/product/${product.url}`}>
                                            <Image
                                                width='100%'
                                                height='100%'
                                                objectFit='contain'
                                                src={image}
                                                alt="Imagen de producto"
                                            />
                                        </Link>
                                    </TableCell>
                                    <TableCell
                                        sx={{ '&.MuiTableCell-root': { borderBottom: '0px solid red', paddingBottom: 0 } }}
                                        colSpan={4}>
                                        {product.name}</TableCell>

                                </TableRow>
                                <TableRow>
                                    <TableCell align="right">
                                        <DirectProductAmountButton product={product} />

                                    </TableCell>
                                    <TableCell align="right">
                                        {Math.round(product.price * product.amount * 100) / 100} €
                                    </TableCell>
                                    <TableCell align="right">
                                        <IconButton
                                            onClick={handleDelete(product)}
                                            color="primary" aria-label="upload picture" component="span">
                                            <DeleteIcon />
                                        </IconButton>
                                    </TableCell>
                                </TableRow>
                            </>





                        })
                        }
                    </TableBody>
                </Table>
            </TableContainer>
    )
}

export default DetailsStep

