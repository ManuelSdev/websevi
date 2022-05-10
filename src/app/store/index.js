import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counterSlice'
import authReducer from './authSlice'
import cartReducer from './cartSlice'
import { createWrapper } from 'next-redux-wrapper'


const makeStore = () =>
    configureStore({
        reducer: {
            auth: authReducer,
            cart: cartReducer,
            counter: counterReducer,
        },
        devTools: true,
    });


export const wrapper = createWrapper(makeStore)