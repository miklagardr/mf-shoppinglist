import { createSlice } from "@reduxjs/toolkit";
import { loginUser } from "../thunks/loginUser";
import { logoutUser } from "../thunks/logoutUser";
import { fetchUser } from "../thunks/fetchUser";
import { deleteUser } from "../thunks/editUser";


const userSlice = createSlice({
    name : 'user', 
    initialState : {
        user : {}, 
        error : '', 
        redirect : false,
        login : false,
    },
    
    extraReducers(builders){
       builders.addCase(loginUser.fulfilled,(state,action) => {
        state.user = action.payload; 
        state.redirect = true; 
        state.login = true; 
        state.error = ''; 
       });
       builders.addCase(loginUser.rejected, (state,action) => {
        state.user = {}; 
        state.error = action.error; 
        state.redirect = false; 
        state.login = false; 
       });
       builders.addCase(logoutUser.fulfilled,(state,action) => {
        state.user = {}; 
        state.error = action.error; 
        state.redirect=false; 
        state.login=false; 
       }); 
       builders.addCase(logoutUser.rejected,(state,action) => {
        state.error = action.error; 
       });
       builders.addCase(fetchUser.fulfilled, (state,action) =>{
        state.user = action.payload; 
        state.redirect = true; 
        state.login = true; 
        state.error = ''; 
       }); 
       builders.addCase(fetchUser.rejected, (state,action) =>{
        state.user = {}; 
        state.error = action.error; 
        state.redirect = false; 
        state.login = false; 
       }); 
       builders.addCase(deleteUser.fulfilled, (state,action) =>{
        state.user = {}; 
        state.redirect = false; 
        state.login = false; 
        state.error = action.error; 
       });
}

})
export const userReducer = userSlice.reducer; 