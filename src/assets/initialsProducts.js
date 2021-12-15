import { nameToUrl, toPlainString } from "../lib/utils/stringTools"
import initialsCpus from './initialsCpus'
import initialsMobos from './initialsMobos'
const products =
    [
        ...initialsCpus, ...initialsMobos
    ]

const initialProducts = products.map(product => (
    {
        ...product,
        url: nameToUrl(product.name),
        categories: product.categories.map(categorie => toPlainString(categorie))
    }
))
export default initialProducts

