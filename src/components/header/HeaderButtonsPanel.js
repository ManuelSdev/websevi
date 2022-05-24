import Box from '@mui/system/Box'
import React from "react";
import ThirdPartyEmailPassword from 'supertokens-auth-react/recipe/thirdpartyemailpassword'
import LogoutIcon from '@mui/icons-material/Logout';
import LoginIcon from '@mui/icons-material/Login';
import ManageAccountsOutlinedIcon from '@mui/icons-material/ManageAccountsOutlined';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import CartButton from './CartButton'
import CompactSearchButton from './CompactSearchButton'
import useBreakpoints from "../../hooks/useBreakpoints"

import { authLogout } from "../../app/store/authSlice"
import { useDispatch, useSelector } from "react-redux"
import { getAuth } from "../../app/store/selectors"
import HeaderButtonBox from "./HeaderButtonBox"


const HeaderButtonsPanel = () => {

    const { sm750Up } = useBreakpoints()

    const { isLogged, isAdmin } = useSelector(getAuth)

    const dispatch = useDispatch()
    //TODO REDUX
    //Método logout
    async function logoutClicked() {
        await ThirdPartyEmailPassword.signOut()
        dispatch(authLogout())

        // ThirdPartyEmailPassword.redirectToAuth()
    }

    return (
        <Box
            sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end' }}
        >
            {sm750Up || <CompactSearchButton sm750Up={sm750Up} />}
            {isLogged && <HeaderButtonBox href={'/'} onClick={logoutClicked} IconByProps={LogoutIcon} buttonText={'Salir'} />}
            {isLogged ?
                isAdmin ?
                    <HeaderButtonBox href={'/admin/pedidos'} IconByProps={ManageAccountsOutlinedIcon} buttonText={'Panel de administrador'} />
                    :
                    <HeaderButtonBox href={'/user/mis-datos'} IconByProps={PermIdentityOutlinedIcon} buttonText={'Mi cuenta'} />
                :
                <HeaderButtonBox href={'/auth'} IconByProps={LoginIcon} buttonText={'Iniciar sesión'} />
            }
            {!isAdmin && <CartButton />}
        </Box>
    )
}

export default HeaderButtonsPanel