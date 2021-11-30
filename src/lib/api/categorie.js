import client, { configureClient, resetClient } from './client';
//import storage from '../utils/storage';



export const createCateg = newCateg => client.post('/categories/init', newCateg)

//export const getCategs = level => client.get('/categories/get', level)

export const getCategs = (filters) => {
    const params = new URLSearchParams(filters)
    console.log("ppppppppppppppp", params.toString())
    return client.get(`/categories/get/?${params.toString()}`);
};