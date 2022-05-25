import { createSlice, current } from '@reduxjs/toolkit'

const initialState = {
    cartProducts: [],
    cartTotalPrice: 0,
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        cartAddProduct: (state, action) => {
            //action.payLoad=[{product}, amount]

            const [product, amount] = action.payload
            console.log('yes')
            if (state.cartProducts.find(productInCart => productInCart._id === product._id)) {
                console.log('&&&&&&&&&&&&&')
                state.cartProducts = state.cartProducts.map(productInCart => {
                    if (productInCart._id === product._id) {
                        productInCart.amount += amount
                    }
                    return productInCart
                })
            } else {
                product.amount = amount
                console.log('sssssssssssssssssssssssss', product)
                state.cartProducts.push(product)
            }
        },
        cartDeleteProduct: (state, action) => {
            //action.payLoad={product}
            const { _id: productId } = action.payload
            state.cartProducts = state.cartProducts.filter(productInCart => productInCart._id !== productId)
        },
        cartProductIncrement: (state, action) => {
            //action.payLoad={product}
            const { _id: productId } = action.payload
            state.cartProducts = state.cartProducts.map(productInCart => {
                if (productInCart._id === productId) {
                    productInCart.amount += 1
                }
                return productInCart
            })
        },
        cartProductDecrement: (state, action) => {
            //action.payLoad={product}
            const { _id: productId } = action.payload
            state.cartProducts = state.cartProducts.map(productInCart => {
                if (productInCart._id === productId) {
                    productInCart.amount -= 1
                }
                return productInCart
            })
        },
        cartSet: (state, action) => {
            state.cartProducts = action.payload
        },


    },
})


export const {
    cartAddProduct,
    cartDeleteProduct,
    cartProductIncrement,
    cartProductDecrement,
    cartSet,
} = cartSlice.actions

export default cartSlice.reducer