

import { styled } from "@mui/system";
import Button from "@mui/material/Button"
import { Box } from "@mui/system";
import { useState } from "react";

const StyledButton = styled(Button)({
    flexDirection: 'column', fontSize: '1.1rem', fontWeight: 'bold', height: '100%', color: "black", textTransform: "none", marginBottom: '0em'
});

const HeaderButton = ({ onClick, IconComponent, text }) => {

    const [isActive, setActive] = useState()

    return (
        <Box
            sx={{
                display: 'flex', justifyContent: 'center',
                mr: { md: 2 },
                alignItems: 'center',
                height: '75%',
                border: 1,
                '&:hover': {
                    borderColor: 'corpGreen.main',
                    borderRadius: 1,
                }
            }}
        >
            <StyledButton
                name={text}
                onClick={onClick}
                size="large" variant="text"
                startIcon={<IconComponent sx={{ mr: -0.5, width: 30, height: 30 }} />}
            >
                {text}
            </StyledButton>
        </Box >

    )
}

export default HeaderButton