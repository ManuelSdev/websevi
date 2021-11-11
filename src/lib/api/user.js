import client, { configureClient, resetClient } from './client';
//import storage from '../utils/storage';



export const createUser = userData => {
    return client.post('/users', userData)
}

export const checkSession = () => {
    return client.get('/user')
}