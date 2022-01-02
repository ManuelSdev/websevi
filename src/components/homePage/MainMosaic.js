import Grid from "@mui/material/Grid"
import Paper from "@mui/material/Paper"
import Typography from "@mui/material/Typography"
import Box from "@mui/system/Box"
//import Image from "next/dist/client/image"
import Image from "next/image"
import tr from '../../assets/images/banners/tr.png'
import msi from '../../assets/images/banners/msi.png'
import nvidia from '../../assets/images/banners/nvidia.png'
const MainMosaic = () => {

    return (
        <Box mb={5} sx={{ flexGrow: 1, background: "green" }}>
            <Grid container rowSpacing={0}>
                <Grid item xs={12}  >
                    <Paper
                        sx={{
                            color: "white",
                            background: 'linear-gradient(-45deg, rgba(34,193,195,1) 0%, rgba(0,0,0,1) 79%)',
                            display: 'block'
                        }}
                    >
                        <Box>
                            <Image

                                src={tr}
                            >

                            </Image>
                        </Box>
                    </Paper>
                </Grid>
                <Grid item xs={6} >
                    <Paper square
                        sx={{ backgroundColor: 'grey.600', height: '350px' }}
                    >

                    </Paper>
                </Grid>
                <Grid item xs={6}  >
                    <Paper square
                        sx={{ backgroundColor: 'grey.400', }}
                    >
                        <Box>
                            <Image

                                src={nvidia}
                            >

                            </Image>
                        </Box>
                    </Paper>
                </Grid>

            </Grid>
        </Box >
    )
}

export default MainMosaic