import Badge from "@mui/material/Badge"
import InputAdornment from "@mui/material/InputAdornment"
import TextField from "@mui/material/TextField"
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircle from "@mui/icons-material/AccountCircle"
import IconCorpName from "../elements/IconCorpName"
import Toolbar from "@mui/material/Toolbar"
import Button from "@mui/material/Button"
import Box from '@mui/system/Box'
import Link from '../elements/Link'
import React from "react";
import ThirdPartyEmailPassword from 'supertokens-auth-react/recipe/thirdpartyemailpassword'

import { useAppContext } from "../context";
import { useRouter } from "next/router";
import { styled } from "@mui/system";
import Typography from "@mui/material/Typography";
import { sum } from "../../lib/utils/sum";
import useForm from "../../hooks/useForm";

import { searchProducts } from "../../lib/api/product";
import { IconButton } from "@mui/material";
import LogoutIcon from '@mui/icons-material/Logout';
import LoginIcon from '@mui/icons-material/Login';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import PersonIcon from '@mui/icons-material/Person';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import ManageAccountsOutlinedIcon from '@mui/icons-material/ManageAccountsOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
/*
const StyledButton = styled(Button)(
    `text-transform: none;`,

);
*/
const StyledButton = styled(Button)({
    fontSize: '1.1rem', fontWeight: 'bold', height: '100%', color: "black", textTransform: "none"
});


const SearchToolBar = () => {
    const router = useRouter()
    //console.log('@@@@@@@@@@@@@@@@@@@@', useAppContext)
    const { setIsLogged, isLogged, cart } = useAppContext()
    const [cartProductsAmount, setCartProductsAmount] = React.useState(0)
    const { formValue, handleChange, handleSubmit, validate, setFormValue } = useForm({
        searchKeys: ''
    })

    const { searchKeys } = formValue

    const onSubmit = async () => {
        console.log('*------------', searchKeys)
        // const params = new URLSearchParams(formValue)
        //router.push(`/buscar/?${params.toString()}`)

        //const resolved = await searchProducts(formValue)
        //resolved && mutate()
        // console.log("resolved", resolved)
        //   mutate(`/api/users/getUser/${authId}`, updatedRes, false)

        router.push(`/buscar/${searchKeys}`)

    }
    //Método logout
    async function logoutClicked() {
        await ThirdPartyEmailPassword.signOut()
        setIsLogged({ state: false, admin: false, authId: '' })
        // ThirdPartyEmailPassword.redirectToAuth()
    }
    React.useEffect(() => {
        //console.log('USE TOOLBAR cart ', cart)
        //  console.log('PRODUCTOS EN EL CARRO USE', cart)
        if (cart.length > 0) {
            //localStorage.setItem("cart", JSON.stringify(cart));
            //   console.log('if ok')
            const amountOfEachProduct = cart.map(product => product.amount)
            //  console.log('PRODUCTOS amount carro', amountOfEachProduct)
            //https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Functions/rest_parameters


            //https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Spread_syntax
            const totalProductsAmount = sum(...amountOfEachProduct)
            setCartProductsAmount(totalProductsAmount)
        }
    }, [cart])



    return (
        <Toolbar

            sx={{
                //borderRadius: "80px",

                bgcolor: 'corpWhite.main',
                justifyContent: 'space-between',
                height: "5em",
                //color: "corpBlack.main"
            }}
        >
            <IconCorpName viewBox="0 0 381.17 68.88"

                sx={{ fill: "blue", height: "100%", fontSize: 250 }}
            >
            </IconCorpName>
            <Box
                component='form'
                onSubmit={handleSubmit(onSubmit)}
                sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
                <TextField
                    required
                    sx={{ width: "75%" }}
                    id="standard-basic"
                    label="Buscar en el catálogo"
                    variant="standard"
                    color="corpGreen"
                    name='searchKeys'
                    value={searchKeys}
                    onChange={handleChange}
                    InputProps={{
                        endAdornment:
                            <InputAdornment
                                position="start"
                            >
                                <IconButton
                                    type='submit'
                                >
                                    <SearchIcon />
                                </IconButton>
                            </InputAdornment>,
                    }}
                />
            </Box>
            {isLogged.state &&
                <Box
                    sx={{
                        mr: 2,
                        height: '75%',
                        border: 1,
                        '&:hover': {
                            borderColor: 'corpGreen.main',
                            borderRadius: 1,
                        }
                    }}
                >
                    <Link href="/">
                        <StyledButton
                            onClick={logoutClicked}
                            size="large" variant="text"
                            // sx={{ fontSize: '1.1rem', height: '100%', color: "black", textTransform: "none" }}
                            startIcon={<LogoutIcon sx={{ mr: -0.5, width: 30, height: 30 }} />}
                        >
                            Salir
                        </StyledButton>
                    </Link>
                </Box>
            }
            <Box
                sx={{
                    mr: 2,
                    height: '75%',
                    border: 1,
                    '&:hover': {
                        borderColor: 'corpGreen.main',
                        borderRadius: 1,
                    }
                }}
            >
                {isLogged.state ?
                    isLogged.admin ?
                        <Link href="/admin/pedidos">
                            <StyledButton
                                //TODO: limpia todos los sx tapados
                                size="large" variant="text"
                                //  sx={{ fontSize: '1.1rem', fontWeight: 'bold', height: '100%', color: "black", textTransform: "none" }}
                                startIcon={<ManageAccountsOutlinedIcon sx={{ mr: -0.5, width: 30, height: 30 }} />}
                            >
                                Panel de administrador
                            </StyledButton>
                        </Link>
                        :
                        <Link href="/user/mis-datos">
                            <StyledButton

                                size="large" variant="text"
                                // sx={{ fontSize: '1.1rem', fontWeight: 'bold', height: '100%', color: "black", textTransform: "none" }}
                                startIcon={<PermIdentityOutlinedIcon sx={{ mr: -0.5, width: 30, height: 30 }} />}
                            >
                                Mi cuenta
                            </StyledButton>
                        </Link>
                    :
                    <Link href="/auth">
                        <StyledButton

                            size="large" variant="text"
                            // sx={{ fontSize: '1.1rem', fontWeight: 'bold', height: '100%', color: "black", textTransform: "none" }}
                            startIcon={<LoginIcon sx={{ mr: -0.5, width: 30, height: 30 }} />}
                        >
                            Iniciar sesión
                        </StyledButton>
                    </Link>
                }
            </Box>

            {!isLogged.admin &&
                <Box
                    sx={{
                        height: '75%',
                        border: 1,
                        '&:hover': {
                            borderColor: 'corpGreen.main',
                            borderRadius: 1,
                        }
                    }}
                >

                    <Link href="/carrito">
                        <StyledButton
                            //onClick={customRouterPush('/href')}
                            size="large" variant="text"
                            //  sx={{ fontSize: '1.1rem', fontWeight: 'bold', height: '100%', width: '100%', color: "black", textTransform: "none" }}
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
                            Carrito
                        </StyledButton>
                    </Link>
                </Box>
            }
        </Toolbar >

    )
}

export default SearchToolBar