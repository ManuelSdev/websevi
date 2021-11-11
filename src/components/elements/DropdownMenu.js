import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Typography } from '@mui/material';
import Link from './Link'

export default function BasicMenu({ href, title, subCategs }) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleAnchorEl = () => {
        setAnchorEl(anchorEl)
    }

    return (
        <div>
            <Link
                href={href}
                id="basic-button"
                aria-controls="basic-menu"
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onPointerEnter={handleClick}
                onPointerLeave={handleClose}
            >
                {title}
            </Link>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}

                // onClose={handleClose}
                //Esto es lo aque anula los eventos del backdrop
                //El & anula las clases internas o de elementos internos
                //https://mui.com/customization/how-to-customize/#overriding-nested-component-styles
                //No lo uso porque voy a pasar la misma propiedad directamente al Paper component con PaperProps
                sx={{
                    pointerEvents: 'none',
                    /*
                    '& .MuiMenu-paper': {
                        pointerEvents: 'auto',
                    },
                    */
                }}

                //El componente Menu usa el componente Popover: puede usar sus props. PaperProps es una prop de Popover
                //https://stackoverflow.com/questions/52752466/how-do-i-style-the-material-ui-menu-popover-with-jss
                PaperProps={{
                    onPointerEnter: handleAnchorEl,
                    onPointerLeave: handleClose,
                    style: {
                        pointerEvents: 'auto'
                    }
                }}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',

                }}
            >
                {subCategs.map(subCateg =>
                    <MenuItem
                        component={Link}
                        href={subCateg.href}
                        onPointerEnter={handleAnchorEl}
                        onClick={handleClose}
                        sx={{
                            pointerEvents: 'auto',
                        }}
                    >
                        {subCateg.name}
                    </MenuItem>
                )}


            </Menu>
        </div >
    );
}

