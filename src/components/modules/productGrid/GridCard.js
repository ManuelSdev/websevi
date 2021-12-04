import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Rating, Typography } from "@mui/material"
import Link from '../../elements/Link'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Box } from "@mui/system";
const GridCard = () => {

    return (
        <Card
        >
            <CardActionArea component={Link} href='/products/productDetailsSection'>

                <CardMedia
                    component="img"
                    //image="https://bucketmoon.s3.eu-west-3.amazonaws.com/1633618930002-vaca.jpg"
                    image='https://img.pccomponentes.com/articles/63/637023/1824-gigabyte-amd-radeon-rx-6600-eagle-8gb-gddr6.jpg'
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

                    <Typography align='center'> Tarjeta gráfica</Typography>
                    <Typography align='center'> 700 €</Typography>
                </CardContent>

            </CardActionArea>
            <CardActions
                sx={{
                    display: 'flex',
                    justifyContent: 'center'
                }}
            >
                <Button sx={{ borderRadius: 8 }}>Añadir al carrito</Button>
                <FavoriteBorderIcon />
                <Link href='/' />
            </CardActions>



        </Card>
    )

}

export default GridCard