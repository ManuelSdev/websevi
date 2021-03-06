

import TextField from '@mui/material/TextField';
import SvgIcon from '@mui/material/SvgIcon';
import React from 'react';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import { useDispatch, useSelector } from 'react-redux';
import { getProductAmountInCart } from '../../app/store/selectors';
import { cartProductDecrement, cartProductIncrement } from '../../app/store/cartSlice';

const DirectProductAmountButton = ({ product }) => {

    const dispatch = useDispatch()
    const amount = useSelector(getProductAmountInCart(product))

    return (
        <Stack
            direction='row'
            //  alignItems='center'
            //  alignSelf='flex-end'
            // justifyContent="flex-end"
            height={20}

        >
            <IconButton
                onClick={() => dispatch(cartProductDecrement(product))}
                sx={{
                    bgcolor: 'corpGreen.main',
                    width: 20,
                    borderRadius: 1,
                    color: 'white',
                    '&:hover': {
                        bgcolor: 'rgb(0, 109, 120)',
                        color: 'white',
                        boxShadow: '0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)'
                    },
                    // '&.MuiIconButton-root': { height: 20, width: '20%' }
                }}
            >
                <SvgIcon>
                    <svg ><path d="M19 13H5v-2h14v2z"></path></svg>
                </SvgIcon>
            </IconButton>
            <TextField
                InputProps={{ style: { height: 20 } }}
                sx={{
                    width: "5ch",
                    //  '&.MuiTextField-root': { height: '10px' }
                }}
                size="small"
                value={amount}
                id="outlined-basic"
                variant="outlined" />
            <IconButton
                onClick={() => dispatch(cartProductIncrement(product))}
                sx={{
                    bgcolor: 'corpGreen.main',
                    width: 20,
                    borderRadius: 1,
                    color: 'white',
                    '&:hover': {
                        bgcolor: 'rgb(0, 109, 120)',
                        color: 'white',
                        boxShadow: '0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)'
                    }
                }}
            >
                <SvgIcon >
                    <svg  ><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path></svg>
                </SvgIcon>
            </IconButton >
        </Stack >
    )
}

export default DirectProductAmountButton
