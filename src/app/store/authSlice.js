import { createSlice, createAsyncThunk, current } from '@reduxjs/toolkit'
import ThirdPartyEmailPassword from 'supertokens-auth-react/recipe/thirdpartyemailpassword'

export const authLogout = createAsyncThunk('',
    async () => await ThirdPartyEmailPassword.signOut()
)

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
        /*
        authLogout: (state) => {
            state.isLogged = false
            state.isAdmin = false
            state.authId = ''
        },
        */
    },
    extraReducers: (builder) => {
        // Add reducers for additional action types here, and handle loading state as needed
        builder.addCase(authLogout.fulfilled, (state, action) => {
            // Add user to the state array
            state.isLogged = false
            state.isAdmin = false
            state.authId = ''
        })
    },

    // Later, dispatch the thunk as needed in the app
    //dispatch(authLogout())
})

export const { authLoginUser, authLoginAdmin, authId } = authSlice.actions

export default authSlice.reducer