
import { Box } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../header/Header";
import Footer from "./Footer";

const Layout = ({ children, categories }) => {
    //const matches = useMediaQuery("(min-width:600px)", { color: 'red', });
    //const lgDown = useMediaQuery(theme.breakpoints.down('lg'));


    // console.log(matches)

    return (
        <Box
            sx={{ minWidth: '400px' }}
        >
            <Header categories={categories} />
            <main>
                {children}
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </Box>
    )
}

export default Layout

