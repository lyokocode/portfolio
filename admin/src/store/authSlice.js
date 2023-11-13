import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    auth: JSON.parse(localStorage.getItem('auth')) || null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loginStart: (state) => {
            state.error = null;
        },
        loginSuccess: (state, action) => {
            state.auth = action.payload;
            state.error = null;
            localStorage.setItem('auth', JSON.stringify(action.payload));
        },
        loginFailure: (state, action) => {
            state.auth = null;
            state.error = action.payload;
        },
        logout: (state) => {
            state.auth = null;
            state.error = null;
            localStorage.removeItem('auth');
        },
    },
});

export const { loginStart, loginSuccess, loginFailure, logout } = authSlice.actions;

export default authSlice.reducer;