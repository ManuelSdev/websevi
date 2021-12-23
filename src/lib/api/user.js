import client, { configureClient, resetClient } from './client';
//import storage from '../utils/storage';



//Llamada a la API de supertokens
export const checkSession = () => {
    return client.get('/user')
}

export const updateUser = (idParams, newUserValue) => {
    console.log('@@@@@@@@@@@@@@@ ideparamas', newUserValue)
    return client.post(`/users/updateUser/${idParams}`, newUserValue)
}