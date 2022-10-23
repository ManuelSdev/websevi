
import Button from "@mui/material/Button"
import Box from '@mui/system/Box'
import Link from '../elements/Link'
import React from "react";
import { styled } from "@mui/system";
import { experimental_sx } from "@mui/material"
import useBreakpoints from "../../hooks/useBreakpoints"



const StyledButton = styled(Button)(
    experimental_sx({ minWidth: { xs: '45px', sm: '45px', md: '45px' } }),
    {
        // padding: '0px',
        //minWidth: '45px',
        fontSize: '1.1rem', fontWeight: 'bold', height: '100%', color: "black", textTransform: "none", marginBottom: '0em'
    });

const HeaderButtonBox = ({ href, IconByProps, onClick, buttonText }) => {

    const { md950Up, sm750Up } = useBreakpoints()
    return (
        <Box
            sx={{
                display: 'flex', justifyContent: 'center',
                ml: { md: 2 },
                height: '75%',
                border: 1,
                '&:hover': {
                    borderColor: 'corpGreen.main',
                    borderRadius: 1,
                }
            }}
        >
            {href ?
                <Link href={href}>
                    <StyledButton
                        onClick={onClick}
                        size="large" variant="text"
                        startIcon={<IconByProps sx={{ mr: -0.5, width: 30, height: 30 }} />}
                    >
                        {md950Up && buttonText}
                    </StyledButton>
                </Link>
                :
                <StyledButton
                    onClick={onClick}
                    size="large" variant="text"
                    startIcon={<IconByProps sx={{ mr: -0.5, width: 30, height: 30 }} />}
                >
                    {md950Up && buttonText}
                </StyledButton>
            }

        </Box>
    )
}

export default HeaderButtonBox