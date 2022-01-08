

import client, { configureClient, resetClient } from './client';

//Llamada a la API de supertokens
export const checkSession = () => {
    return client.get('/user')
}

export const updateUser = (idParams, newUserValue) => {
    return client.put(`/users/updateUser/${idParams}`, newUserValue)
}

export const updateFavorites = (userIdParam, productIdParam) => {
    return client.put(`/users/updateFavorites/${userIdParam}/${productIdParam}`)
}

export const getUser = (authId) => {
    return client.get(`users/getUser/${authId}`)
}