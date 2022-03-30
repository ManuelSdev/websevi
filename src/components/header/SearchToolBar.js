import Badge from "@mui/material/Badge"

import IconCorpName from "../elements/IconCorpName"
import Toolbar from "@mui/material/Toolbar"
import Button from "@mui/material/Button"
import Box from '@mui/system/Box'
import Link from '../elements/Link'
import React from "react";
import ThirdPartyEmailPassword from 'supertokens-auth-react/recipe/thirdpartyemailpassword'

import { useAppContext } from "../context";

import { styled } from "@mui/system";
import { sum } from "../../lib/utils/sum";


import LogoutIcon from '@mui/icons-material/Logout';
import LoginIcon from '@mui/icons-material/Login';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import { experimental_sx } from "@mui/material"
import ManageAccountsOutlinedIcon from '@mui/icons-material/ManageAccountsOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import Modal from '../../components/cart/Modal'


import Searcher from './Searcher'
import { Dialog } from "@mui/material"
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import useBreakpoints from "../../hooks/useBreakpoints"


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

const SearchToolBar = ({ handleChangeCollapsed }) => {

    const { md950Up, sm750Up } = useBreakpoints()


    //VENTANA MODAL 1
    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
        setOpen(true);

    };
    const handleClose = () => {
        setOpen(false);

    };

    const [openn, setOpenn] = React.useState(false);
    const handleClickOpenn = () => {
        setOpenn(true);

    };
    const handleClosen = () => {
        setOpenn(false);

    };
    const { setIsLogged, isLogged, cart } = useAppContext()
    const [cartProductsAmount, setCartProductsAmount] = React.useState(0)


    //Método logout
    async function logoutClicked() {
        await ThirdPartyEmailPassword.signOut()
        setIsLogged({ state: false, admin: false, authId: '' })
        // ThirdPartyEmailPassword.redirectToAuth()
    }

    React.useEffect(() => {

        if (cart.length > 0) {
            const amountOfEachProduct = cart.map(product => product.amount)
            //https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Functions/rest_parameters
            //https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Spread_syntax
            const totalProductsAmount = sum(...amountOfEachProduct)
            setCartProductsAmount(totalProductsAmount)
        }
    }, [cart])



    return (
        <>
            <Modal
                handleClickOpen={handleClickOpen}
                handleClose={handleClose}
                open={open}
                mainMessage={"No tiene nigún artículo en el carrito"}
            />

            <Dialog
                open={openn}
                onClose={handleClosen}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                fullScreen
            >
                <Box
                    sx={{

                        p: '2em', width: '100%', alignSelf: 'center', display: 'flex', justifyContent: 'space-evenly', alignItems: 'center',
                        // bgcolor: 'corpWhite.main',
                        //mt: '-1em', pb: '0.3em'
                    }}
                >
                    <ArrowBackOutlinedIcon
                        sx={{ mr: '1em' }}
                        onClick={handleClosen}

                    />
                    <Searcher handleClosen={handleClosen} StyledButton={StyledButton} md950Up={md950Up} sm750Up={sm750Up} />
                </Box>

            </Dialog>

            <Toolbar
                //disableGutters={true}
                sx={{
                    bgcolor: 'corpWhite.main',
                    justifyContent: 'space-between',
                    height: "5em",
                    // mb: '2em',
                    alignItems: 'center',
                    pl: 0.5,
                    pr: 0
                }}
            >
                <Box
                    sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}
                >
                    {sm750Up ||
                        <ButtonBox>
                            <StyledButton
                                onClick={handleChangeCollapsed}
                                size="large" variant="text"
                                startIcon={<DensityMediumIcon sx={{ mr: -0.5, width: 30, height: 30 }} />}
                            >

                            </StyledButton>

                        </ButtonBox>

                    }

                    <IconCorpName viewBox="0 0 381.17 68.88"
                        sx={{
                            fill: "blue", height: "50%",
                            fontSize: md950Up ?
                                250
                                :
                                sm750Up ?
                                    200
                                    :
                                    130
                        }}
                    >
                    </IconCorpName>
                </Box>

                {sm750Up && <Searcher StyledButton={StyledButton} md950Up={md950Up} sm750Up={sm750Up} />}

                <Box
                    sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end' }}
                >
                    {sm750Up ||
                        <ButtonBox>
                            <Link href="/">
                                <StyledButton
                                    //sx={{ padding: '0px' }}
                                    onClick={handleClickOpenn}
                                    size="large" variant="text"
                                    startIcon={<SearchIcon sx={{ padding: '0px', mr: -0.5, width: 30, height: 30 }} />}
                                >
                                </StyledButton>
                            </Link>
                        </ButtonBox>

                    }
                    {isLogged.state &&
                        <ButtonBox>
                            <Link href="/">

                                <StyledButton
                                    onClick={logoutClicked}
                                    size="large" variant="text"
                                    startIcon={<LogoutIcon sx={{ mr: -0.5, width: 30, height: 30 }} />}
                                >
                                    {md950Up && 'Salir'}
                                </StyledButton>
                            </Link>
                        </ButtonBox>
                    }
                    <ButtonBox>
                        {isLogged.state ?
                            isLogged.admin ?
                                <Link href="/admin/pedidos">
                                    <StyledButton
                                        size="large" variant="text"
                                        startIcon={<ManageAccountsOutlinedIcon sx={{ mr: -0.5, width: 30, height: 30 }} />}
                                    >
                                        {md950Up && 'Panel de administrador'}
                                    </StyledButton>
                                </Link>
                                :
                                <Link href="/user/mis-datos">
                                    <StyledButton
                                        size="large" variant="text"
                                        startIcon={<PermIdentityOutlinedIcon sx={{ mr: -0.5, width: 30, height: 30 }} />}
                                    >
                                        {md950Up && 'Mi cuenta'}
                                    </StyledButton>
                                </Link>
                            :
                            <Link href="/auth">
                                <StyledButton
                                    size="large" variant="text"
                                    startIcon={<LoginIcon sx={{ mr: -0.5, width: 30, height: 30 }} />}
                                >
                                    {md950Up && 'Iniciar sesión'}
                                </StyledButton>
                            </Link>
                        }
                    </ButtonBox>
                    {!isLogged.admin &&
                        <ButtonBox>
                            {cart.length > 0 ?
                                <Link >
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
                                                badgeContent={cartProductsAmount} color="corpGreen">
                                                <ShoppingCartOutlinedIcon sx={{ mr: -0.5, width: 30, height: 30 }} />
                                            </Badge>}
                                    >
                                        {md950Up && 'Carrito'}
                                    </StyledButton>
                                </Link>
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
                                            badgeContent={cartProductsAmount} color="corpGreen">
                                            <ShoppingCartOutlinedIcon sx={{ mr: -0.5, width: 30, height: 30 }} />
                                        </Badge>}
                                >
                                    {md950Up && 'Carrito'}
                                </StyledButton>
                            }
                        </ButtonBox>
                    }
                </Box>

            </Toolbar >

        </>
    )
}

export default SearchToolBar