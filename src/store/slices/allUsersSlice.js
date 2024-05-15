import { createSlice } from "@reduxjs/toolkit";
import {getAllUser} from "../thunks/fetchAllUser";
import { deleteUserByAdmin } from "../thunks/deleteUserByAdmin";

const allUsersSlice = createSlice({
    name : 'users', 
    initialState : {
        users : [{}]
    },
    extraReducers(builders){
        builders.addCase(getAllUser.fulfilled , (state,action)=> {
            state.users = action.payload; 
        })
        builders.addCase(deleteUserByAdmin.fulfilled , (state,action) => {
            state.users = action.payload; 
        })   
    }
})
export const allUsersReducer = allUsersSlice.reducer; 