
import Badge from "@mui/material/Badge"
import Button from "@mui/material/Button"
import Box from '@mui/system/Box'
import Link from '../elements/Link'
import React from "react";
import { styled } from "@mui/system";
import { experimental_sx } from "@mui/material"
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Modal from '../cart/Modal'
import useBreakpoints from "../../hooks/useBreakpoints"

import { useSelector } from "react-redux"
import { getCartVolume } from "../../app/store/selectors"

const StyledButton = styled(Button)(
    experimental_sx({ minWidth: { xs: '45px', sm: '45px', md: '45px' } }),
    {
        // padding: '0px',
        //minWidth: '45px',
        fontSize: '1.1rem', fontWeight: 'bold', height: '100%', color: "black", textTransform: "none", marginBottom: '0em'
    });

const ButtonBox = ({ children }) => {
    return (
        <Box
            sx={{
                display: 'flex', justifyContent: 'center',
                ml: { md: 2 },
                height: '75%',
                border: 1,
                '&:hover': {
                    borderColor: 'corpGreen.main',
                    borderRadius: 1,
                }
            }}
        >
            {children}
        </Box>
    )
}

const CartButton = () => {

    const { md950Up } = useBreakpoints()
    const cartVolume = useSelector(getCartVolume)

    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
        setOpen(true);

    };
    const handleClose = () => {
        setOpen(false);

    };

    return (
        <>
            <ButtonBox>
                {cartVolume > 0 ?
                    <Link href="/carrito">
                        <StyledButton
                            size="large" variant="text"
                            startIcon={
                                <Badge
                                    sx={{
                                        '& .MuiBadge-badge': {
                                            right: -5,
                                            top: -1,
                                            padding: '0 4px',
                                        },
                                    }}
                                    badgeContent={cartVolume} color="corpGreen">
                                    <ShoppingCartOutlinedIcon sx={{ mr: -0.5, width: 30, height: 30 }} />
                                </Badge>}
                        >
                            {md950Up && 'Carrito'}
                        </StyledButton>
                    </Link >
                    :
                    <StyledButton
                        onClick={handleClickOpen}
                        size="large" variant="text"
                        startIcon={
                            <Badge
                                sx={{
                                    '& .MuiBadge-badge': {
                                        right: -5,
                                        top: -1,
                                        padding: '0 4px',
                                    },
                                }}
                                badgeContent={cartVolume} color="corpGreen">
                                <ShoppingCartOutlinedIcon sx={{ mr: -0.5, width: 30, height: 30 }} />
                            </Badge>}
                    >
                        {md950Up && 'Carrito'}
                    </StyledButton>
                }
            </ButtonBox>
            <Modal
                handleClickOpen={handleClickOpen}
                handleClose={handleClose}
                open={open}
                mainMessage={"No tiene nigún artículo en el carrito"}
            />
        </>

    )
}

export default CartButton