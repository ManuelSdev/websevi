import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { MenuList, Popover, Typography } from '@mui/material';
import Link from './Link'
//import SubDropdownMenu from './SubDropdownMenu'
//import { NestedMenuItems } from 'mui-nested-menu'
import toPlainString from '../../lib/utils/plainString';

export default function DropdownMenu({ categ_1, categs }) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const categs_2 = categs.filter(categ_2 => categ_2.level === 2 && categ_2.path === `,${categ_1._id},`)
    const handleClick = (event) => {
        categs_2 && setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleAnchorEl = () => {
        setAnchorEl(anchorEl)
    }
    //const categNavbarName = categ_1.name.toUpperCase()
    //console.log('uuuuuuuuuuuuuiiiiiiiiiiiiiiiiii,', categ_1)
    return (
        <div>
            <Link
                href={`/categories/${toPlainString(categ_1._id)}`}
                id="basic-button"
                aria-controls="basic-menu"
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onPointerEnter={handleClick}
                onPointerLeave={handleClose}
                onClick={handleClose}
            >
                {categ_1.name.toUpperCase()}
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
                <MenuList
                    autoFocusItem={open}
                    id="composition-menu"
                    aria-labelledby="composition-button"
                >
                    {categs_2.map(categ_2 =>

                        <MenuItem
                            key={categ_2._id}

                            component={Link}
                            href={`/categories/${toPlainString(categ_1._id)}/${toPlainString(categ_2._id)}`}
                            onPointerEnter={handleAnchorEl}
                            onClick={handleClose}
                            sx={{
                                pointerEvents: 'auto',
                            }}
                        >
                            {categ_2.name}
                        </MenuItem>



                    )}
                </MenuList>

            </Menu>
        </div >
    );
}

/*
        <NestedMenuItems
                            label={categ_2.name}
                        >
                            {categ_2.childNames.map(categ_3_name =>
                                <MenuItem>
                                    {categ_3_name}
                                </MenuItem>
                            )}
                        </NestedMenuItems>


                                  <Popover
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                            >
                                The content of the Popover.
                            </Popover>
                        */