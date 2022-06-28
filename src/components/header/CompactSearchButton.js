
import Box from '@mui/system/Box'
import React from "react";
import SearchIcon from '@mui/icons-material/Search';
import SearchForm from './SearchForm'
import { Dialog } from "@mui/material"
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import HeaderButtonBox from "./HeaderButtonBox"


const CompactSearchButton = () => {

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);

    };

    const handleClose = () => {
        setOpen(false);

    };
    return (
        <>
            <HeaderButtonBox onClick={handleClickOpen} IconByProps={SearchIcon} />
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                fullScreen
            >
                <Box
                    sx={{
                        p: '2em', width: '100%', alignSelf: 'center', display: 'flex', justifyContent: 'space-evenly', alignItems: 'center',
                        // bgcolor: 'corpWhite.main',
                        //mt: '-1em', pb: '0.3em'
                    }}
                >
                    <ArrowBackOutlinedIcon
                        sx={{ mr: '1em' }}
                        onClick={handleClose}
                    />
                    <SearchForm handleClose={handleClose} />
                </Box>
            </Dialog>
        </>
    )
}

export default CompactSearchButton