import client, { configureClient, resetClient } from './client';
//import storage from '../utils/storage';



export const createCateg = newCateg => client.post('/categories/init', newCateg)

