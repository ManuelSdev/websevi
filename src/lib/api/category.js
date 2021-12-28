import client, { configureClient, resetClient } from './client';
//import storage from '../utils/storage';



export const createCategories = newCateg => client.post('/categories/createCategories', newCateg)

export const resetCategories = newCategs => client.post('/categories/resetCategories', newCategs)

export const getCategories = (filters) => {
    const params = new URLSearchParams(filters)
    //console.log("ppppppppppppppp", params.toString())
    return client.get(`/categories/getCategories/?${params.toString()}`);
};

