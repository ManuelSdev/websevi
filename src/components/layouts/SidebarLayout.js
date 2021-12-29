import Container from "@mui/material/Container"
import Grid from "@mui/material/Grid"
import Box from "@mui/system/Box"
import useMediaQuery from "@mui/material/useMediaQuery"
import { useTheme } from "@mui/material"



const SidebarLayout = ({ content, sidebar }) => {

    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('md'));






    return (
        <Container>
            <Box sx={{ mt: 5, flexGrow: 1, background: "green" }}>
                <Grid container spacing={2}>
                    {
                        matches &&
                        <Grid item md={3} lg={3} >
                            {sidebar}
                        </Grid>
                    }

                    <Grid item xs={12} sm={12} md={9} lg={9} >
                        {content}
                    </Grid>

                </Grid>
            </Box>
        </Container>

    )
}
export default SidebarLayout