import { useRouter } from "next/router"
import Layout from "../../components/layouts/Layout"
import Container from "@mui/material/Container"
import Grid from "@mui/material/Grid"
import ProfileBar from "../../components/elements/ProfileBar"
import ContentCut from "@mui/icons-material/ContentCut"
import Box from "@mui/material/Box"
import { getCategories } from "../api/categories/getCategories"
import { toPlainString } from "../../lib/utils/stringTools"
import useUser from "../../hooks/swrHooks/useUser"
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
import revalidateTime from "../../lib/utils/revalidateTime"
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

const UserPage = ({ authId, isLogged, categories }) => {
    const router = useRouter()
    const { userSlug } = router.query
    const { user } = isLogged
    console.log('*------------', authId)
    //const { user, isLoading, isError, mutate } = useUser(authId)
    //users es un array con un unico objeto user que contiene el campo _id: 
    console.log('*------------', isLogged)
    //isLoading ? console.log('*------------LOADING',) : console.log('*------------', user)
    return (
        <Layout sx={{ zIndex: 'tooltip' }} isLogged={isLogged} categories={categories}>

            <SidebarLayout
                sidebar={<ProfileBar sections={sections} />}
                content={!user ?
                    /**TODO: revisa este hola */
                    <Box>HOla</Box>
                    :
                    userSlug === 'mis-datos' ?
                        <DataSection user={user} />
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

    // console.log('EL PATHH', paths)
    // We'll pre-render only these paths at build time.
    // { fallback: false } means other routes should 404.
    return { paths, fallback: 'blocking' }
}

export async function getStaticProps(context) {
    console.log('CONTEXTT', context.params)
    //CATEGORIAS
    const categoriesRes = await getCategories()
    const categories = JSON.parse(JSON.stringify(categoriesRes))


    return {
        props: { categories }, // will be passed to the page component as props
    }
    revalidate: revalidateTime
}

