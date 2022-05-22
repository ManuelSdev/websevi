import modCategories from "../assets/initialsCategories"
import initialProducts from "../assets/initialsProducts"
import { resetCategories } from "./api/category"
import { resetProducts } from "./api/product"



const a = initialProducts
const b = modCategories



export const restartCategsss = async () => {
    console.log('JPDERRRRRRRRRRRRRRRRRR')
    await resetProducts(b)
    await resetCategories(a)

}

