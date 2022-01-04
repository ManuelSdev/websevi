import client, { configureClient, resetClient } from './client';
import { withFormData } from '../utils/converters';
//import storage from '../utils/storage';



export const createProduct_ = newProduct => client.post('/products/createProduct', newProduct)

export const resetProducts = newProducts => client.post('/products/reset', newProducts)


export const getPresignedS3POST = filename => client.post('/uploadS3', filename)

export const uploadImageS3 = (url, filename) => client.post(`${url}`, filename)

export const upload2 = (filename) => client.post('/upload2', filename)

//export const getProducts=()=> client.get



//export const getPresignedS3POST = filename => client.post(`/uploadS3`)



export const createProduct = withFormData(newProduct => {
    //console.log("NEW ADD*****************", newAd)
    return client.post('/products/createProduct', newProduct);
});

export const checkSession = () => {
    return client.get('/user')
}

export const getProducts = (ids) => {
    return client.get('/products/getProducts')
}

export const searchProducts = (searchKeys) => {
    const params = new URLSearchParams(searchKeys)
    console.log("ppppppppppppppp", params.toString())
    return client.get(`/products/getProducts/?${params.toString()}`)
}
