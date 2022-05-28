import IconCorpName from "../elements/IconCorpName"
import Toolbar from "@mui/material/Toolbar"
import Box from '@mui/system/Box'
import React from "react";
import SearchForm from './SearchForm'
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import HeaderButtonsPanel from './HeaderButtonsPanel'
import useBreakpoints from "../../hooks/useBreakpoints"
import HeaderButtonBox from "./HeaderButtonBox"
import { useDispatch, useSelector } from "react-redux"
import { toggleCategDrawer } from '../../app/store/drawerSlice';
import NestedDrawer from "./NestedDrawer";

const WhiteToolBar = ({ handleChangeCollapsed, categories }) => {

    const { md950Up, sm750Up } = useBreakpoints()

    const dispatch = useDispatch()

    const handleDrawer = () => dispatch(toggleCategDrawer())



    return (
        <>
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
                    {sm750Up || <HeaderButtonBox onClick={handleDrawer} IconByProps={DensityMediumIcon} />}

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
                    />

                </Box>
                {sm750Up && <SearchForm />}
                <HeaderButtonsPanel />

            </Toolbar >
            <NestedDrawer onClose={handleDrawer} categories={categories} />
        </>

    )
}

export default WhiteToolBar