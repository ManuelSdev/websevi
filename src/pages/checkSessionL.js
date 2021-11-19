import { useSessionContext } from 'supertokens-auth-react/recipe/session';


const Test = (props) => {
    let { userId, jwtPayload } = useSessionContext();
    console.log('jwtPayload ', jwtPayload)
    return (
        <div>
            HOLA

        </div>


    )
}

export default Test