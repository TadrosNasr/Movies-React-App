import { createSlice } from '@reduxjs/toolkit';
const initialState = [];

const favouriteSlice = createSlice({
    name: 'favourites',
    initialState,
    reducers: {
        addFavourite: (state, action) => {
            const isAlreadyFav = state.some(movie => movie.id === action.payload.id);
            if (!isAlreadyFav) {
                state.push(action.payload);
                // counter++;
            }
        },
        removeFavourite: (state, action) => {
            return state.filter(movie => movie.id !== action.payload.id); 
        }
    }
});

export const { addFavourite, removeFavourite } = favouriteSlice.actions;
export default favouriteSlice.reducer;

