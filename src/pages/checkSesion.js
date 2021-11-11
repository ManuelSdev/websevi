
import { checkSession } from "../lib/api/user"
import usePromise from "../hooks/usePromise"
import React from "react"
const Store = ({ isLogged, hola }) => {

    console.log(isLogged)
    const { loading, error, throwPromise, data } = usePromise({})

    // const history = useHistory()
    const handleSubmit = async () => {
        const res = await throwPromise(checkSession())
        console.log(res.b)
        if (res.status === 200) {
            console.log(res)
            alert(JSON.stringify(res))
        }
    }
    async function fetchUserData() {
        const res = await fetch('/api/user')
        if (res.status === 200) {
            const json = await res.json()
            console.log(JSON.stringify(json))
        }
    }
    fetchUserData()

    return (
        <div>
            HOLA
            {isLogged && <div>ADIOS</div>}
        </div>
    )
}

export default Store