
//import { getCategsPath } from '../../lib/pathsGetters/getCategoryPath'
import { useRouter } from "next/router"
import React from 'react'
import ProductsSection from '../components/products/ProductsSection'
import usePriceSlider from '../hooks/usePriceSlider'
import Layout from '../components/layouts/Layout'
import useForm from '../hooks/useForm'
import { getProducts } from "./api/products/getProducts"
import { getCategories } from "./api/categories/getCategories"


const Buscar = ({ isLogged, products, categories, filtersProps }) => {

    const router = useRouter()
    //IMPORTANT: ARREGLA EL MAMONEO DEL USESLIDER....MANTIENE PRECIOS DE pagina componentes al pasar a pagina placas-base

    const { selectedPricesRange: currentSelectedPricesRange } = router.query
    // console.log('----------------------------', router.query)
    const { pricesRange } = filtersProps

    const { selectedPricesRange, handlePrice, valuetext, setSelectedPricesRange } = usePriceSlider([])
    //  const props = { selectedPricesRange, handlePrice, valuetext }
    //Este estado permite filtrar/renderizar desde el cliente los productos cuyas categorías coincidan
    const [{ Categorías: filters }] = filtersProps.filters
    const [categoriesFilters, setCategoriesFilters] = React.useState([])

    const { formValue, handleChange: onChange, setFormValue } = useForm({
        checkedFilters: [],
    });

    const { checkedFilters } = formValue

    const props = { selectedPricesRange, handlePrice, valuetext, checkedFilters, onChange }
    React.useEffect(() => {
        //console.log('+++++++++++', selectedPricesRange)
        // props = { selectedPricesRange, handlePrice, valuetext }
        //setSelectedPricesRange(currentSelectedPricesRange ? currentSelectedPricesRange : pricesRange)
        setSelectedPricesRange(currentSelectedPricesRange ? currentSelectedPricesRange : pricesRange)

    }, [pricesRange])
    //console.log('Primeroooo', selectedPricesRange)
    return (
        <Layout isLogged={isLogged} categories={categories}>
            <ProductsSection products={products} filtersProps={filtersProps} {...props}></ProductsSection>
        </Layout>

    )
}



export default Buscar


export async function getServerSideProps(context) {
    const { query } = context
    //Como el nombre de la página es [...pathParams], el objeto query tiene esta forma {pathParams: [...]}
    //El array contiene todos los path params de la url
    //El primer elemento del array siempre es el string introducido en el buscador
    //El resto son las posibles categorías que se usan para filtrar los resultados iniciales de la busqueda 

    const { pathParams } = query
    //Extrae el string introducido en el buscador y lo elimina del array (primer elemento del array)
    const searchKeys = pathParams.shift()
    //Extrae el resto de elementos del array (el primer elemento fue extraido y eliminado con shift() )
    const queryCategories = [...pathParams]


    console.log('&&&&&&&&&&&&&&&& QUERY PARAMS', queryCategories)
    //Obtiene todas las categorías de la bdd para montar el header
    const categoriesRes = await getCategories()
    const categories = JSON.parse(JSON.stringify(categoriesRes))

    //Obtiene los productos coincidentes con las palabras de la barra de busqueda
    //Se buscan matches con los campos name, size, description y categories
    //Si existen filtros por categorías, la consulta los incluye
    const productsRes = queryCategories.length === 0 ?
        await getProducts({ $text: { $search: searchKeys } })
        :
        await getProducts({ $text: { $search: searchKeys }, categories: { $in: queryCategories } })
    const products = JSON.parse(JSON.stringify(productsRes))
    console.log('*************** PRODUCTOS FILTRADOS', products)
    //Genera un array con todas las categorías de los productos obtenidos
    //Se omiten las subcategorías de nivel 3 en esta etapa del prototipo
    const allCategories = products.map(product => {
        const [category1, category2] = product.categories
        return [category1, category2]
    })

    //Concatena los arrays categories incluidos en el array allCategories
    const plainAllCategories = allCategories.flat()
    //Crea el mismo array evitando los elementos repetidos
    const categoriesFilters = [...new Set(plainAllCategories)]
    //El array anterior contiene los nombres de categorías en formato URL, ahora se recuperan los nombres reales
    //const categoriesNames=categories.filter(category=> category)
    console.log('######################', categoriesFilters)

    /**
    * Obtiene el precio máximo de todos los productos y lo pasa como propiedad al filtro usado
    * cuando la category tiene level===2
    * Este precio máximo se usa como tope en el slider de la FiltersBar que permite filtrar por precio
    */
    const prices = products.map(product => product.price)
    const maxPrice = Math.max(...prices)
    const minPrice = Math.min(...prices)
    //Crea un objeto de filtros que emula  las estructuras usadas en /pages/[categoryPath]. Esto permite reutilizala lógica del
    //componente ProductsSection
    //la propiedad filters 
    const filtersProps = {
        hasLink: false,
        filters: [{ Categorías: [...categoriesFilters] }],
        pricesRange: [minPrice, maxPrice]
    }




    return {
        props: { products, categories, filtersProps }, // will be passed to the page component as props
    }
}