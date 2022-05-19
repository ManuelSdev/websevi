
import Box from '@mui/system/Box'
import React from "react";
import SearchIcon from '@mui/icons-material/Search';
import SearchForm from './SearchForm'
import { Dialog } from "@mui/material"
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import HeaderButtonBox from "./HeaderButtonBox"


const CompactSearchButton = () => {

    const [openn, setOpenn] = React.useState(false);

    const handleClickOpenn = () => {
        setOpenn(true);

    };

    const handleClosen = () => {
        setOpenn(false);

    };

    return (
        <>
            <HeaderButtonBox onClick={handleClickOpenn} IconByProps={SearchIcon} />
            <Dialog
                open={openn}
                onClose={handleClosen}
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
                        onClick={handleClosen}
                    />
                    <SearchForm />
                </Box>
            </Dialog>
        </>
    )
}

export default CompactSearchButton