
import useSWR, { useSWRConfig } from 'swr'

const fetcher = (...args) => fetch(...args).then(res => res.json())

export default function useUser(filters) {
    const { data, error, mutate } = useSWR(filters ? `/api/users/getUser/${filters}` : null, fetcher)

    //console.log('render useUser', data)
    //const handleMutate = () => mutate(`/api/users/getUser/${filters}`)
    //Data es un array con todos los valores obtenidos en la consulta.
    // La respuesta es un array con un solo objeto user

    return {
        user: data,
        isLoading: !error && !data,
        isError: error,
        mutate
    }
}