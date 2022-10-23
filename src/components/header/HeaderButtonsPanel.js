import Box from '@mui/system/Box'
import React from "react";
import ThirdPartyEmailPassword from 'supertokens-auth-react/recipe/thirdpartyemailpassword'
import LogoutIcon from '@mui/icons-material/Logout';
import ManageAccountsOutlinedIcon from '@mui/icons-material/ManageAccountsOutlined';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import CartButton from './CartButton'
import CompactSearchButton from './CompactSearchButton'
import useBreakpoints from "../../hooks/useBreakpoints"

import { authLogout } from "../../app/store/authSlice"
import { useDispatch, useSelector } from "react-redux"
import { getAuth } from "../../app/store/selectors"
import HeaderButtonBox from "./HeaderButtonBox"
import { toggleUserDrawer } from '../../app/store/drawerSlice';
import UserPageDrawer from './UserPageDrawer';

const HeaderButtonsPanel = () => {

    const { sm750Up, sm750Down } = useBreakpoints()

    const { isLogged, isAdmin } = useSelector(getAuth)
    // const { isOpen } = useSelector(getDrawer)
    const dispatch = useDispatch()
    //TODO REDUX
    //Método logout
    async function logoutClicked() {
        await ThirdPartyEmailPassword.signOut()
        dispatch(authLogout())
    }
    const handleDrawer = () => dispatch(toggleUserDrawer())
    return (
        <>
            <Box
                sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end' }}
            >
                {/**TODO jodido */}            {sm750Down && <CompactSearchButton sm750Up={sm750Up} />}
                {isLogged && sm750Up && <HeaderButtonBox href={'/'} onClick={logoutClicked} IconByProps={LogoutIcon} buttonText={'Salir'} />}
                {isLogged ?
                    isAdmin ?
                        <HeaderButtonBox href={'/admin/pedidos'} IconByProps={ManageAccountsOutlinedIcon} buttonText={'Panel de administrador'} />
                        :
                        <HeaderButtonBox onClick={handleDrawer} IconByProps={PermIdentityOutlinedIcon} buttonText={'Mi cuenta'} />
                    :
                    <HeaderButtonBox href={'/auth'} IconByProps={PermIdentityOutlinedIcon} buttonText={'Mi cuenta'} />
                }
                {!isAdmin && <CartButton />}
            </Box>
            <UserPageDrawer onClose={handleDrawer} />
        </>

    )
}

export default HeaderButtonsPanel
