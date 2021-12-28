
import useSWR from 'swr'

const fetcher = (...args) => fetch(...args).then(res => res.json())

export default function useFavorites(userId) {
    const { data, error, mutate } = useSWR(userId ? `/api/products/getFavorites/${userId}` : null, fetcher)

    console.log('render useUser', data)
    //const handleMutate = () => mutate(`/api/users/getUser/${filters}`)
    //Data es un array con todos los valores obtenidos en la consulta.
    // La respuesta es un array con un solo objeto user

    return {
        favorites: data,
        isLoadingFavs: !error && !data,
        isErrorFavs: error,
        mutateFavs: mutate
    }
}