//import Button from "../../shared/Button"
//import FormField from "../../shared/FormField"
import React from 'react';

const RegisterForm = ({ onSubmit, error, isLoading }) => {
    const [credentials, setCredentials] = React.useState({
        username: '',
        email: '',
        password: '',
    });

    //El event lo recibe del onChange ("mezcla" del onchange y del oninput del form html)
    const handleChange = event => {
        setCredentials(oldCredentials => {
            const newCredentials = {
                ...oldCredentials,
                [event.target.name]: event.target.value,
            };
            return newCredentials;
        });
    };
    /**
     * 
     * Este método sustituye al submit del form 
     * Llamará al método onSubmit (que el padre LoginPage pasa por props) 
     * pasando como parámetro las credentials para que LoginPage las use
     * en su propio método, también llamado handleSubmit, para la péticion
     * de login con el login() que importa de auth.js
     */
    const handleSubmit = event => {
        event.preventDefault();
        onSubmit(credentials);
        //console.log("submit")
    };
    const { username, email, password } = credentials;
    return (
        <div className="container">
            <form className="registerForm" onSubmit={handleSubmit}>
                <label htmlFor="username">Nombre y apellido</label>
                <input
                    type="text"
                    name="username"
                    placeholder="Nombre y apellido"
                    onChange={handleChange}
                    value={username}
                    required
                />
                <label htmlFor="email">Dirección de email</label>
                <input
                    type="email"
                    name="email"
                    placeholder="Dirección de email"
                    onChange={handleChange}
                    value={email}
                    required
                />
                <label htmlFor="password">Contraseña</label>
                <input
                    type="password"
                    name="password"
                    placeholder="Contraseña"
                    value={password}
                    onChange={handleChange}
                    required
                />
                <button
                    //El submit será el onSubmit={handleSubmit}
                    type="submit"
                >
                    Crear una cuenta</button>

            </form>
        </div>
    )
}

export default RegisterForm