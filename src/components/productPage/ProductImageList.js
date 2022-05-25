
import Box from "@mui/system/Box"
import Button from "@mui/material/Button"
import Image from "next/image"
import React from "react"
import ImageList from "@mui/material/ImageList"
import ImageListItem from "@mui/material/ImageListItem"
import Modal from '@mui/material/Modal';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '700px',
    height: '700px',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    //p: 4,
    display: 'flex',
    justifyContent: 'center',
};

const ProductImageList = ({ product }) => {

    const [firstImage] = product.images
    const images = [...product.images]

    const [mainImage, setMainImage] = React.useState(firstImage)

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleMainImage = (image) => ev => {
        ev.preventDefault()
        setMainImage(image)
    }

    const ModalImage = () =>
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Image
                    // width='100%'
                    // height='500px'
                    objectFit='contain'
                    layout='fill'
                    //src={product.images}
                    src={mainImage}
                    //
                    alt="Imagen de producto"
                />
            </Box>
        </Modal>

    return (
        <Box className='holaaaaaaaaaa'>
            <ModalImage />
            <Box
                className='tttttttttttttt'
                disableElevation
                // component={Button}
                onClick={handleOpen}
                sx={{
                    bgcolor: 'white',
                    //display: 'flex',
                    justifyContent: 'center',
                    // width: '527px',
                    height: '527px',
                    position: 'relative'
                }}
            >
                <Image
                    width='100%'
                    height='100%'
                    objectFit='contain'
                    layout='fill'
                    //src={product.images}
                    src={mainImage}
                    alt="Imagen de producto"
                />
            </Box>
            <ImageList
                sx={{
                    width: 527,
                }}
                cols={4} rowHeight={128.75}>
                {images.map((image) => (
                    <ImageListItem key={image} component={Button}
                        sx={{
                            bgcolor: 'white',
                            border: 1,
                            borderColor: 'DarkGrey',
                            borderRadius: 0,
                            '&:hover': {
                                border: 2,
                                borderColor: 'corpGreen.main',
                            }
                        }}
                    >
                        <Image
                            objectFit='contain'
                            layout='fill'
                            //src={product.images}
                            src={image}
                            alt="Imagen de producto"
                            onClick={handleMainImage(image)}
                        />
                    </ImageListItem>
                ))}
            </ImageList>
        </Box>
    )
}

export default ProductImageList