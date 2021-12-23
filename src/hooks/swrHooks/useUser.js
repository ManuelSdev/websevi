
import useSWR from 'swr'

const fetcher = (...args) => console.log('################', ...args) || fetch(...args).then(res => res.json())

export default function useUser(filters) {
    const { data, error } = useSWR(`/api/users/getUser/${filters}`, fetcher)
    //Data es un array con todos los valores obtenidos en la consulta.
    // La respuesta es un array con un solo objeto user

    return {
        users: data,
        isLoading: !error && !data,
        isError: error
    }
}