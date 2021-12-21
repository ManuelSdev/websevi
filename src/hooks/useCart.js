

function useCart(product, cart, allowUseEffect0) {



    const [productToCart, setProductToCart] = React.useState({
        ...product,
        amount: 0,
    })
    const [amountField, setAmountField] = React.useState(1)

    const { amount } = productToCart
    const onlyUpdateAmount = React.useRef(true);
    const firstRender = React.useRef(true);
    const allowUseEffect = React.useRef(false);

    // console.log('CART ACTUAL', cart)

    const increaseAmount = () => setAmountField(amountField + 1)
    const decreaseAmount = () => amountField > 1 && setAmountField(amountField - 1)

    const addToCart = () => {
        allowUseEffect.current = true
        let cartCurrentAmountOfThisProduct = 0
        cart.map(productInCart => {
            // productInCart && console.log('IN CART ID ', productInCart._id)
            //  console.log('PROD ID  ', product)
            //Si el producto actual ya se encuentra en el carrito, actualiza el valor
            //amount sumando el amount del producto del carrito con el amount del producto actual
            if (productInCart._id === product._id) {
                // console.log('productInCart.amount ', productInCart.amount)
                //  console.log(' product.amount ', productToCart.amount)
                //const updatedAmount = productInCart.amount + productToCart.amount
                // console.log('UPDATED', updatedAmount)

                //setProductToCart({ ...product, amount: updatedAmount })
                cartCurrentAmountOfThisProduct = productInCart.amount
            }
        })
        console.log('CUANTOS', amount + amountField + cartCurrentAmountOfThisProduct)
        return setProductToCart({ ...product, amount: amount + amountField + cartCurrentAmountOfThisProduct })
    }

    return {
        productToCart,
        setProductToCart,
        addToCart,
        increaseAmount,
        decreaseAmount,


    }
}

