import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counterSlice'
import authReducer from './authSlice'
import { createWrapper } from 'next-redux-wrapper'


const makeStore = () =>
    configureStore({
        reducer: {
            auth: authReducer,
            counter: counterReducer,
        },
        devTools: true,
    });


export const wrapper = createWrapper(makeStore)