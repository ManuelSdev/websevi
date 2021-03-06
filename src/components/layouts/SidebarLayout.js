import Container from "@mui/material/Container"
import Grid from "@mui/material/Grid"
import Box from "@mui/system/Box"
import useMediaQuery from "@mui/material/useMediaQuery"
import { Paper, useTheme } from "@mui/material"



const SidebarLayout = ({ content, sidebar, elevationPaper }) => {

    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('md'));
    console.log(content.props)
    return (
        <Container sx={{ minHeight: 'calc(100vh - 488.02px)' }} >
            <Box sx={{ mt: 5, mb: 10, flexGrow: 1 }}>
                <Grid container spacing={2}>
                    {
                        matches &&
                        <Grid item md={3} lg={3} >
                            {sidebar}
                        </Grid>
                    }

                    <Grid item xs={12} sm={12} md={9} lg={9} >
                        {content.props.orders ?
                            content
                            :
                            <Paper elevation={elevationPaper} sx={{ p: 2, pt: 1.5 }}>
                                {content}
                            </Paper>
                        }


                    </Grid>

                </Grid>
            </Box>
        </Container>

    )
}
export default SidebarLayout