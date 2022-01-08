
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../header/Header";
import Footer from "./Footer";

const Layout = ({ children, categories }) => {
    const matches = useMediaQuery("(min-width:600px)", { color: 'red', });
    return (
        <>
            <Header categories={categories} />
            <main>
                {children}
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </>
    )
}

export default Layout

