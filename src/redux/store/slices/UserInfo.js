import { createSlice } from '@reduxjs/toolkit';

const initialState= {
    user:{
        username: "",
        email: "",
        password: "",
        gender: "",
        favoriteGenre: "",
        termsAccepted: false,
  }};

const userInfoSlice = createSlice({
    name:'userInfo',
    initialState,
    reducers:{
        addNewUser: (state, action)=>{
            console.log(action);
           state.user=action.payload;
        },
        removeUser: ()=> initialState
    }
});
export const {addNewUser, removeUser} = userInfoSlice.actions;
export default userInfoSlice.reducer;
