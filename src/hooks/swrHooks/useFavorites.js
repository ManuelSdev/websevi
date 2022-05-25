
import useSWR from 'swr'

const fetcher = (...args) => fetch(...args).then(res => res.json())

export default function useFavorites(userId) {
    const { data, error, mutate } = useSWR
        (
            userId ?
                `/api/products/getFavorites/${userId}`
                :
                null, fetcher
        )


    return {
        favorites: data,
        isLoadingFavs: !error && !data,
        isErrorFavs: error,
        mutateFavs: mutate
    }
}