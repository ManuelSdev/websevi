import { useRouter } from "next/router"
import Layout from "../../components/layouts/Layout"
import ProfileBar from "../../components/elements/ProfileBar"
import { getCategories } from "../api/categories/getCategories"
import { toPlainString } from "../../lib/utils/stringTools"
import NewProductSection from "../../components/AdminPage/NewProductSection"
import NewCategsSection from "../../components/AdminPage/NewCategsSection"
import SidebarLayout from "../../components/layouts/SidebarLayout"
import AdminOrdersSection from "../../components/AdminPage/AdminOrdersSection"
import Working from "../../components/elements/Working"
import { adminPageSections } from "../../items/profilePageSections"

const sections = adminPageSections

const AdminPage = ({ categories }) => {
    const router = useRouter()
    const { adminSlug } = router.query

    return (
        <Layout categories={categories}>
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

export default AdminPage

export async function getStaticPaths() {
    const paths = sections.map(section => ({ params: { adminSlug: toPlainString(section.name) } }))
    return { paths, fallback: 'blocking' }
}

export async function getStaticProps(context) {
    //CATEGORIAS
    const categoriesRes = await getCategories()
    const categories = JSON.parse(JSON.stringify(categoriesRes))
    return {
        props: { categories }, // will be passed to the page component as props
        revalidate: 1
    }

}