import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import React from 'react';
import Box from "@mui/system/Box";

const ProductInfo = ({ product }) => {

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
                <Typography gutterBottom>{product.Marca} </Typography>
            </Box>
            <Box sx={{
                display: 'flex',
                flexDirection: 'row',
            }}>
                <Typography sx={{ fontWeight: 'bold', mr: 5 }}>EAN: </Typography>
                <Typography gutterBottom>56464646 </Typography>
            </Box>
        </Box >
    )
}

export default ProductInfo