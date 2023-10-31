import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import modalReducer from './modalSlice';
import appearance from './appearance/index';

const store = configureStore({
    reducer: {
        auth: authReducer,
        modal: modalReducer,
        appearance
    },
});

export default store;