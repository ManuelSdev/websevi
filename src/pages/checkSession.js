
import { checkSession } from "../lib/api/user"
import usePromise from "../hooks/usePromise"
import React from "react"

//test de obtención de datos del session de supertokens
const Store = ({ isLogged, hola }) => {

    const { loading, error, throwPromise, data } = usePromise({})

    const handleSubmit = async () => {
        const res = await throwPromise(checkSession())
        console.log(res.b)
        if (res.status === 200) {
            console.log(res)
            alert(JSON.stringify(res))
        }
    }
    async function fetchUserData() {
        try {
            const res = await fetch('/api/user')
            if (res.status === 200) {
                const json = await res.json()
                console.log(JSON.stringify(json))
            }
        } catch (error) {
            console.log('error Checksession', error)
        }
    }
    fetchUserData()
    return (
        <div>
            test

        </div>
    )
}

export default Store
