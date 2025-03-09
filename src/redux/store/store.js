import { configureStore } from '@reduxjs/toolkit';
import favouriteReducer from './slices/FavouriteSlice'; 

export const store = configureStore({
    reducer: {
        favourites: favouriteReducer, 
    },
});
