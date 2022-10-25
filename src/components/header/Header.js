import AppBar from "@mui/material/AppBar"
import Toolbar from "@mui/material/Toolbar"
import Box from '@mui/system/Box'
import DropdownMenu from '../elements/DropdownMenu'


import React, { useState } from "react"
import WhiteToolBar from './WhiteToolBar'


import CollapsedCategs from "./CollapsedCategs"
import useBreakpoints from "../../hooks/useBreakpoints"
import { useSelector } from "react-redux"
import { getAuth } from "../../app/store/selectors"
import BlackToolbar from "./BlackToolbar"


const Header = ({ categories, mdUp }) => {

    const { sm750Up } = useBreakpoints()
    const { isLogged } = useSelector(getAuth)
    const [{ childs: initialChilds }] = categories
    const [isCollapsed, setCollapsed] = useState(false)
    const [selectedCategoryChilds, setSelectedCategoryChilds] = useState([])

    /*
        useEffect(() => {
            //  setSelectedValue(0)
            console.log('daleeeeeeeeeeeeee')
            setSelectedCategoryChilds(initialChilds)
        }, [])
        */
    //CLAVE
    const handleChangeCollapsed = () => {
        //console.log(categories)
        // isCollapsed || setClassName('hover')
        isCollapsed || setSelectedCategoryChilds(initialChilds)

        setCollapsed((prev) => !prev);

        // action()
    };

    return (
        <>
            <AppBar position="sticky"
            // sx={{ minWidth: 400 }}
            >
                <BlackToolbar />
                <WhiteToolBar handleChangeCollapsed={handleChangeCollapsed} categories={categories} />
                {sm750Up &&
                    <Toolbar
                        sx={{
                            // bgcolor: 'corpGreen.main',
                            bgcolor: 'corpGreen.main',
                            justifyContent: 'center',
                            color: "corpWhite.main",
                        }}
                    >
                        {categories.length > 0 && categories.map(category =>
                            category.level === 1 &&
                            <Box key={category._id}
                                sx={{
                                    p: 1, m: 1,
                                }}>
                                <DropdownMenu categ_1={category} categories={categories}></DropdownMenu>
                            </Box>
                        )}
                    </Toolbar>
                }
            </AppBar >
            <CollapsedCategs
                categories={categories}
                isCollapsed={isCollapsed}
                setCollapsed={setCollapsed}

                selectedCategoryChilds={selectedCategoryChilds}
                setSelectedCategoryChilds={setSelectedCategoryChilds}
            ></CollapsedCategs>
        </>
    )
}

export default Header
