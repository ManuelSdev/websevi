import client, { configureClient, resetClient } from './client';

export const createCategories = newCateg => client.post('/categories/createCategories', newCateg)

export const resetCategories = newCategs => client.post('/categories/resetCategories', newCategs)

export const getCategories = (filters) => {
    const params = new URLSearchParams(filters)
    return client.get(`/categories/getCategories/?${params.toString()}`);
};

