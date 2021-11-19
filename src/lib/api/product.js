import client, { configureClient, resetClient } from './client';
//import storage from '../utils/storage';



export const createProduct = newProduct =>
    client.post('/products/create', newProduct)



export const createAd = withFormData(newAd => {
    //console.log("NEW ADD*****************", newAd)
    return client.post(adsPath, newAd);
});

export const checkSession = () => {
    return client.get('/user')
}