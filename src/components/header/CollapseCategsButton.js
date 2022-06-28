

import { styled } from "@mui/system";
import Button from "@mui/material/Button"
import { Box } from "@mui/system";

const StyledButton = styled(Button)({

    flexDirection: 'column',
    fontSize: '1.1rem',
    fontWeight: 'bold',
    height: '100%',
    width: '100%',
    color: "black",
    textTransform: "none",
    marginBottom: '0em'
});

const CollapseCategsButton = ({ onClick, IconComponent, text, value, className, hover }) => {

    // const [isActive, setActive] = useState()
    //console.log(hover)
    return (
        <Box
            className={className}
            sx={{
                display: 'flex', justifyContent: 'flex-start',
                // mr: { md: 2 },
                alignItems: 'center',
                height: '75%',
                border: 1,
                //borderColor: '#fafafa',
                //  outline: '1px solid black',
                borderRight: 0,
                borderRightColor: 'white',
                // mr: { '-1px'},
                // border: 'none',
                // boxShadow: '1px 0px black',

                //Estilo cuando la prop className = 'hover'
                '&.hover': {
                    bgcolor: 'white',
                    borderRightColor: 'white',
                    borderRadius: 0,
                    mr: '-1px',
                    pl: '1px',
                    zIndex: 'tooltip',
                    position: 'relative'
                },
                '&:hover': {
                    bgcolor: 'white',
                    borderRightColor: 'white',
                    borderRadius: 0,
                    mr: '-1px',
                    pl: '1px',
                    zIndex: 'tooltip',
                    position: 'relative'
                    //border: 'none',
                    // boxShadow: '2px -1px white',
                    // borderRight: '2em solid corpGreen.main',
                    //  outline: 'none',
                }
            }}
        >
            <StyledButton
                name={text}
                value={value}
                onClick={onClick}
                // checked={false}
                size="large" variant="text"
                startIcon={<IconComponent sx={{ mr: -0.5, width: 30, height: 30 }} />}
            >
                {text}
            </StyledButton>
        </Box >
    )
}

export default CollapseCategsButton