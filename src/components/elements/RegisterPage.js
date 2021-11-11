import RegisterForm from "./RegisterForm"

//import { useHistory } from 'react-router-dom';
//import Loader from '../../shared/Loaders/Loader';

import usePromise from '../../hooks/usePromise';
import { createUser } from '../../lib/api/user';



const RegisterPage = () => {

    const { loading, error, throwPromise } = usePromise()

    // const history = useHistory()
    const handleSubmit = async newUserData => {
        await throwPromise(createUser(newUserData));
        // history.push("/auth/login")
    }

    return <RegisterForm onSubmit={handleSubmit}></RegisterForm>

};

export default RegisterPage;