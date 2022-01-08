import { useRouter } from "next/router"
import Layout from "../../components/layouts/Layout"
import ProfileBar from "../../components/elements/ProfileBar"
import { getCategories } from "../api/categories/getCategories"
import { toPlainString } from "../../lib/utils/stringTools"
import NewProductSection from "../../components/AdminPage/NewProductSection"
import NewCategsSection from "../../components/AdminPage/NewCategsSection"
import SidebarLayout from "../../components/layouts/SidebarLayout"
import AdminOrdersSection from "../../components/AdminPage/AdminOrdersSection"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AssignmentIcon from '@mui/icons-material/Assignment';
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import CreateNewFolderIcon from '@mui/icons-material/CreateNewFolder';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import Working from "../../components/elements/Working"

const sections = [
    {
        name: 'Pedidos',
        path: 'pedidos',
        icon: <ShoppingCartIcon fontSize="small" />
    },
    {
        name: 'Productos',
        path: 'productos',
        icon: <AssignmentIcon fontSize="small" />
    },
    {
        name: 'Crear producto',
        icon: <NoteAddIcon fontSize="small" />
    },
    {
        name: 'Crear categorías',
        icon: <CreateNewFolderIcon fontSize="small" />
    },
    {
        name: 'Importar catálogo',
        icon: <FileDownloadIcon fontSize="small" />
    },
    {
        name: 'Reiniciar estado',
        icon: <RestartAltIcon fontSize="small" />
    }
]

const UserPage = ({ authId, isLogged, categories }) => {
    const router = useRouter()
    const { adminSlug } = router.query

    return (
        <Layout isLogged={isLogged} categories={categories}>
            <SidebarLayout
                sidebar={<ProfileBar profile={'admin'} sections={sections} elevationPaper={1} />}
                content={
                    adminSlug === 'pedidos' ?
                        <AdminOrdersSection />
                        :
                        adminSlug === 'crear-producto' ?
                            <NewProductSection />
                            :
                            adminSlug === 'crear-categorias' ?
                                <NewCategsSection />
                                :
                                <Working />
                }
            />
        </Layout>
    )
}

export default UserPage

export async function getStaticPaths() {
    const paths = sections.map(section => ({ params: { adminSlug: toPlainString(section.name) } }))
    return { paths, fallback: 'blocking', }
}

export async function getStaticProps(context) {
    //CATEGORIAS
    const categoriesRes = await getCategories()
    const categories = JSON.parse(JSON.stringify(categoriesRes))
    return {
        props: { categories }, // will be passed to the page component as props
    }
    revalidate: 1
}