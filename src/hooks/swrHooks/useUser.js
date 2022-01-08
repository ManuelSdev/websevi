
import useSWR, { useSWRConfig } from 'swr'

const fetcher = (...args) => fetch(...args).then(res => res.json())

export default function useUser(filters) {
    const { data, error, mutate } = useSWR(filters ? `/api/users/getUser/${filters}` : null, fetcher)

    return {
        user: data,
        isLoading: !error && !data,
        isError: error,
        mutate
    }
}