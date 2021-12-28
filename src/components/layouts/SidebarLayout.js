import Container from "@mui/material/Container"
import Grid from "@mui/material/Grid"
import Box from "@mui/system/Box"



const SidebarLayout = ({ content, sidebar }) => {








    return (
        <Container>
            <Box sx={{ mt: 5, flexGrow: 1, background: "green" }}>
                <Grid container spacing={2}>
                    <Grid item xs={6} sm={4} md={3} lg={3} >
                        {sidebar}
                    </Grid>
                    <Grid item xs={6} sm={4} md={3} lg={9} >
                        {content}
                    </Grid>

                </Grid>
            </Box>
        </Container>

    )
}
export default SidebarLayout