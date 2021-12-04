import client, { configureClient, resetClient } from './client';
//import storage from '../utils/storage';



export const createCategs = newCateg => client.post('/categories/create', newCateg)

export const resetCategs = newCategs => client.post('/categories/reset', newCategs)

//export const getCategs = level => client.get('/categories/get', level)

export const getCategs = (filters) => {
    const params = new URLSearchParams(filters)
    //console.log("ppppppppppppppp", params.toString())
    return client.get(`/categories/get/?${params.toString()}`);
};

export const getTree = () => client.get(`/categories/getTree`);
