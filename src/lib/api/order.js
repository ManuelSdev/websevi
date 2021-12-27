import client, { configureClient, resetClient } from './client';


export const createOrder = newOrder => client.post('/orders/createOrder', newOrder)
