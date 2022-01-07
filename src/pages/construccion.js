import { Container } from "@mui/material";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import React, { useRef } from "react";
import Layout from "../components/layouts/Layout";
import { getCategories } from "./api/categories/getCategories";
import revalidateTime from '../lib/utils/revalidateTime'


export default function Construccion({ categories }) {
    const ref = useRef(null);
    React.useEffect(() => {
        import("@lottiefiles/lottie-player");
    });
    return (
        <Layout categories={categories} >
            <Container align='center' sx={{ minHeight: 'calc(100vh - 488.02px)' }} >
                <Typography mt={5} sx={{ fontWeight: 'bold' }} variant='h4' color='primary' >En construcción</Typography>
                <Box sx={{ zIndex: -1500, position: 'relative' }} mb={-1} width='60%'>
                    <lottie-player
                        id="firstLottie"
                        ref={ref}
                        autoplay
                        //controls
                        loop

                        mode="normal"
                        src="https://assets6.lottiefiles.com/packages/lf20_egicfodc.json"
                    //style={{ width: "600px", height: "600px" }}
                    />
                </Box>



            </Container>

        </Layout>

    );
}


export async function getStaticProps(context) {
    //  console.log('CONTEXTT', context.params)

    const categoriesRes = await getCategories()
    const categories = JSON.parse(JSON.stringify(categoriesRes))

    return {
        props: { categories }, // will be passed to the page component as props
    }
    revalidate: revalidateTime,
    
}