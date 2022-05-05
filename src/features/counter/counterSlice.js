import { createSlice, current } from '@reduxjs/toolkit'
import { HYDRATE } from 'next-redux-wrapper'
/**
 * Requisitos de un slice
 * -name: string
 * -valor de estado inicial
 * -uno o más reducers para definir los cambios de estado
 */
const initialState = {
    value: 0,
}
//createSlice genera las counterSlice.actions a partir de las claves counterSlice.reducers
export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload
        },
    },
    extraReducers: {
        [HYDRATE]: (state, action) => {
            console.log('CURRENT', current(state))
            console.log('HYDRATE', state, action);
            // state.value = action.payload.counter.value
            return {
                ...state,
                ...action.payload.counter,
            };

        },
    },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer