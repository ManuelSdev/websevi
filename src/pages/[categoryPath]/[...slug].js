import { useRouter } from 'next/router'
import ProductsLayout from "../../components/modules/productsLayout/ProductsLayout"
import { getProducts } from "../api/products/get"
import { getCats } from '../api/categories/g'
//import { getCategsPath } from '../../lib/pathsGetters/getCategoryPath'
import Layout from '../../components/layouts/Layout'
import { nameToUrl, toPlainString } from '../../lib/utils/stringTools'
import { mapFilters } from '../../lib/mapFilters'
import getFiltersPath from '../../lib/pathsGetters/getFiltersPaht copy'

const Filters = ({ isLogged, products, categories, filtersProps }) => {
    /*
        const router = useRouter()
        const { priceRange: currentPriceRange } = router.query
        console.log('currentPriceRange en [...slug].js', currentPriceRange)
        console.log('maxPrice en [...slug].js', filtersProps.maxPrice)
    */

    // console.log('products', products)
    //  console.log('PRODUCT SSR', products)
    return (
        <Layout isLogged={isLogged} categories={categories}>
            <ProductsLayout products={products} filtersProps={filtersProps}></ProductsLayout>
        </Layout>

    )
}



export default Filters


export async function getServerSideProps(context) {
    const { query } = context
    const { categoryPath, slug } = query

    //Obtiene todas las categorías para montar el header
    const categories_res = await getCats()
    const categories = JSON.parse(JSON.stringify(categories_res))
    //Obtiene la categoría del path/url: es un array compuesto por un único elemento/objeto category
    const [category] = categories.filter(categ => categ.path === categoryPath)

    // console.log('¬¬¬¬¬¬¬¬¬¬¬¬¬¬ category', category)
    //Obtiene los filtros del path
    const { filters } = category
    //console.log('¬¬¬¬¬¬¬¬¬¬¬¬¬¬', filters)
    /**
     * Genera un array de objetos equivalente al array de objetos filters de la category
     * Los objetos del array generado tienen las mismas keys del array filters de la category
     * Los valores de cada key se toman del slug y solo se añaden si existen como valor en la key equivalente
     * del array filters de la category
     * Esto permite saber a que key/tipo de filtro pertenece cada slug
     * Así, se hara el filtrado de productos en función de los productos cuyos campos tengan valores
     * coincidentes con las keys del mismo nombre
     */
    const slugFiltersDirty = filters.map(filter => {
        //Obtiene key de un filtro de la category
        const key = Object.keys(filter)
        //Genera un array con todos los elementos slug que pertenecen a esa key
        //Si una key no tiene asociado ningún slug, se retorna false para desechar
        //estos elementos es un filtrado posterior
        const keyValues = slug.filter(element => filter[`${key}`].includes(element))
        //Retorna un false o un objeto con la estructura de query para mongodb
        return keyValues.length === 0 ? false : { [key]: { $in: [...keyValues] } }
    })
    const slugFilters = slugFiltersDirty.filter(element => element)
    //Crea el objeto que pasamos como filtro en la consulta con el filtro de categoría
    const productsFilter = { category: categoryPath }
    //Añade el resto de filtros contenidos en slugFilters
    slugFilters.map(obj => {
        const newKey = Object.keys(obj)
        productsFilter[newKey] = obj[`${newKey}`]
    })

    //TODO: refactoriza y externaliza TODO esto que viene ahora y que se repite en [categoryPath].js
    const thisCategoryInArray = categories.filter(categ => categ.path === categoryPath)
    //console.log('*******************', categs)
    const [thisCategory] = thisCategoryInArray
    //console.log('*******************', thisCategory)
    const { level } = thisCategory



    //Obtiene los productos
    const products_res = await getProducts(productsFilter)
    const products = JSON.parse(JSON.stringify(products_res))
    /**
     * Obtiene el precio máximo de todos los productos y lo pasa como propiedad al filtro usado
     * cuando la category tiene level===2
     * Este precio máximo se usa como tope en el slider de la FiltersBar que permite filtrar por precio
     */
    const prices = products.map(product => product.price)
    const maxPrice = Math.max(...prices)
    const minPrice = Math.min(...prices)
    /**
     * Si el campo level de  la categoría que extraemos del path (context.params) es de nivel 1,
     * crea un objeto cuyos filtros serán los elementos del campo childs  de la categoría. Se añade
     * al objeto una variable de control hasLink=true para indicar al componente que use estos filtros
     * que deben contener un enlace
     * Si es el campo level es dos, los filtros serán  los elementoslos elementos del campo childs  de la categoría.
     * . Ahora, hasLink=false porque estos filtros contendrán un desplegable en lugar de un enlace
     * 
     */
    const getFiltersProps = () => {
        if (level === 1) {
            const filter = {
                hasLink: true,
                filters: thisCategory.childs,
            }
            return filter
        } else if (level === 2) {
            const filter = {
                hasLink: false,
                filters: thisCategory.filters,
                pricesRange: [minPrice, maxPrice]
            }
            return filter
        }
    }

    const filtersProps = getFiltersProps()
    return {
        props: { products, categories, filtersProps }, // will be passed to the page component as props
    }
}