
import useSWR, { useSWRConfig } from 'swr'

const fetcher = (...args) => fetch(...args).then(res => res.json())

export default function useOrders(filters) {
    const { data, error, mutate } = useSWR(filters ? `/api/orders/getUserOrders/${filters}` : null, fetcher)

    return {
        orders: data,
        isLoadingOrders: !error && !data,
        isErrorOrders: error,
        mutateOrders: mutate
    }
}