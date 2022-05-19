
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
import Modal from '../cart/Modal'

import Searcher from './SearchForm'
import { Dialog } from "@mui/material"
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import CompactSearchButton from './CompactSearchButton'
import useBreakpoints from "../../hooks/useBreakpoints"

import { authLogout } from "../../app/store/authSlice"

import { useDispatch, useSelector } from "react-redux"
import { getAuth, getCart, getCartVolume } from "../../app/store/selectors"


const StyledButton = styled(Button)(
    experimental_sx({ minWidth: { xs: '45px', sm: '45px', md: '45px' } }),
    {
        // padding: '0px',
        //minWidth: '45px',
        fontSize: '1.1rem', fontWeight: 'bold', height: '100%', color: "black", textTransform: "none", marginBottom: '0em'
    });

const HeaderButtonBox = ({ href, IconByProps, onClick, buttonText }) => {

    const { md950Up, sm750Up } = useBreakpoints()
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
            {href ?
                <Link href={href}>
                    <StyledButton
                        onClick={onClick}
                        size="large" variant="text"
                        startIcon={<IconByProps sx={{ mr: -0.5, width: 30, height: 30 }} />}
                    >
                        {md950Up && buttonText}
                    </StyledButton>
                </Link>
                :
                <StyledButton
                    onClick={onClick}
                    size="large" variant="text"
                    startIcon={<IconByProps sx={{ mr: -0.5, width: 30, height: 30 }} />}
                >
                    {md950Up && buttonText}
                </StyledButton>
            }

        </Box>
    )
}

export default HeaderButtonBox