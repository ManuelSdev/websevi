

import client, { configureClient, resetClient } from './client';
//import storage from '../utils/storage';



//Llamada a la API de supertokens
export const checkSession = () => {
    return client.get('/user')
}

export const updateUser = (idParams, newUserValue) => {
    // console.log('@@@@@@@@@@@@@@@ ideparamas', newUserValue)
    return client.put(`/users/updateUser/${idParams}`, newUserValue)
}

export const updateFavorites = (userIdParam, productIdParam) => {
    // console.log('@@@@@@@@@@@@@@@ ideparamas', newUserValue)
    return client.put(`/users/updateFavorites/${userIdParam}/${productIdParam}`)
}

export const getUser = (authId) => {
    // console.log('@@@@@@@@@@@@@@@ ideparamas', newUserValue)
    return client.get(`users/getUser/${authId}`)
}