import { configureStore } from '@reduxjs/toolkit';
import favouriteReducer from './slices/FavouriteSlice'; 
import userInfoReducer from './slices/UserInfo';
export const store = configureStore({
    reducer: {
        favourites: favouriteReducer, 
        userInfo: userInfoReducer
    },
});
