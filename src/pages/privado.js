

//https://github.com/supertokens/next.js/blob/canary/examples/with-supertokens/pages/index.js#L36

import dynamic from 'next/dynamic'
import ThirdPartyEmailPassword from 'supertokens-auth-react/recipe/thirdpartyemailpassword'

const ThirdPartyEmailPasswordAuthNoSSR = dynamic(
    new Promise((res) =>
        res(ThirdPartyEmailPassword.ThirdPartyEmailPasswordAuth)
    ),
    { ssr: false }
)

function Protegida() {
    return (
        <div>PÁGINA PRIVADA</div>
    )
}

const Privado = () => {


    return (
        <ThirdPartyEmailPasswordAuthNoSSR>
            <Protegida />
        </ThirdPartyEmailPasswordAuthNoSSR>
    )

    // we protect ProtectedPage by wrapping it
    // with ThirdPartyEmailPasswordAuthNoSSR




}

export default Privado