import { useRouter } from "next/router"
import Layout from "../../components/layouts/Layout"
import Container from "@mui/material/Container"
import Grid from "@mui/material/Grid"
import ProfileBar from "../../components/elements/ProfileBar"
import ContentCut from "@mui/icons-material/ContentCut"
import Box from "@mui/material/Box"
import { getCategories } from "../api/categories/getCategories"
import { toPlainString } from "../../lib/utils/stringTools"
import NewProductSection from "../../components/AdminPage/NewProductSection"
import NewCategsSection from "../../components/AdminPage/NewCategsSection"
import { Paper } from "@mui/material"
const sections = [
    {
        name: 'Pedidos',
        path: 'pedidos',
        icon: <ContentCut fontSize="small" />
    },
    {
        name: 'Crear producto',
        icon: <ContentCut fontSize="small" />
    },
    {
        name: 'Crear categorías',
        icon: <ContentCut fontSize="small" />
    },

    {
        name: 'Reiniciar estado',
        icon: <ContentCut fontSize="small" />
    }
]

const UserPage = ({ authId, isLogged, categories }) => {
    const router = useRouter()
    const { adminSlug } = router.query



    return (
        <Layout isLogged={isLogged} categories={categories}>
            <Container sx={{ mt: '2em' }}>
                <Box sx={{ flexGrow: 1, background: "green" }}>
                    <Grid container spacing={2}>
                        <Grid item xs={6} sm={4} md={3} lg={3} >
                            <ProfileBar profile={'admin'} sections={sections}></ProfileBar>
                        </Grid>
                        <Grid item xs={6} sm={4} md={3} lg={9} >
                            {
                                adminSlug === 'pedidos' ?
                                    <Paper>Orders</Paper>
                                    :
                                    adminSlug === 'crear-producto' ?
                                        <NewProductSection />
                                        :
                                        adminSlug === 'crear-categorias' ?
                                            <NewCategsSection />
                                            :
                                            <Box />
                            }
                        </Grid>
                    </Grid>
                </Box>
            </Container >
        </Layout>
    )
}

export default UserPage

export async function getStaticPaths() {


    const paths = sections.map(section => ({ params: { adminSlug: toPlainString(section.name) } }))

    // console.log('EL PATHH', paths)
    // We'll pre-render only these paths at build time.
    // { fallback: false } means other routes should 404.
    return { paths, fallback: false }
}

export async function getStaticProps(context) {
    console.log('CONTEXTT', context.params)
    //CATEGORIAS
    const categoriesRes = await getCategories()
    const categories = JSON.parse(JSON.stringify(categoriesRes))


    return {
        props: { categories }, // will be passed to the page component as props
    }
}