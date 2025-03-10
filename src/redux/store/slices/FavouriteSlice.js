import { createSlice } from '@reduxjs/toolkit';
const initialState = {favourites:[]};

const favouriteSlice = createSlice({
    name: 'favourites',
    initialState,
    reducers: {
        addFavourite: (state, action) => {
            const isAlreadyFav = state.favourites.some(movie => movie.id === action.payload.id);
            if (!isAlreadyFav) {
                state.favourites.push(action.payload);
                // counter++;
            }
        },
        removeFavourite: (state, action) => {
             state.favourites=state.favourites.filter(movie => movie.id !== action.payload.id); 
        }
    }
});

export const { addFavourite, removeFavourite } = favouriteSlice.actions;
export default favouriteSlice.reducer;

