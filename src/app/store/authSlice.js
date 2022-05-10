import { createSlice, current } from '@reduxjs/toolkit'

const initialState = {
    isLogged: false,
    isAdmin: false,
    authId: '',
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        authLoginUser: (state, action) => {
            console.log(action)
            state.isLogged = true
            state.isAdmin = false
            //state.authId = action.payload
            if (action.payload) state.authId = action.payload
        },
        authLoginAdmin: (state, action) => {
            state.isLogged = true
            state.isAdmin = true
            //state.authId = action.payload
            if (action.payload) state.authId = action.payload
        },
        authLogout: (state) => {
            state.isLogged = false
            state.isAdmin = false
            state.authId = ''
        },
    },
})

export const { authLoginUser, authLoginAdmin, authLogout, authId } = authSlice.actions

export default authSlice.reducer