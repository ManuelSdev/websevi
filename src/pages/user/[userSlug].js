import { useRouter } from "next/router"
import Layout from "../../components/layouts/Layout"
import ProfileBar from "../../components/elements/ProfileBar"
import { getCategories } from "../api/categories/getCategories"
import { toPlainString } from "../../lib/utils/stringTools"
import DataSection from "../../components/userPage/DataSection"
import WishListSection from "../../components/userPage/WishListSection"
import SidebarLayout from "../../components/layouts/SidebarLayout"
import OrdersSection from "../../components/userPage/UserOrdersSection"

import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import PaymentOutlinedIcon from '@mui/icons-material/PaymentOutlined';
import Working from "../../components/elements/Working"
import Stack from "@mui/material/Stack"
import CircularProgress from "@mui/material/CircularProgress"
import { useSelector } from "react-redux"
import { getAuth } from "../../app/store/selectors"
import { useGetUserQuery } from "../../app/store/services/userApi"

const sections = [
    {
        name: 'Mis datos',
        path: 'mis-datos',
        icon: <PersonOutlineIcon fontSize="small" />
    },
    {
        name: 'Lista de deseos',
        icon: <FavoriteBorderIcon fontSize="small" />
    },
    {
        name: 'Valoraciones',
        icon: <StarBorderIcon fontSize="small" />
    },
    {
        name: 'Pedidos',
        icon: <ShoppingBagOutlinedIcon fontSize="small" />
    },
    {
        name: 'Opciones de pago',
        icon: <PaymentOutlinedIcon fontSize="small" />
    }
]

const UserPage = ({ categories }) => {

    const router = useRouter()

    const { userSlug } = router.query

    const { authId } = useSelector(getAuth)

    const { data: user, isLoading, isFetching, isError, refetch } = useGetUserQuery(authId)

    return (
        <Layout sx={{ zIndex: 'snackbar' }} categories={categories}>
            <SidebarLayout
                sidebar={<ProfileBar sections={sections} elevationPaper={1} />}
                content={!user ?
                    <Stack sx={{ color: 'grey.500', justifyContent: 'center' }} spacing={2} direction="row">
                        <CircularProgress color="primary" />
                    </Stack>
                    :
                    userSlug === 'mis-datos' ?
                        <DataSection
                            refetch={refetch}
                            isFetching={isFetching}
                            user={user} />
                        :
                        userSlug === 'lista-de-deseos' ?
                            <WishListSection user={user} />
                            :
                            userSlug === 'pedidos' ?
                                <OrdersSection user={user} />
                                :
                                <Working />
                }
            />
        </Layout>
    )
}

export default UserPage

export async function getStaticPaths() {
    const paths = sections.map(section => ({ params: { userSlug: toPlainString(section.name) } }))
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

