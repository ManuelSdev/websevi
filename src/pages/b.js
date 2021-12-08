import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
import IconButton from "@mui/material/IconButton"

import { AdbIcon, NewIcon, ArrowRightIcon, ArrowDownIcon, FlutterDashIcon, SaveAsIcon, SaveIcon, ImportExportRoundedIcon } from '@mui/icons-material';
import Box from '@mui/system/Box';
import React from 'react';
import IconMenuItem from 'mui-nested-menu/build/IconMenuItem';
var NestedMenuItem = require('mui-nested-menu');
//import IconMenuItem from 'mui-nested-menu/build/IconMenuItem';
import { Button, Menu, MenuItem } from '@mui/material';


export default function B() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => setAnchorEl(event.currentTarget);
    const handleClose = () => setAnchorEl(null);
    console.log(NestedMenuItem)
    return (
        <div>
            <Button variant='contained' onClick={handleClick} endIcon={<ArrowDownIcon />}>
                Click Me!
            </Button>
            <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
                <NestedMenuItem
                    leftIcon={<AdbIcon />}
                    rightIcon={<FlutterDashIcon />}
                    label={'Top Level'}
                    parentMenuOpen={open}
                >
                    <MenuItem onClick={handleClose}>Standard Menu Item!</MenuItem>

                </NestedMenuItem>
            </Menu>
        </div>
    );
}