import { Box, Typography } from "@mui/material";
import React, { useRef } from "react";

export default function Working() {
    const ref = useRef(null);
    React.useEffect(() => {
        import("@lottiefiles/lottie-player");
    });
    return (
        <Box mb={-3} sx={{ width: '70%', zIndex: -1500 }} >
            <Typography align='center' variant='h5' sx={{ fontWeight: 'bold' }}>En construcción</Typography>
            <lottie-player
                id="firstLottie"
                ref={ref}
                autoplay
                //controls
                loop
                mode="normal"
                src="https://assets6.lottiefiles.com/packages/lf20_egicfodc.json"
            //style={{ width: "600px", height: "600px" }}
            ></lottie-player>
        </Box>


    );
}