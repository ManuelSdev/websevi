import { configureStore } from '@reduxjs/toolkit'
import { createWrapper } from 'next-redux-wrapper'

import { setupListeners } from '@reduxjs/toolkit/query'
import { nextApi } from './services/nextApi'

import counterReducer from './counterSlice'
import authReducer from './authSlice'
import cartReducer from './cartSlice'



const makeStore = () =>
    configureStore({
        reducer: {
            auth: authReducer,
            cart: cartReducer,
            counter: counterReducer,
            [nextApi.reducerPath]: nextApi.reducer,
        },
        // Adding the api middleware enables caching, invalidation, polling,
        // and other useful features of `rtk-query`.
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(nextApi.middleware),
        devTools: true,
    });


export const wrapper = createWrapper(makeStore)

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization

//setupListeners(store.dispatch)