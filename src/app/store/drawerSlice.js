import { createSlice, current } from '@reduxjs/toolkit'

const initialState = {
    userDrawerIsOpen: false,
    categDrawerIsOpen: false,
}

export const drawerSlice = createSlice({
    name: 'drawer',
    initialState,
    reducers: {
        toggleUserDrawer: (state) => {
            state.userDrawerIsOpen = !state.userDrawerIsOpen
        },
        toggleCategDrawer: (state) => {
            state.categDrawerIsOpen = !state.categDrawerIsOpen
        },

    },
})

export const { toggleUserDrawer, toggleCategDrawer } = drawerSlice.actions

export default drawerSlice.reducer