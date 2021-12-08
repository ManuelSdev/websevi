import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
import IconButton from "@mui/material/IconButton"

import AdbIcon from '@mui/icons-material/Adb';
import Box from '@mui/system/Box';
import React from 'react';
import NestedMenuItem from 'mui-nested-menu/build/NestedMenuItem';
import { Button, Menu, MenuItem } from '@mui/material';


const CategoriesButton = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => console.log(event.currentTarget);
    const handleClose = () => setAnchorEl(null);
    return (
        <>
            <Box
                sx={{ flexGrow: 1 }}

            >
                <IconButton
                    onClick={handleClick}
                    //size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"

                // sx={{ mr: 4 }}
                >
                    <MenuIcon sx={{ fontSize: 35 }} />
                    <Typography sx={{ ml: 1 }} variant="h6" component="icon" >
                        Categorías
                    </Typography>
                </IconButton>

            </Box>


            <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>

                <NestedMenuItem
                    // leftIcon={<AdbIcon />}
                    // rightIcon={<FlutterDashIcon />}
                    label={'Top Level'}
                    parentMenuOpen={open}
                >
                    <MenuItem onClick={handleClose}>Standard Menu Item!</MenuItem>

                    <NestedMenuItem
                        //leftIcon={<AdbIcon />}
                        //rightIcon={<ArrowRightIcon />}
                        label={'Go deeper!'}
                        parentMenuOpen={open}
                    >
                        <MenuItem onClick={handleClose}>Standard Menu Item!</MenuItem>

                    </NestedMenuItem>
                </NestedMenuItem>




            </Menu>
        </>
    )

}

export default CategoriesButton

/*
                <NestedMenuItem
                    leftIcon={<AdbIcon />}
                    // rightIcon={<FlutterDashIcon />}
                    label={'Top Level'}
                    parentMenuOpen={open}
                >
                    <MenuItem onClick={handleClose}>Standard Menu Item!</MenuItem>
                    <IconMenuItem
                        onClick={handleClose}
                        leftIcon={<NewIcon />}
                        //   rightIcon={<SaveIcon />}
                        label={'Icon Menu Item'}
                    />
                    <NestedMenuItem
                        leftIcon={<AdbIcon />}
                        //rightIcon={<ArrowRightIcon />}
                        label={'Go deeper!'}
                        parentMenuOpen={open}
                    >
                        <MenuItem onClick={handleClose}>Standard Menu Item!</MenuItem>
                        <IconMenuItem
                            onClick={handleClose}
                            leftIcon={<AdbIcon />}
                            //rightIcon={<SaveIcon />}
                            label={'Icon Menu Item'}
                        />
                    </NestedMenuItem>
                </NestedMenuItem>

                */