import { useRouter } from 'next/router'
import ProductsLayout from "../components/modules/productsLayout/ProductsLayout"
import { getProducts } from "./api/products/get"
import { getCats } from './api/categories/g'
import { getCategsPath } from '../lib/staticsPathFilters/categsStaticsPaths'
import Layout from '../components/layouts/Layout'
import { nameToUrl } from '../lib/utils/stringTools'
import { mapFilters } from '../lib/mapFilters'

const Categorie = ({ isLogged, products, categs, filter }) => {
    const router = useRouter()
    const { query } = useRouter()
    const { categoriesId } = router.query

    console.log('queryyyyyyyyyy', query)
    // console.log('products', products)
    //  console.log('PRODUCT SSR', products)
    return (
        <Layout isLogged={isLogged} categs={categs}>
            <ProductsLayout products={products} filter={filter}></ProductsLayout>
        </Layout>

    )
}


export default Categorie
/*
export async function getServerSideProps(context) {
    console.log('CONTEXTT', context.params)


    try {
        const query = await getCats({ level: 1 })
        const cats = JSON.parse(JSON.stringify(query))
        return {
            props: { cats }, // will be passed to the page component as props
        }

    } catch (error) {
        return {
            props: { cats: error }, // will be passed to the page component as props
        }
    }
}
*/
/*
export async function getServerSideProps(context) {
    console.log('CONTEXTT', context.params)
    const query = await getProducts()
    const products = JSON.parse(JSON.stringify(query))
    return {
        props: { products }, // will be passed to the page component as props
    }
}
*/
//TODO: revisa fallback y revalidate en prod
export async function getStaticPaths() {

    //Obtiene categorias cuyo campo level vale 1 o 2
    const query = await getCats({ level: { $in: [1, 2] } })
    //console.log('----------------------------', query)
    const categories = JSON.parse(JSON.stringify(query))
    //Genera la estructura del array de paths
    const paths = getCategsPath(categories)

    console.log('EL PATHH', paths)
    // We'll pre-render only these paths at build time.
    // { fallback: false } means other routes should 404.
    return { paths, fallback: false }
}

export async function getStaticProps(context) {
    console.log('CONTEXTT', context.params)
    //CATEGORIAS
    const categories_query = await getCats()
    const categs = JSON.parse(JSON.stringify(categories_query))

    //PRODUCTOS
    /**
     * conext.params contiene el path de la url en este formato { categoriesId: [ 'categoria1', 'categoria2',... ] }
     * lo extraigo y renombro el objeto al operador $all de mongodb para hacer la consulta y obtener 
     * solo los productos correspondientes a las categorías que aparecen en la url
     */
    const { categoriePath } = context.params
    //https://docs.mongodb.com/manual/tutorial/query-arrays/
    const products_query = await getProducts({ categories: { $all: categoriePath } })
    const products = JSON.parse(JSON.stringify(products_query))
    //Toma un producto de muestra para obtener el campo filtro
    const [oneProduct] = products


    //FILTROS

    //Fitra la categoría que corresponde a ese id y devuelve el objeto/categoría dentro de un array
    //Destructuring del array y del objeto para obtener su propiedad level
    const objectCategorieInArray = categs.filter(categ => categ._id === categoriePath)
    //console.log('*******************', categs)
    const [objectCategorie] = objectCategorieInArray
    //   console.log('*******************', objectCategorie)
    const { level } = objectCategorie

    /**
     * Si el campo level de  la categoría que extraemos del path (context.params) es de nivel 1,
     * crea un objeto cuyos filtros serán los elementos del campo childs  de la categoría. Se añade
     * al objeto una variable de control hasLink=true para indicar al componente que use estos filtros
     * que deben contener un enlace
     * Si es el campo level es dos, los filtros serán  los elementos del campo filters de un producto cualquiera,
     * pues todos son de la misma familia y comparten este campo. Ahora, hasLink=false porque estos filtros contendrán
     * un desplegable en lugar de un enlace
     * 
     */
    const filterMaker = () => {
        if (level === 1) {
            const filter = {
                hasLink: true,
                filters: objectCategorie.childs,
            }
            return filter
        } else if (level === 2) {
            const filter = {
                hasLink: false,
                filters: oneProduct.filters
            }
            return filter
        }
    }
    const filter = filterMaker()

    //SUB FILTROS PARA CATEGORÍAS DE NIVEL 2
    //Obtenemos los productos asociados al categoriePath/categoría que obtenemos del path (context.params) 
    /*
        const a = filter.filters.map(filter=>{
           const b= products.map(product=>{
               product[`${filter}`]
           })
           return{ [filter]:b}
        })
    
        const submaker=categoryProducts=>{
            
        }
        */
    /*
const filters = level === 1 ?
    objectCategorie.childs
    :
    oneProduct.filters
*/
    // const lastcategoriePath = categoriesId.slice(-1)
    //const [lastcategoriePath] = categoriesId
    //const childs_query = await getCats({ _id: lastcategoriePath })
    //Las consultas devuelven un array, en este caso con con un solo elemento/objeto/categoría
    // const [{ childs: filters }] = JSON.parse(JSON.stringify(childs_query))
    //console.log('%%%%%%%%%%%%%', filterss)
    //const filters = [1, 2]
    // console.log('LOS PRODUCTOS', products)

    return {
        props: { categs, products, filter }, // will be passed to the page component as props
    }
}