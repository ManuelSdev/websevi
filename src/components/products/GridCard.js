import Button from "@mui/material/Button"
import Card from "@mui/material/Card"
import CardActionArea from "@mui/material/CardActionArea"
import CardActions from "@mui/material/CardActions"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import Rating from "@mui/material/Rating"
import Typography from "@mui/material/Typography"



import Link from '../elements/Link'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Box from "@mui/system/Box";
import { nameToUrl } from "../../lib/utils/stringTools";
const GridCard = ({ product }) => {

    const [mainImage] = product.images
    return (
        <Card elevation={0}
        >
            <CardActionArea component={Link} href={`/product/${product.url}`}>

                <CardMedia
                    component="img"
                    //image="https://bucketmoon.s3.eu-west-3.amazonaws.com/1633618930002-vaca.jpg"
                    //image='https://img.pccomponentes.com/articles/63/637023/1824-gigabyte-amd-radeon-rx-6600-eagle-8gb-gddr6.jpg'
                    //  image={product.images}
                    image={mainImage}
                    alt="Paella dish"
                />
                <CardContent
                >
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'center'
                        }}
                    >
                        {/**https://mui.com/components/rating/ */}
                        <Rating defaultValue={2.5} precision={0.5}></Rating>

                    </Box>

                    <Typography align='center'> {product.name}</Typography>
                    <Typography align='center'> {product.price} €</Typography>
                </CardContent>

            </CardActionArea>
            {/**
            TODO: borra
  <CardActions
                sx={{
                    display: 'flex',
                    justifyContent: 'center'
                }}
            >
                <Button sx={{ borderRadius: 8 }}
                // onClick={addToCart}
                >Añadir al carrito</Button>
                <FavoriteBorderIcon />
                <Link href='/' />
            </CardActions>
             */}




        </Card>
    )

}

export default GridCard