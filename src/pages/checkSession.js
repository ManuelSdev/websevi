
import { checkSession } from "../lib/api/user"
import usePromise from "../hooks/usePromise"
import React from "react"
import { ThirdPartyEmailPasswordAuth } from 'supertokens-auth-react/recipe/thirdpartyemailpassword';


//import Test from "./checkSessionL";

const Store = ({ isLogged, hola }) => {

    console.log('LOGGED ', isLogged)

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

        </div>
    )
}



export default Store

/*
  return (
        <ThirdPartyEmailPasswordAuth requireAuth={false}>
            <Test />
        </ThirdPartyEmailPasswordAuth>
    )

    */