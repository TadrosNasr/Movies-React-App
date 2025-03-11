import { createSlice } from '@reduxjs/toolkit';
const initialState = {favourites:[], counter:0};

const favouriteSlice = createSlice({
    name: 'favourites',
    initialState,
    reducers: {
        addFavourite: (state, action) => {
            const isAlreadyFav = state.favourites.some(movie => movie.id === action.payload.id);
            if (!isAlreadyFav) {
                state.favourites.push(action.payload);
                state.counter++;
            }
        },
        removeFavourite: (state, action) => {
             state.favourites=state.favourites.filter(movie => movie.id !== action.payload.id); 
             state.counter--;
             console.log(state.counter);

        }
    }
});

export const { addFavourite, removeFavourite } = favouriteSlice.actions;
export default favouriteSlice.reducer;

