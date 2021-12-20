import React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import MenuList from '@mui/material/MenuList';
import Link from './Link'
import { toPlainString } from '../../lib/utils/stringTools';
export default function DropdownMenu({ categ_1, categories }) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const subCategs = categories.filter(category => category.parent === categ_1.path)

    //console.log('***************', subCategs)
    const handleClick = (event) => {
        subCategs && setAnchorEl(event.currentTarget);
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
                //disableElevation='true'
                href={`/${toPlainString(categ_1.path)}`}
                // id="basic-button"
                aria-controls="basic-menu"
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onPointerEnter={handleClick}
                onPointerLeave={handleClose}
                onClick={handleClose}
                sx={{
                    color: 'black',
                    '& :hover': {
                        color: "white",
                    },
                }}

            >
                <Typography
                    textAlign="center"
                    variant='h6'


                >
                    {categ_1.name.toUpperCase()}
                </Typography>


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
                    {subCategs.map(subCateg =>

                        <MenuItem
                            key={subCateg._id}

                            component={Link}
                            // href={`/${toPlainString(categ_1._id)}/${toPlainString(subCateg._id)}`}
                            href={`/${toPlainString(subCateg.path)}`}
                            onPointerEnter={handleAnchorEl}
                            onClick={handleClose}
                            sx={{
                                pointerEvents: 'auto',
                            }}
                        >
                            {subCateg.name}
                        </MenuItem>



                    )}
                </MenuList>

            </Menu>
        </div >
    );
}

/*
        <NestedMenuItems
                            label={subCateg.name}
                        >
                            {subCateg.childNames.map(categ_3_name =>
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