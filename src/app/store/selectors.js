import { sum } from "../../lib/utils/sum";

export const getAuth = state => state.auth;
/*
export const getIsLogged = state => state.auth.admin;

export const getAuthId = state => state.auth.id;
*/

export const getCart = state => state.cart;

export const getCartVolume = state => {
    const products = state.cart.cartProducts
    if (products.length > 0) {
        const volumeOfEachProduct = products.map(product => product.amount)
        //https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Functions/rest_parameters
        //https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Spread_syntax
        const volume = sum(...volumeOfEachProduct)

        return volume
    } else { return 0 }
}

export const getCartPrice = state => {
    const products = state.cart.cartProducts
    if (products.length > 0) {
        const priceOfEachProduct = products.map(product => product.price * product.amount)
        const price = sum(...priceOfEachProduct)
        console.log('@@@@@@@@@', price)
        return price
    } else { return 0 }


}
