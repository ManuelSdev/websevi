import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Rating from '@mui/material/Rating';
import SvgIcon from '@mui/material/SvgIcon';
import Typography from '@mui/material/Typography';


import Box from "@mui/system/Box";


const ProductDetails = ({ product }) => {

    return (
        <Box sx={{ flexGrow: 1, background: "white" }}>

            <Typography
                sx={{ fontWeight: 'bold' }}

                variant="h6"
                component="div"

            >
                {product.name}
            </Typography>
            <Typography
                sx={{ fontWeight: 'bold' }}
                color='corpGreen.main'
                gutterBottom
                variant="h3"
                component="div"

            >
                {product.price} €
            </Typography>
            <Box sx={{
                display: 'flex',
                flexDirection: 'row',
            }}>
                <Rating
                    sx={{ mr: 5 }}
                    defaultValue={2.5}
                    precision={0.5} />

                <Typography gutterBottom >30 Valoraciones </Typography>
            </Box>
            <Box sx={{
                display: 'flex',
                flexDirection: 'row',
            }}>
                <Typography
                    sx={{ fontWeight: 'bold', mr: 5 }}>Marca :</Typography>
                <Typography gutterBottom>{product.brand} </Typography>
            </Box>
            <Box sx={{
                display: 'flex',
                flexDirection: 'row',
            }}>
                <Typography sx={{ fontWeight: 'bold', mr: 5 }}>EAN: </Typography>
                <Typography gutterBottom>56464646 </Typography>
            </Box>


            <Box marginBottom='dense' variant="contained">
                <Button >

                    <SvgIcon>
                        <svg ><path d="M19 13H5v-2h14v2z"></path></svg>

                    </SvgIcon>
                </Button>

                <TextField
                    sx={{
                        width: "5ch",


                    }}
                    size="small"
                    defaultValue="a"
                    id="outlined-basic"
                    variant="outlined" />
                <Button >
                    <SvgIcon>
                        <svg  ><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path></svg>

                    </SvgIcon>
                </Button>
            </Box>


            <Box>
                <Button >Añadir al carrito</Button>
            </Box>
            <Box>
                <Button >Fav</Button>
            </Box>
            <Box>
                <Button >Añadir a lista de deseos</Button>
            </Box>


        </Box >

    )
}

export default ProductDetails