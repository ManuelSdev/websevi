
import { useAddOrderMutation } from "../../app/store/services/orderApi"
import CartResumeTable from "./CartResumeTable"

const ResumeStep = ({ user, order }) => {

    const [
        addOrder,
        { status, isUninitialized, isLoading, isSuccess, data, isError }
    ] = useAddOrderMutation({ fixedCacheKey: 'carrito-key', })

    return (
        <CartResumeTable
            user={user}
            order={order}
        />
    )
}

export default ResumeStep