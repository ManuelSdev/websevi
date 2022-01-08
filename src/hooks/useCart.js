

function useCart(product, cart, allowUseEffect0) {

    const [productToCart, setProductToCart] = React.useState({
        ...product,
        amount: 0,
    })

    const [amountField, setAmountField] = React.useState(1)

    const { amount } = productToCart

    const allowUseEffect = React.useRef(false);



    const increaseAmount = () => setAmountField(amountField + 1)
    const decreaseAmount = () => amountField > 1 && setAmountField(amountField - 1)

    const addToCart = () => {
        allowUseEffect.current = true
        let cartCurrentAmountOfThisProduct = 0
        cart.map(productInCart => {
            //Si el producto actual ya se encuentra en el carrito, actualiza el valor
            //amount sumando el amount del producto del carrito con el amount del producto actual
            if (productInCart._id === product._id) {
                cartCurrentAmountOfThisProduct = productInCart.amount
            }
        })

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

