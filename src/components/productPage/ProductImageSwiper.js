
import Box from "@mui/system/Box"
import Button from "@mui/material/Button"
import Image from "next/image"
import React, { useRef, useState } from "react";
import Modal from '@mui/material/Modal';
import HighlightOffTwoToneIcon from '@mui/icons-material/HighlightOffTwoTone';


import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, FreeMode, Scrollbar, Mousewheel } from "swiper";
import { Stack } from "@mui/material";

const style = {
    // position: 'absolute',
    // top: '50%',
    // left: '50%',
    //transform: 'translate(-50%, -50%)',
    width: '100%',
    height: '100%',
    bgcolor: '#B2BABB',
    //  border: '2px solid #000',
    boxShadow: 24,
    //p: 4,
    // display: 'flex',
    //justifyContent: 'center',
};

const ProductImageSwiper = ({ product }) => {



    const [firstImage] = product.images
    const images = [...product.images]


    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const ModalImages = () =>
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <HighlightOffTwoToneIcon
                    color='primary'
                    sx={{
                        position: 'absolute', top: '10px', right: '20px', fontSize: '40px', width: '30 % ', flexShrink: 0
                    }}
                />
                <Stack sx={{ height: '100%', overflow: 'scroll' }} direction='column' spacing={2}>
                    {images.map((image, index) =>
                        <Box key={index}>

                            <img
                                //   objectfit='cover'
                                // height='500px'

                                //src={product.images}
                                src={image}
                                //
                                alt="Imagen de producto"
                            />
                        </Box>

                    )}
                </Stack>





            </Box>
        </Modal>


    return (
        <>
            <ModalImages />
            <Swiper
                onClick={handleOpen}
                pagination={true} modules={[Pagination]} className="mySwiper">
                {images.map((image, index) =>
                    <SwiperSlide>
                        <img src={image} />

                    </SwiperSlide>
                )}


            </Swiper>
        </>


    )
}

export default ProductImageSwiper