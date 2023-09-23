import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    dark: localStorage.getItem('dark') === 'true' || false, // localStorage'dan değeri alın
};

export const theme = createSlice({
    name: 'darkMode',
    initialState,
    reducers: {
        setDarkMode: (state) => {
            state.dark = !state.dark;
            localStorage.setItem('dark', state.dark.toString());
        },
    },
});

export const { setDarkMode } = theme.actions;
export default theme.reducer;