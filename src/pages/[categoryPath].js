import { useRouter } from 'next/router'
import ProductsSection from "../components/products/ProductsSection"
import { getProducts } from "./api/products/getProducts"
import { getCategories } from './api/categories/getCategories'
import { getCategoryPath } from '../lib/pathsGetters/getCategoryPath'
import Layout from '../components/layouts/Layout'
import usePriceSlider from '../hooks/usePriceSlider'
import React from 'react'

const Category = ({ isLogged, products, categories, filtersProps }) => {
    const router = useRouter()

    const { selectedPricesRange: currentSelectedPricesRange } = router.query
    const { pricesRange } = filtersProps
    const { selectedPricesRange, handlePrice, valuetext, setSelectedPricesRange } = usePriceSlider([])

    const props = { selectedPricesRange, handlePrice, valuetext }

    React.useEffect(() => {
        setSelectedPricesRange(currentSelectedPricesRange ? currentSelectedPricesRange : pricesRange)

    }, [pricesRange])

    return (
        <Layout isLogged={isLogged} categories={categories}>
            <ProductsSection products={products} filtersProps={filtersProps} {...props} />
        </Layout>
    )
}

export default Category

//TODO: revisa fallback y revalidate en prod
export async function getStaticPaths() {
    //Obtiene categorias cuyo campo level vale 1 o 2
    const query = await getCategories({ level: { $in: [1, 2] } })
    const categories = JSON.parse(JSON.stringify(query))
    //Genera la estructura del array de paths
    const paths = getCategoryPath(categories)
    // We'll pre-render only these paths at build time.
    // { fallback: false } means other routes should 404.
    //Retornamos el array paths añadiendo una nueva ruta para las busquedas del buscador 
    return { paths, fallback: 'blocking' }
}

export async function getStaticProps(context) {
    //CATEGORIAS
    const categories_res = await getCategories()
    const categories = JSON.parse(JSON.stringify(categories_res))
    //PRODUCTOS
    /**
     * conext.params contiene el path de la url en este formato { categoriesId: [ 'categoria1', 'categoria2',... ] }
     * lo extraigo y renombro el objeto al operador $all de mongodb para hacer la consulta y obtener 
     * solo los productos correspondientes a las categorías que aparecen en la url
     */
    const { categoryPath } = context.params
    //https://docs.mongodb.com/manual/tutorial/query-arrays/
    const products_query = await getProducts({ categories: { $all: categoryPath } })
    const products = JSON.parse(JSON.stringify(products_query))
    //FILTROS
    //Fitra la categoría que corresponde a ese id y devuelve el objeto/categoría dentro de un array
    //Destructuring del array y del objeto para obtener su propiedad level
    const thisCategoryInArray = categories.filter(categ => categ.path === categoryPath)
    const [thisCategory] = thisCategoryInArray
    const { level } = thisCategory
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
     * Si es el campo level es 2, los filtros serán  los  elementos del campo fields  de la categoría.
     * . Ahora, hasLink=false porque estos filtros contendrán un desplegable en lugar de un enlace
     * 
     */
    const getFiltersProps = () => {
        if (level === 1) {
            const filter = {
                hasLink: true,
                filters: thisCategory.childs,
                pricesRange: [minPrice, maxPrice]
            }
            return filter
        } else if (level === 2) {
            const filter = {
                hasLink: false,
                filters: thisCategory.fields,
                pricesRange: [minPrice, maxPrice]
            }
            return filter
        }
    }
    const filtersProps = getFiltersProps()

    return {
        props: { categories, products, filtersProps } // will be passed to the page component as props
    }
    revalidate: 1
}