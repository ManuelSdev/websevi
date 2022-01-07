import { useAppContext } from "../context"

import CartOrdersTable from "./CartOrdersTable"

const CartStep = () => {

    const { cart, setCart } = useAppContext()


    const handleDelete = productToDelete => ev => {
        ev.preventDefault()
        const newCart = cart.filter(product => product._id !== productToDelete._id)
        console.log('newcart jskjskjslksjlñ', newCart)

        setCart(newCart)
    }

    return (
        <CartOrdersTable cart={cart} handleDelete={handleDelete} />
    )
}

export default CartStep

