
import useSWR, { useSWRConfig } from 'swr'

const fetcher = (...args) => fetch(...args).then(res => res.json())

export default function useAllOrders() {
    const { data, error, mutate } = useSWR(`/api/orders/getAdminOrders`, fetcher)

    //console.log('render useUser', data)
    //const handleMutate = () => mutate(`/api/users/getUser/${filters}`)
    //Data es un array con todos los valores obtenidos en la consulta.
    // La respuesta es un array con un solo objeto user

    return {
        orders: data,
        isLoadingOrders: !error && !data,
        isErrorOrders: error,
        mutateOrders: mutate
    }
}