import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    user: JSON.parse(localStorage.getItem('user')) || null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loginStart: (state) => {
            state.error = null;
        },
        loginSuccess: (state, action) => {
            state.user = action.payload;
            state.error = null;
            localStorage.setItem('user', JSON.stringify(action.payload));
        },
        loginFailure: (state, action) => {
            state.user = null;
            state.error = action.payload;
        },
        logout: (state) => {
            state.user = null;
            state.error = null;
            localStorage.removeItem('user');
        },
    },
});

export const { loginStart, loginSuccess, loginFailure, logout } = authSlice.actions;

export default authSlice.reducer;