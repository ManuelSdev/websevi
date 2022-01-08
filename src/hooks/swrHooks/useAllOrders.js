
import useSWR, { useSWRConfig } from 'swr'

const fetcher = (...args) => fetch(...args).then(res => res.json())

export default function useAllOrders() {
    const { data, error, mutate } = useSWR(`/api/orders/getAdminOrders`, fetcher)

    return {
        orders: data,
        isLoadingOrders: !error && !data,
        isErrorOrders: error,
        mutateOrders: mutate
    }
}