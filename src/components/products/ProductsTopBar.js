

import { Box, Button, Drawer, Paper, Popover, Stack, useMediaQuery, useTheme } from '@mui/material'
import React from 'react'
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import SwapVertOutlinedIcon from '@mui/icons-material/SwapVertOutlined';
import useBreakpoints from "../../hooks/useBreakpoints"
import FiltersBar from '../filtersSideBar/FiltersBar';
import { useState } from 'react';


const titles = ['Relevancia', 'Precio más bajo', 'Precio más alto', 'Novedades']

const ProductsTopBar = ({ ...props }) => {

    const theme = useTheme();
    const { md950Up, sm750Down } = useBreakpoints()
    const [isOpen, setIsOpen] = useState(false)
    const up850 = useMediaQuery(theme.breakpoints.up('850'));
    const toggleDrawer = () => setIsOpen(!isOpen)

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return (
        <Paper sx={{
            //  p: 2,
            //   display: 'flex', alignItems: 'center'
        }}>
            <Box

                sx={{
                    p: 2,
                    display: 'flex',
                    justifyContent: 'space-evenly',
                    alignItems: 'flex-end'
                }}


            >{up850 ?

                <>
                    {titles.map((title, index) => <Button key={index} variant="outlined"
                        sx={{ m: 0 }}
                    >{title}</Button>)
                    }
                    {!md950Up &&
                        <Button sx={{ m: 0 }} variant="outlined" startIcon={<FilterAltOutlinedIcon />}
                            onClick={toggleDrawer}
                        >
                            Filtrars
                        </Button>
                    }
                </>
                :
                <>
                    <Button sx={{ m: 0 }} variant="outlined" startIcon={<SwapVertOutlinedIcon />}
                        onClick={handleClick}
                    >
                        Ordenar
                    </Button>
                    <Button sx={{ m: 0 }} variant="outlined" startIcon={<FilterAltOutlinedIcon />}
                        onClick={toggleDrawer}
                    >
                        Filtrar
                    </Button>
                </>


                }

            </Box>
            <Popover
                sx={{

                }}
                PaperProps={{
                    style: {
                        justifyContent: 'center',
                        flexDirection: 'column',
                        display: 'flex',
                    }

                }}
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
            >
                {titles.map((title, index) => <Button key={index} variant="text"
                    sx={{ m: 0 }}
                >{title}</Button>)
                }
            </Popover>
            <Drawer
                anchor={'right'}
                open={isOpen}
                onClose={toggleDrawer}
            >
                <FiltersBar
                    toggleDrawer={toggleDrawer}
                    {...props}
                />
            </Drawer>

        </Paper >
    )
}

export default ProductsTopBar