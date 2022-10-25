import Container from "@mui/material/Container"
import Grid from "@mui/material/Grid"
import Box from "@mui/system/Box"
import useMediaQuery from "@mui/material/useMediaQuery"
import { Paper, useTheme } from "@mui/material"
import useBreakpoints from "../../hooks/useBreakpoints"



const SidebarLayout = ({ content, sidebar, elevationPaper }) => {

    const theme = useTheme();
    const up = useMediaQuery(theme.breakpoints.up('900'));
    const down = useMediaQuery(theme.breakpoints.down('900'));
    const { md950Up, sm750Down } = useBreakpoints()
    //console.log(content.props)
    return (
        <Container sx={{ minHeight: 'calc(100vh - 488.02px)' }} >
            <Box sx={{ mt: 5, mb: 10, flexGrow: 1 }}>
                <Grid container spacing={2}>
                    {
                        md950Up &&
                        <Grid item md={3} lg={3} >
                            {sidebar}
                        </Grid>
                    }

                    <Grid item xs={12} sm={12} md={9} lg={9} >
                        {content.props.orders ?
                            content
                            :
                            <Paper elevation={elevationPaper} sx={{ p: 2, pt: 0 }}>
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