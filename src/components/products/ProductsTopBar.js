

import { Box, Button, Drawer, Paper, Popover, Stack, useMediaQuery, useTheme } from '@mui/material'
import React from 'react'
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import SwapVertOutlinedIcon from '@mui/icons-material/SwapVertOutlined';
import useBreakpoints from "../../hooks/useBreakpoints"
import FiltersBar from '../filtersSideBar/FiltersBar';
import { useState } from 'react';
import { toPlainString } from '../../lib/utils/stringTools';
import { useRouter } from 'next/router';


const sortKeys = ['Relevancia', 'Precio más bajo', 'Precio más alto', 'Novedades']

const ProductsTopBar = ({ handleSort, ...props }) => {
    const router = useRouter();
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

    //const sortKeyToPath=(key)=>
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
                    {sortKeys.map((sortKey, index) =>
                        <Button key={index} variant="outlined"
                            disabled={index === 0 || index === 3}
                            onClick={handleSort(index)}
                            // onClick={() => console.log(index)}
                            sx={{ m: 0 }}
                        >{sortKey}</Button>)
                    }
                    {!md950Up &&
                        <Button sx={{ m: 0 }} variant="outlined" startIcon={<FilterAltOutlinedIcon />}
                            onClick={toggleDrawer}
                        >
                            Filtrar
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
                {sortKeys.map((sortKey, index) => <Button key={index} variant="text"
                    sx={{ m: 0 }}
                >{sortKey}</Button>)
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