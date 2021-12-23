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

import { useAppContext } from "../context";
import { useRouter } from "next/router";
import { styled } from "@mui/system";
import Typography from "@mui/material/Typography";
import { sum } from "../../lib/utils/sum";
const StyledButton = styled(Button)(`
  text-transform: none;
`);

const FirstToolBar = () => {

    //console.log('@@@@@@@@@@@@@@@@@@@@', useAppContext)
    const { isLogged, cart } = useAppContext()
    const [cartProductsAmount, setCartProductsAmount] = React.useState(0)

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
            ></IconCorpName>
            <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
                <TextField
                    sx={{ width: "75%" }}
                    id="standard-basic"
                    label="Buscar en el catálogo"
                    variant="standard"
                    color="corpGreen"
                    InputProps={{
                        endAdornment:
                            <InputAdornment position="start">
                                <SearchIcon></SearchIcon>
                            </InputAdornment>,
                    }}
                />
            </Box>

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
                        <Link href="/admin">
                            <StyledButton

                                size="large" variant="text"
                                sx={{ fontSize: '1.1rem', fontWeight: 'bold', height: '100%', color: "black", textTransform: "none" }}
                                startIcon={<AccountCircle sx={{ mr: -0.5, width: 30, height: 30 }} />}
                            >
                                Dashboard
                            </StyledButton>
                        </Link>
                        :
                        <Link href="/auth">
                            <StyledButton

                                size="large" variant="text"
                                sx={{ fontSize: '1.1rem', fontWeight: 'bold', height: '100%', color: "black", textTransform: "none" }}
                                startIcon={<AccountCircle sx={{ mr: -0.5, width: 30, height: 30 }} />}
                            >
                                Mi cuenta
                            </StyledButton>
                        </Link>
                    :
                    <Link href="/auth">
                        <StyledButton

                            size="large" variant="text"
                            sx={{ fontSize: '1.1rem', fontWeight: 'bold', height: '100%', color: "black", textTransform: "none" }}
                            startIcon={<AccountCircle sx={{ mr: -0.5, width: 30, height: 30 }} />}
                        >
                            Iniciar sesión
                        </StyledButton>
                    </Link>
                }


            </Box>

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
                {isLogged.admin ||
                    <Link href="/carrito">
                        <StyledButton

                            //onClick={customRouterPush('/href')}
                            size="large" variant="text"
                            sx={{ fontSize: '1.1rem', fontWeight: 'bold', height: '100%', width: '100%', color: "black", textTransform: "none" }}
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
                                    <ShoppingCartIcon sx={{ mr: -0.5, width: 30, height: 30 }} />
                                </Badge>}
                        >
                            Carrito
                        </StyledButton>
                    </Link>
                }


            </Box>

        </Toolbar >

    )
}

export default FirstToolBar