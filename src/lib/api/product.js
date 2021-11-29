import client, { configureClient, resetClient } from './client';
import { withFormData } from '../utils/converters';
//import storage from '../utils/storage';



export const createProduct_ = newProduct => client.post('/products/create', newProduct)

export const getPresignedS3POST = filename => client.post('/uploadS3', filename)

export const uploadImageS3 = (url, filename) => client.post(`${url}`, filename)

export const upload2 = (filename) => client.post('/upload2', filename)

//export const getProducts=()=> client.get



//export const getPresignedS3POST = filename => client.post(`/uploadS3`)



export const createProduct = withFormData(newAd => {
    //console.log("NEW ADD*****************", newAd)
    return client.post('/products/create', newAd);
});

export const checkSession = () => {
    return client.get('/user')
}